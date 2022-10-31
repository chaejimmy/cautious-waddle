import {useState, useEffect, useRef} from 'react'
import Header from 'components/header'
import Image from 'next/image'
import desiredChat from '../assets/desired-chat.png'
import SendMessageIcon from '../assets/send-message-icon.png'
import MessageInputGalleryIcon from '../assets/message-input-gallery-icon.png'
import MessageInputSmileyIcon from '../assets/message-input-smiley-icon.png'
import defaultUserPicture from 'assets/user_image_placeholder.jpg'
import ClientOnly from 'components/ClientOnly'
import {auth, firestore, firebase} from 'services/auth/firebase/firebase'
import {useRouter} from 'next/router'
// react-firebase-hooks 3K* on github
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import firebaseLoginWithProvider from 'services/auth/firebase/firebaseLoginWithProvider'
import {messagesCollection, usersCollection} from 'services/auth/firebase/collections'
import WrapFooter from 'components/WrapFooter'

import styles from 'styles/Chat.module.css'

const env = process.env.NODE_ENV
const isDev = env === 'development'
const isProd = env === 'production'

const DEBUGGING = process.env.NEXT_PUBLIC_DEBUGGING

export default function ChatPage() {
	const [user, loading, error] = useAuthState(auth as any)
	console.log('useAuthState?', {user, loading, error})
	const router = useRouter()

	if (loading) return ''

	if (!user) router.push('/login')

	return (
		<ClientOnly>
			<Header />
			<div className='blueTopBar'></div>

			<Chat />
			
			<div className={styles.wrapfooter}>
				<WrapFooter />
			</div>
			{/* {DEBUGGING === 'true' && <pre>{JSON.stringify({useAuthState: {user, loading, error}}, null, 8)}</pre>} */}
		</ClientOnly>
	)
}

// const friendsCollection = firestore.collection('friends');
const messagesCollectionData: any = [messagesCollection.orderBy('createdAt').limit(5_000), {idField: 'id'}]
const usersCollectionData: any = [usersCollection.orderBy('createdAt').limit(1_000), {idField: 'id'}]

function Chat() {
	// const dummy = useRef();
	const [messagesFromFirestore]: any = useCollectionData(...messagesCollectionData)
	const [usersFromFirestore] = useCollectionData(...usersCollectionData)
	const inputRef = useRef<HTMLInputElement>(null)
	const [currentUser, loading, error] = useAuthState(auth as any)
	const router = useRouter()
	const [otherPerson, setOtherPerson] = useState<any>(null)

	// console.log('messagesFromFirestore?', messagesFromFirestore);

	const messagesFromFirestoreRelatedOnly = messagesFromFirestore?.filter((u) => {
		const c1 = u.from === currentUser?.uid && u.to === otherPerson?.uid
		const c2 = u.from === otherPerson?.uid && u.to === currentUser?.uid
		const isAnyOfConditionsTrue = c1 || c2
		return isAnyOfConditionsTrue
	})

	// Getting most recent messages for each current and every other user to shown in the left bar against each profile icon
	let mostRecentMessageFromAll: {uid: string; text: string; ago: string}[] = []
	if (messagesFromFirestore) {
		usersFromFirestore?.forEach((u) => {
			for (let index = messagesFromFirestore.length - 1; index >= 0; index--) {
				const message = messagesFromFirestore[index]
				const otherPerson = u

				const c1 = message.from === currentUser?.uid && message.to === otherPerson?.uid
				const c2 = message.from === otherPerson?.uid && message.to === currentUser?.uid
				const isAnyOfConditionsTrue = c1 || c2

				const epoch = message?.createdAt?.seconds
				// const date1: any = new Date(epoch * 1000); // epoch to js date object
				const date1: any = epoch
				const date2: any = Math.floor(Date.now() / 1000) // seconds since epoch
				// const diffSeconds: any = Math.abs(date2 - date1);
				const diffSeconds: any = date2 - date1

				let ago = ''
				ago = diffSeconds.toString() + ' sec ago'

				if (diffSeconds.toString() < 3) {
					ago = 'now'
				}

				if (isNaN(diffSeconds.toString())) {
					ago = ''
				}
				// console.log(`${diffSeconds}, ${date2} ${date1}`);

				if (diffSeconds > 59) {
					// calculate in minutes
					ago = `${Math.floor(diffSeconds / 60)} mins ago`
				}
				if (diffSeconds > 3600) {
					ago = `${Math.floor(diffSeconds / 3600)} hours ago`
				}
				if (diffSeconds > 86400) {
					ago = `${Math.floor(diffSeconds / 86400)} days ago`
				}
				if (diffSeconds > 86400 * 7) {
					ago = `${Math.floor(diffSeconds / (86400 * 7))} weeks ago`
				}
				if (diffSeconds > 86400 * 7 * 30) {
					ago = `${Math.floor(diffSeconds / (86400 * 7 * 30))} months ago`
				}

				if (isAnyOfConditionsTrue) {
					mostRecentMessageFromAll.push({uid: otherPerson.uid, text: message?.text, ago})
					// console.log('createAt?', message.createdAt);

					return
				}
			}
		})
	}

	// console.log('messagesFromFirestoreRelatedOnly??', messagesFromFirestoreRelatedOnly);

	let photoURL, uid, name
	if (currentUser) {
		photoURL = currentUser.photoURL
		uid = currentUser.uid
		name = currentUser.displayName
	}

	const handleSendButton = async () => {
		const message = inputRef.current?.value
		if (!message) return
		if (otherPerson == null) {
			alert('Please select target person first! ')
			return
		}

		console.log(message)
		if (inputRef.current !== null) {
			await messagesCollection.add({
				text: message,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
				from: uid,
				photoURL,
				to: otherPerson?.uid,
			})
			// (dummy as any).current.scrollIntoView({behavior: 'smooth'});
			inputRef.current.value = ''
		}
	}
	const inputKeyDown = (e) => {
		if (e.key === 'Enter') {
			console.log(inputRef.current?.value)
			handleSendButton()
		}
	}
	const handleSignOut = async () => {
		await auth.signOut()
		router.push('/')
	}

	const handleSelectUser = (usr) => {
		setOtherPerson(usr)
		// alert(usr.displayName);
	}

	if (loading) return null
	if (!messagesFromFirestore) return null

	return (
		<>
			<div className='container__chat'>
				<div className='contents'>
					<div className='left__column'>
						<div className='heading'>Chat</div>

						<div className='users__list'>
							{/* {Array.from({length: 1}).map((key, idx) => ( */}
							{(usersFromFirestore || [])
								.filter((usr) => usr.uid !== currentUser?.uid)
								.map((usr) => {
									const recentMsgDetails = mostRecentMessageFromAll.find((u) => u.uid === usr.uid)
									const recentText = recentMsgDetails?.text
									const ago = recentMsgDetails?.ago

									return (
										<div onClick={() => handleSelectUser(usr)} key={'user' + usr.uid} className='item'>
											{/* For demo */}
											{/* <Avatar src={'user.png'} alt='avatar' /> */}
											<div className='size54'>
												{/* Fixed 403 error from googleusercontent for the images loaded, it works now!: https://stackoverflow.com/a/72463692/10012446 */}
												{usr.photoURL ? (
													<img className='user-pic' referrerPolicy='no-referrer' src={usr.photoURL} />
												) : (
													<div className='user__pic__default'>
														<Image src={defaultUserPicture} />
													</div>
												)}
											</div>

											<div className='item-details'>
												<div className={`user-name ${usr.uid === otherPerson?.uid ? 'user-name--active' : ''}`}>{usr.displayName}</div>
												<div> {recentText}</div>
											</div>

											<div className='item-time'>{ago}</div>
										</div>
									)
								})}
						</div>
					</div>
					<div className='right__column'>
						{otherPerson ? (
							<>
								<div className='top__bar'>
									{/* for demo */}
									{/* <Avatar className='top__bar__icon' src={'user.png'} alt='avatar' /> */}
									<div className='size54'>
										{/* Fixed 403 error from googleusercontent for the images loaded, it works now!: https://stackoverflow.com/a/72463692/10012446 */}
										<img className='user-pic' referrerPolicy='no-referrer' src={otherPerson?.photoURL /** TODO: */} />
									</div>

									<div className='top__bar__name'>{otherPerson.displayName}</div>
									{/* Name of person */}
								</div>

								<div className='msg-list'>
									{/* Reversing to undo the effect of `flex-direction: column-reverse` */}
									{/* Making copy of messages array coz reverse() modifies the original by default */}
									{[...(messagesFromFirestoreRelatedOnly || [])].reverse().map((m, idx) => {
										const k = m?.createdAt?.seconds.toString()
										// console.log('got key?', k);

										if (!k) {
											// console.log('got key??', m);
										}

										return (
											<div key={idx + m.from + m.to} className={'msg ' + (m.from === auth.currentUser?.uid ? 'msg--me' : 'msg--other')}>
												{m.text}
											</div>
										)
									})}
								</div>

								<div className='input__parent__container'>
									{/* Src: https://icons8.com/ */}
									<div className={`input__message__container ${styles.input}`}>
										<div className='input__message_icon-1'>
											<Image src={MessageInputSmileyIcon} />
										</div>
										<input ref={inputRef} onKeyDown={inputKeyDown} placeholder='Message' className='input__message' />
										<div className='input__message_icon-2'>
											<Image src={MessageInputGalleryIcon} />
										</div>
									</div>

									<div className={`send-message-button ${styles.message}`} onClick={handleSendButton}>
										<Image src={SendMessageIcon} className='send-message-button' />
									</div>
								</div>
								{/* input and send toggle */}
							</>
						) : null}
					</div>
				</div>
			</div>

			<div className={styles.chat}>
				<button className='btn-signout' onClick={handleSignOut}>
					SignOut
				</button>
			</div>
		</>
	)
}
