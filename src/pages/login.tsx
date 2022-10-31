import Login from 'components/Login'
import Head from 'next/head'
import Header from 'components/header'
import WrapFooter from 'components/WrapFooter'
import styles from 'styles/Home.module.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, firestore, firebase} from 'services/auth/firebase/firebase'
import {useRouter} from 'next/router'
import {useUserData} from 'contexts/UserData'

export default function LoginPage() {
	const router = useRouter()
	const [user, loading, error] = useAuthState(auth as any)
	const [userData, setUserData] = useUserData()

	if (loading) return null
	// We say that either firebase user must be logged in or backend user must be logged in.
	if ((user || userData?.access_token) && !userData?.busy) {
		router.push('/')
	}

	return (
		<>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login page | Totel' />
			</Head>

			<Header photoURL={''} />
			<div className='blueTopBar'></div>

			<Login />
			<div className={styles.wrapfooter}>
				<WrapFooter />
			</div>
		</>
	)
}
