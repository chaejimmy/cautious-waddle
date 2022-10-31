import Image from 'next/image'
import desiredSignupProcess from 'assets/desired-signup-process.png'
import backIcon from 'assets/back-icon.png'
import americaFlag from 'assets/america_flag_icon.png'
import Head from 'next/head'
import Header from 'components/header'
import {useEffect, useRef, useState} from 'react'
import showHidePasswordEye from 'assets/show-hide-password-eye.png'
import {useRouter} from 'next/router'
import {auth} from 'services/auth/firebase/firebase'
import {addToUsersCollection} from 'services/auth/firebase/firebaseLoginWithProvider'
import axios, {AxiosError} from 'axios'
import {usersCollection} from 'services/auth/firebase/collections'
import WrapFooter from 'components/WrapFooter'
import styles from 'styles/Home.module.css'
import {auth as authFirestore, firestore, firebase} from 'services/auth/firebase/firebase'

/** USING POSTMAN APIS:
 * SUCCESS RESPONSE:
{
    "message": "User registered successfully"
}
 * 
 */

const figmaPhoneNUmber = '+1 846 564 8945'
// const initialPhoneNumber = figmaPhoneNUmber
const initialPhoneNumber = ''

const intialZero = [null, null, null, null]
// const intialZero = [null, null, null, null]

import isEmail from 'isemail'
import {useAuthState} from 'react-firebase-hooks/auth'
import api, {paths, setAuthorizatioHeaderAxiosInstance} from 'utils/api/axiosInstance'
import axiosInstance from 'utils/api/axiosInstance'
import {saveAccessTokenToLocalStorage, useUserData} from 'contexts/UserData'

export default function SignUpPage() {
	const router = useRouter()
	const [user, loading, error] = useAuthState(auth as any)
	const [userData, setUserData] = useUserData()

	console.log('userData?', userData)

	if (loading) return null
	if (user && !userData.busy) router.push('/')

	return (
		<>
			<Head>
				<title>Signup | Totel</title>
				<meta name='description' content='Signup page | Totel' />
			</Head>

			<Header photoURL={''} />
			<div className='blueTopBar'></div>

			<Signup />

			<div className={styles.wrapfooter}>
				<WrapFooter />
			</div>
		</>
	)
}

const Signup = () => {
	const [stage, setStage] = useState(1) // Default 1 // !Temp set to 3 for applying postman signup
	const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber)
	const [remainingTime, setRemainingTime] = useState(5) // in seconds
	const [otp, setOtp] = useState<any>(intialZero)
	// const [otp, setOtp] = useState([1, 2, 3, 4]);
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [name, setName] = useState('')
	const [userData, setUserData] = useUserData()

	const r1 = useRef(null)
	const r2 = useRef(null)
	const r3 = useRef(null)
	const r4 = useRef(null)

	const router = useRouter()

	const handleBack = () => {
		if (stage > 1) {
			setStage(stage - 1)
		} else {
			router.push('/')
		}
	}

	const handlOtpInputs = (idx) => (e) => {
		const isBackspace = e.target.value === ''
		const digitRegex = /\d/
		// Return in case the input is not-digit but bypass backspace so user can delete input
		if (!digitRegex.test(e.target.value) && !isBackspace) return

		const newOtp = [...otp]
		newOtp[idx] = e.target.value
		setOtp(newOtp)

		if (isBackspace) {
			// Return if backspace was pressed for the first otp input box
			if (idx === 0) return

			eval('r' + idx).current?.focus()
		} else if (idx < 3) {
			// Set focus to next input box
			eval('r' + (idx + 2)).current?.focus()
		}
	}
	console.log(otp)

	const handleShowHidePassword = () => {
		setShowPassword(!showPassword)
	}
	// STAGE 1
	const handleSendOtpButton = async () => {
		if (phoneNumber.length === 0) return alert('Please enter phone number first.')

		const isValidPhoneNumber = /^\+[1-9]\d{1,14}$/.test(phoneNumber)
		if (!isValidPhoneNumber) return alert('Phone number is not valid.\nMake sure you are providing country code as well for e.g., +14155552671, +442071838750, +551155256325.') // Checkout: https://www.twilio.com/docs/glossary/what-e164

		const logCode = 'xr325'
		console.log(logCode, 'handleSendOtpButton?', otp)

		let data
		try {
			const res = await axios.post('/api/check-user-exists', {
				phoneNumber,
			})
			data = res.data
			// alert(data.alreadyExists)
			if (data.alreadyExists) alert(data.message)
		} catch (error: any) {
			alert('firebase undhandled error: 5234' + error.message)
			console.log('firebase undhandled error: 5234', {name: error.name, message: error.message})
		}
		// dont' proceed if a user with same phoneNumber already exists
		if (data.alreadyExists) {
			return
		}

		try {
			const {data} = await axios.post('/api/otp/sendVerify', {to: phoneNumber})
			console.log(logCode, 'axios-post-send-verify', data)
			setStage(2)
		} catch (error: any) {
			console.log(logCode, 'error-101:', error)
			alert(error.message)
		}
	}
	// STAGE 2
	const handleSubmitOtp = async () => {
		if (otp.join('') === '') return alert('Please enter otp from your mobile.')

		const logCode = 'xcl65'

		const invalidOtp = otp.some((item) => item === null)
		console.log('invalid otp', 'otp.some(item => item === null)')
		if (invalidOtp) return

		console.log(logCode, 'handleSendOtpButton?', otp)
		try {
			const {data} = await axios.post('/api/otp/checkVerify', {to: phoneNumber, code: otp.join('')})
			console.log(logCode, 'axios-post-send-verify', data)
			setStage(stage + 1)
		} catch (error: any) {
			console.log(logCode, 'error-101:', error)

			const {name, message} = error.response.data
			if (name === 'wrong-otp') {
				alert('OTP you entered is incorrect. Please try again.')
			} else {
				alert(error.response.data.message)
			}
		}
	}

	const handleEmailPasswordSignup = async (email, password) => {
		console.log('here-1')

		try {
			const details = await auth.createUserWithEmailAndPassword(email, password) // https://firebase.google.com/docs/auth/web/password-auth
			console.log('createUserWithEmailAndPassword?', details.user)
			// ! TODO: CREAET USER IN `users` collection with verfied ```phone number, email and name``` // VALUES: phoneNumber, user.email, user?.displayName
			await addToUsersCollection(details, name, phoneNumber) // using `displayNameOverride` to use name what user provided
			console.log('here-2')
			console.log('addToUsersCollection?: FINISHED')

			await auth!.currentUser!.sendEmailVerification({
				url: window.location.href,
				handleCodeInApp: true,
			})
			console.log('here-3')

			return details.user
		} catch (e: any) {
			console.log('here-2.1')
			console.log({name: e.name, message: e.message})

			// Possible Output:1
			// {
			// 	"name": "FirebaseError",
			// 	"message": "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."
			// }
			if (e.name === 'FirebaseError' && e.message === 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).') {
				// TODO: handle user already exists
				alert('User already exists in firebase.')
			}
			return undefined
		}
	}

	const handleFinishButton = async () => {
		if (name === '') return alert('Name cannot be empty.')
		if (email === '') return alert('Email cannot be empty.')
		const isValidEmail = isEmail.validate(email)
		if (!isValidEmail) return alert('Email is not valid.')
		if (password === '') return alert('Password cannot be empty.')

		// To is to make the app aware that screen is signup in the top most hierarchy to prevent user redirect to home page when the signup process is in process.
		// But why? Because app was getting redirect to homepage before uesr is created in heroku backend, thus on the parent component we check if the screen is signup we don't push to home page unless the heroku signup is complete.
		setUserData({busy: true}) // true means that signup process is not completed with heroku backend.

		const user = await handleEmailPasswordSignup(email, password)

		// const name = 'sahil rajput bhatt'
		const first_name = name.substring(0, name.indexOf(' ')) // "sahil"
		const last_name = name.substring(name.indexOf(' ') + 1) // "rajput bhatt"

		try {
			// Signup user ~backend
			const {data} = await axiosInstance.post(paths.signup, {
				email,
				username: '',
				password,
				first_name,
				last_name,
			})

			if (data.message === 'User registered successfully') {
				try {
					// Login user ~backend
					const {data} = await axiosInstance.post(paths.login, {
						username: email,
						password: password,
					})

					setUserData(data) // data shape - {access_token}
					// alert('lal:' + data.access_token) // for debugging only

					// Set headers for the axios instance
					setAuthorizatioHeaderAxiosInstance(data.access_token)

					// Save access_token to localstorage
					saveAccessTokenToLocalStorage(data.access_token)

					// Update phoneNumber of user to backend; Using form data with axios: src: https://stackoverflow.com/a/47630754
					const bodyFormData = new FormData()
					bodyFormData.append('first_name', first_name)
					bodyFormData.append('last_name', last_name)
					bodyFormData.append('native', 'us')
					bodyFormData.append('gender', 'male') // !Alert: Add gender field in signup page
					bodyFormData.append('phone_no', phoneNumber)

					const {data: updatedData} = await axiosInstance.put(paths.profile, bodyFormData)
					console.log('updated profile details?: #2kg83', updatedData)

					router.push('/')
				} catch (error: any) {
					alert('User login failed')
					console.log('#h58s User login failed?', error?.response?.data)
				}
			}
		} catch (error: any) {
			console.log('28g4h #OUTER#', error.response.data)

			if (axios.isAxiosError(error)) {
				const err = error as AxiosError<{message: string}>
				// Access to config, request, and response
				if (err.response?.data.message === 'Account with this email already exists.') {
					console.log('28g4h', err.response?.data.message)
					alert('User already exists in backend. Please signin.')

					// Remove firebase login side-effect of login by signingout
					await authFirestore.signOut()
				}
				console.log('sign up error?', err.response?.data)
			} else {
				// Just a stock error
				console.log('some error 28g4h ~Sahil')
			}
		}
	}

	// const callPrompt = () => {
	// 	handleEmailPasswordSignup('sahilrajput03@gmail.com', 'iamsahil');
	// };

	const handlePhoneNumber = (e) => {
		const allowedPhoneNuberLengthLimit = 13
		if (e.target.value.length > allowedPhoneNuberLengthLimit) return alert('Phone number can not have length of more than 13 digits.')

		// remove all + from number
		const pseduoNumber = e.target.value.replaceAll('+', '')

		const hasDigitsOnly = !/\D/.test(pseduoNumber)
		if (!hasDigitsOnly) return alert('Phone number must be numeric.')

		setPhoneNumber(e.target.value)
	}

	const setMyNumber = () => {
		setPhoneNumber('+918360267243')
	}

	const setDemoDetails = () => {
		setName('kim john')
		setEmail('usertest1@mail.com')
		setPassword('456456')
	}

	const handleDemoOTP = () => {
		setOtp([1, 2, 3, 4])
	}

	return (
		<div style={{}} className='root__container__signup'>
			{/* <button onClick={callPrompt}> Test signup with 'sahilrajput03@gmail.com'</button> */}

			{stage === 1 && (
				<>
					<div className='container__signup'>
						<div className='stage1'>
							<div className='c1'>
								<div className='back__icon' onClick={handleBack}>
									<Image src={backIcon} alt='back icon' />
								</div>
								<div className='c1__text' onClick={setMyNumber}>
									Sign up
								</div>
								<div></div>
							</div>

							<div className='inner__container'>
								<div className='c2'>Enter your number</div>
								<div className='c3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </div>
								<div className='c4'>Enter your Phone number</div>
								<div className='email__phone__field'>
									<div className='country__flag'>
										<Image src={americaFlag} alt='country flag icon' />
									</div>
									<input className='c5' value={phoneNumber} onChange={handlePhoneNumber} type='text' placeholder='9999 999 999'></input>
								</div>
								<button className='c6' onClick={handleSendOtpButton}>
									Send OTP
								</button>
								<div className='c7'>
									Already have account? <span onClick={() => router.push('/login')}>Login</span>
								</div>
							</div>
						</div>
					</div>
				</>
			)}

			{stage === 2 && (
				<>
					<div className='container__signup'>
						<div className='stage1 stage2'>
							<div className='c1'>
								<div className='back__icon' onClick={handleBack}>
									<Image src={backIcon} alt='back icon' />
								</div>
								<div className='c1__text' onClick={handleDemoOTP}>
									Confirm your OTP
								</div>
								<div></div>
							</div>

							<div className='inner__container'>
								<div className='c2'>Enter OTP</div>
								<div className='c3'>We sent OTP on {phoneNumber}</div>
								<div className='c22'>Wrong number?</div>
								<div className='container__otp__inputs'>
									<input ref={r1} maxLength={1} type='text' placeholder='0' onChange={handlOtpInputs(0)} value={otp[0] ?? ''} />
									<input ref={r2} maxLength={1} type='text' placeholder='0' onChange={handlOtpInputs(1)} value={otp[1] ?? ''} />
									<input ref={r3} maxLength={1} type='text' placeholder='0' onChange={handlOtpInputs(2)} value={otp[2] ?? ''} />
									<input ref={r4} maxLength={1} type='text' placeholder='0' onChange={handlOtpInputs(3)} value={otp[3] ?? ''} />
								</div>
								<div className='c21'>
									<div>{remainingTime} sec</div>
									<span>Send again</span>
								</div>
								<button className='c6' onClick={handleSubmitOtp}>
									Submit
								</button>
								<div className='c7'>
									Already have account? <span onClick={() => router.push('/login')}>Login</span>
								</div>
							</div>
						</div>
					</div>
				</>
			)}

			{stage === 3 && (
				<>
					<div className='container__signup'>
						<div className='stage1 stage3'>
							<div className='c1'>
								<div className='back__icon' onClick={handleBack}>
									<Image src={backIcon} alt='back icon' />
								</div>
								<div className='c1__text' onClick={setDemoDetails}>
									Create Account
								</div>
								<div></div>
							</div>
							<div className='inner__container'>
								<div className='c2'>Your Details</div>
								<div className='c3'>We want some basic information</div>

								<div className='input-label'>Your Full Name</div>
								<input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='E.g. Wade Warren' />
								<div className='input-label'>Email address</div>
								<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='E.g. willie.jennings@example.com' />
								<div className='input-label'>Password</div>
								{/* <input type='password' placeholder='Set your password' /> */}
								<div className='password__field'>
									<input value={password} onChange={(e) => setPassword(e.target.value)} className={`c71 ${password.length === 0 || showPassword ? '' : 'c71--wide-characters'}`} type={showPassword ? 'text' : 'password'} placeholder='Password'></input>
									<div className='password__eye'>
										<Image onClick={handleShowHidePassword} src={showHidePasswordEye} alt='password eye icon' />
									</div>
								</div>

								<button className='c6' onClick={handleFinishButton}>
									Finish
								</button>
							</div>
						</div>
					</div>
				</>
			)}

			{/* Desired Design Image */}
			{/* <div className='desired__signup__process'>
				<Image src={desiredSignupProcess} alt='desired login signup image' />
			</div> */}
		</div>
	)
}
