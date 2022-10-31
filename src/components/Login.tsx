import React, {useState} from 'react'
import Image from 'next/image'
import desiredSignup from 'assets/desired-login-signup-page.png'
import googleIcon from 'assets/google_icon_outlined.png'
import facebookIcon from 'assets/facebook_icon_outlined.png'
import overlayCrossIcon from 'assets/overlay-cross.png'
import showHidePasswordEye from 'assets/show-hide-password-eye.png'
import backIcon from 'assets/back-icon.png'
import firebaseLoginWithProvider from 'services/auth/firebase/firebaseLoginWithProvider'
import {useRouter} from 'next/router'
import {auth} from 'services/auth/firebase/firebase'
import isEmail from 'isemail'
import {saveAccessTokenToLocalStorage, useUserData} from 'contexts/UserData'
import axiosInstance, {paths} from 'utils/api/axiosInstance'

declare global {
	interface Window {
		userLoggedIn: any
	}
}

export default function Login() {
	const [password, setPassword] = useState('')
	const [emailOrPhone, setEmailOrPhone] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const router = useRouter()
	const [userData, setUserData] = useUserData()

	const goToHome = () => {
		router.push('/')
	}

	// Simple functions
	const handleGoogleLogin = async () => {
		await firebaseLoginWithProvider('google.com')
		goToHome()
	}
	const handleFacebookLogin = async () => {
		await firebaseLoginWithProvider('facebook.com')
		goToHome()
	}

	const handleShowHidePassword = () => {
		setShowPassword(!showPassword)
	}

	const handleEmailPasswordSignin = async (email, password) => {
		const {user: dirtyUser} = await auth.signInWithEmailAndPassword(email, password) // https://firebase.google.com/docs/auth/web/password-auth
		const user = JSON.parse(JSON.stringify(dirtyUser))
		console.log('handleEmailPasswordSignin?', user)
		window.userLoggedIn = user // to see real sample data, view in file `sampleData.ts`
	}

	const handleLoginBUTTON = async () => {
		console.log('handleLoginBUTTON?', 1)
		if (emailOrPhone === '') return alert('Email / Phone number cannot be empty.')
		if (password === '') return alert('Password cannot be empty.')

		const isValidEmail = isEmail.validate(emailOrPhone)
		if (!isValidEmail) return alert('Email is not valid.')

		console.log('handleLoginBUTTON?', 2)

		try {
			// LEARN: 14 Sept, 2022: We must login with firebase email/password we won't be able to access firestore db.
			await handleEmailPasswordSignin(emailOrPhone, password)
			console.log('handleLoginBUTTON?', 3)

			setUserData({busy: true})

			try {
				const {data} = await axiosInstance.post(paths.login, {
					username: emailOrPhone,
					password,
				})

				console.log('user logged to backend #j38gsh?:', data)
				setUserData(data)
				saveAccessTokenToLocalStorage(data.access_token)
			} catch (error: any) {
				console.log('got error #j38gsh ?', error.response.data)
				alert('Please provide correct email and password. ~Backend')
			}

			goToHome()
		} catch (error: any) {
			console.log('handleEmailPasswordSignin? error:', {name: error.name, message: error.message})
			// EXPECTED ERRROR :1
			// {
			// 	"name": "FirebaseError",
			// 	"message": "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."
			// }
			if (error.name === 'FirebaseError' && error.message === 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).') {
				alert('User does not exit. Please Signup first! ~Firebase')
			}
			// EXPECTED ERROR :2
			// {
			// 	"name": "FirebaseError",
			// 	"message": "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."
			// }
			if (error.name === 'FirebaseError' && error.message === 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).') {
				alert('Password is invalid or the user does not have a password.')
			}
		}
	}

	const setDemoLoginValues = () => {
		setEmailOrPhone('usertest1@mail.com')
		setPassword('456456')
	}

	return (
		<>
			<div className='root_container__login'>
				{/* <div className='desired__login__signup'>
							<Image src={desiredSignup} alt='desired login signup image' />
						</div> */}

				<div className='container__login'>
					<div className='c1'>
						<div className='back__icon'>
							<Image onClick={goToHome} src={backIcon} alt='back icon' />
						</div>
						<div className='c1__text' onClick={setDemoLoginValues}>
							Log in or sign up
						</div>
						<div className='cross__icon'>
							{/* <Image onClick={goToHome} src={overlayCrossIcon} alt='cross icon' /> */}
							<div></div>
						</div>
					</div>
					<div className='inner__container'>
						<div className='c2'>Login to Continue</div>
						<div className='c3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div>
						<div className='c4'>Email / Phone</div>
						<input className='c5' placeholder='Email address or phone number' value={emailOrPhone} onChange={(e) => setEmailOrPhone(e.target.value)}></input>
						<div className='c6'>Password</div>
						<div className='password__field'>
							<input className={`c7 ${password.length === 0 || showPassword ? '' : 'c7--wide-characters'}`} value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder='Password'></input>
							<div className='password__eye'>
								<Image onClick={handleShowHidePassword} src={showHidePasswordEye} alt='password eye icon' />
							</div>
						</div>
						<button className='c8'>Reset Password</button>
						<button className='c9' onClick={handleLoginBUTTON}>
							Login
						</button>
						<div className='c10'>Or continue with</div>
						<div className='c11 social__icons'>
							<Image onClick={handleGoogleLogin} src={googleIcon} alt='google icon' />
							<Image onClick={handleFacebookLogin} src={facebookIcon} alt='facebook icon' />
						</div>
						<div className='c12'>
							Don't have account? <span onClick={() => router.push('/signup')}>Sign-up</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
