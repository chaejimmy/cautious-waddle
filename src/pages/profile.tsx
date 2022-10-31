// common
import Head from 'next/head'
import Header from 'components/header'
import WrapFooter from 'components/WrapFooter'
import styles from 'styles/Home.module.css'
import {useState} from 'react'
import Image from 'next/image'
import desiredProfile from 'assets/desired-user-profile.png'
// general
import profileUserImage from 'assets/profile-user-image.png'
import shareIcon from 'assets/profile_page_share_icon.png'
import profileUserIconSmall from 'assets/profile-page-user-icon-sm.png'
import trippleDotIcon from 'assets/profile-page-tripple-dot-icon.png'
import bookmarkIcon from 'assets/profile-page-bookmark-icon.png'
// import img4 from 'assets/profile-page-hotel-image_2.png'
// import img5 from 'assets/profile-page-hotel-image.png'
import user1 from 'assets/profile-page-user-1.png'
import user2 from 'assets/profile-page-user-2.png'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useRouter} from 'next/router'
import {auth, firestore, firebase} from 'services/auth/firebase/firebase'
import {useDocument} from 'react-firebase-hooks/firestore'
import {usersCollection} from 'services/auth/firebase/collections'
import {DocumentReference} from 'firebase/firestore'
import defaultUserPicture from 'assets/user_image_placeholder.jpg'

export default function ProfilePage() {
	const [user, loading, error] = useAuthState(auth as any)
	const router = useRouter()

	if (loading) return ''

	if (!user) router.push('/login')

	return (
		<>
			<Head>
				<title>Signup | Totel</title>
				<meta name='description' content='Signup page | Totel' />
			</Head>
			<ProfileParent />
		</>
	)
}

const user = {name: 'Cameron Williamson', profession: 'Doctor', subject: 'Bio', description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ', rating: '5.0'}

// LEARN: These images are hoted @ https://github.com/sahilrajput03/assets_totel/blob/main/README.md
const postIems = [
	{
		name_user: 'Sonya Clarke',
		userImage: user1,
		datePosted: 'March 24, 2020',
		rating: '2.0',
		gender: 'Male',
		dateAvailable: '4 Jun - 6 Jun',
		hotelName: 'Hilton Miami Downtowss',
		price: '$100',
		hotelImage: 'https://user-images.githubusercontent.com/31458531/188303285-e9aaa14e-7d8f-4b44-b9fc-967182f6a90a.png',
	},
	{
		name_user: 'Emilio Tran',
		userImage: user2,
		datePosted: 'March 24, 2020',
		rating: '5.0',
		gender: 'Male/Female',
		dateAvailable: '4 Jun - 6 Jun',
		hotelName: 'Vagabond Cabin',
		price: '$100',
		hotelImage: 'https://user-images.githubusercontent.com/31458531/188303281-9394bcf4-e232-476a-ad34-119534afa2d4.png',
	},
	// For testing responsiveness
	{
		name_user: 'Sonya Clarke',
		userImage: user1,
		datePosted: 'March 24, 2020',
		rating: '2.0',
		gender: 'Male',
		dateAvailable: '4 Jun - 6 Jun',
		hotelName: 'Hilton Miami Downtowss',
		price: '$100',
		hotelImage: 'https://user-images.githubusercontent.com/31458531/188303285-e9aaa14e-7d8f-4b44-b9fc-967182f6a90a.png',
	},
	{
		name_user: 'Emilio Tran',
		userImage: user2,
		datePosted: 'March 24, 2020',
		rating: '5.0',
		gender: 'Male/Female',
		dateAvailable: '4 Jun - 6 Jun',
		hotelName: 'Vagabond Cabin',
		price: '$100',
		hotelImage: 'https://user-images.githubusercontent.com/31458531/188303281-9394bcf4-e232-476a-ad34-119534afa2d4.png',
	},
]

function ProfileParent() {
	const [userFirebase, loading, error] = useAuthState(auth as any)
	const [snapshot, loadingDocument, errorDocument] = useDocument(usersCollection.doc(userFirebase?.uid) as any)

	let user
	if (snapshot) {
		user = snapshot.data()
	} else {
		return null
	}

	return (
		<>
			<Header photoURL={''} />
			<div className='blueTopBar'></div>

			<Profile />
			<div className={styles.wrapfooter}>
				<WrapFooter />
			</div>
		</>
	)
}

function Profile() {
	const [tab, setTab] = useState('posts')
	const [userFirebase, loading, error] = useAuthState(auth as any)
	const [snapshot, loadingDocument, errorDocument] = useDocument(usersCollection.doc(userFirebase?.uid) as any)

	let user
	if (snapshot) {
		user = snapshot.data()
	}

	const handleTab = (tabName) => () => {
		setTab(tabName)
	}

	// console.log('userFirebase.bio?', userFirebase.bio);

	return (
		<>
			<div className='root__container__profile'>
				<div className='container__profile'>
					<div className='profile__card__wide'>
						<div className='left__column'>
							<div className='profile__user__image'>
								{/* <Image src={profileUserImage} alt='profile user image' /> */}
								<Image src={user?.photoURL || defaultUserPicture} layout='fill' alt='profile user icon small' />
							</div>
							<div className='container__user__icon__and__rating'>
								<div className='profile__user__icon__small'>
									<Image src={profileUserIconSmall} alt='profile user icon small' />
								</div>
								<span className='user__rating'>{user?.rating ?? '1.0'}</span>
							</div>

							<div className='posts__count'>14 Posts</div>
						</div>
						<div className='right__column'>
							<div className='container__user__name__and__share__icon'>
								<div className='user__name'>{user?.displayName || 'No name'}</div>
								<div className='share__icon'>
									<Image src={shareIcon} alt='share icon' />
								</div>
							</div>
							<div className='user__profession'>{user?.profession}</div>
							<div className='user__subject'>{user?.subject}</div>
							<div className='user__description'>{user?.bio || 'No bio'}</div>
							<div className='container__user__actions'>
								<button>Message</button>
								<div className='tripple__dot__icon'>
									<Image src={trippleDotIcon}></Image>
								</div>
							</div>
						</div>
					</div>

					<div className='profile__body'>
						{/* Tabs: `Posts`, `Bookings`, `Reviews` */}
						<div className='container__tabs'>
							<div onClick={handleTab('posts')} className={`tab ${tab === 'posts' ? 'active' : ''}`}>
								Posts
							</div>
							<div onClick={handleTab('bookings')} className={`tab ${tab === 'bookings' ? 'active' : ''}`}>
								Bookings
							</div>
							<div onClick={handleTab('reviews')} className={`tab ${tab === 'reviews' ? 'active' : ''}`}>
								Reviews
							</div>
						</div>

						<div className='posts__items'>
							{postIems.map((post) => {
								let ratingBackgroundClass
								const rating = parseInt(post.rating)
								// TO DO: ~we already have `.bad` class in case you are from future, just define a case for bad rating case as well.
								if (rating < 4) {
									ratingBackgroundClass = 'average'
								} else {
									ratingBackgroundClass = 'good'
								}

								return (
									<div className='post__container'>
										<div className='user__name__image__date__rating'>
											<div className='user__image'>
												<Image width={'100'} src={post.userImage} alt='image of hotel' />
											</div>
											<div className='name__and__date__posted'>
												<div className='user__name'>{post.name_user}</div>
												<div className='date__posted'>{post.datePosted}</div>
											</div>
											<div className={`container__user__icon__and__rating ${ratingBackgroundClass}`}>
												<div className='profile__user__icon__small'>
													<Image src={profileUserIconSmall} alt='profile user icon small' />
												</div>
												<span className='user__rating'>{post.rating}</span>
											</div>
										</div>

										<div className='hotel__image'>
											{/* objectFit="cover" works superb ~ Sahil  */} {/* post.hotelImage = https://user-images.githubusercontent.com/31458531/188303285-e9aaa14e-7d8f-4b44-b9fc-967182f6a90a.png */}
											<Image src={post.hotelImage} layout='fill' objectFit='cover' alt='image of hotel' />
										</div>

										<div className='down__container'>
											<div className='date__and__bookmark__icon'>
												<div className='date__available'>{post.dateAvailable}</div>

												<div className='bookmark__icon'>
													<Image src={bookmarkIcon}></Image>
												</div>
											</div>
											<div className='hotel__name'>{post.hotelName}</div>
											<div className='post__price'>
												<span>{post.price}</span> / Day
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>

				{/* Desired Design Image */}
				{/* <div className='desired__profile__page'>
				<Image src={desiredProfile} alt='desired profile image' />
			</div> */}
			</div>
		</>
	)
}
