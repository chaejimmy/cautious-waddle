import Head from 'next/head'
import Header from 'components/header'
import WrapFooter from 'components/WrapFooter'
import styles from 'styles/Home.module.css'
import Image from 'next/image'
import desiredSettings from 'assets/settings-page-desired.png'
import {useState} from 'react'
import overlayCrossIcon from 'assets/overlay-cross.png'
import {useRouter} from 'next/router'

export default function SettingsPage() {
	return (
		<>
			<Head>
				<title>User Settings | Totel</title>
				<meta name='description' content='User Settings | Totel' />
			</Head>

			<Header photoURL={''} />
			<div className='blueTopBar'></div>
			<Settings />

			<div className={styles.wrapfooter}>
				<WrapFooter />
			</div>
		</>
	)
}

enum Tab {
	Notifications = 'notifications',
	ChangePassword = 'change_password',
	Help = 'help',
}
// console.log(Tab.Notifications) // notifications
// console.log(Tab.ChangePassword) // change_password
// console.log(Tab.Help) // help

const Settings = () => {
	const [tab, setTab] = useState<Tab>(Tab.Notifications)
	const router = useRouter()

	const isActive = (tabName) => tab === tabName
	const activeClass = (tabName) => (isActive(tabName) ? 'active' : '')

	return (
		<div className='root__container__settings'>
			<div className='container__settings'>
				<div className='heading__and__cross__icon'>
					<div className='heading'>Settings</div>
					<div onClick={() => router.push('/')} className='cross_icon'>
						<Image src={overlayCrossIcon} />
					</div>
				</div>
				<div className='container__settings__child'>
					{/* left__column */}
					<div className={`left__column ${!isActive(Tab.Notifications) ? 'add__border__top' : ''}`}>
						<div onClick={() => setTab(Tab.Notifications)} className={`setting__title ${activeClass(Tab.Notifications)} ${tab === Tab.Help ? 'has___border__bottom' : ''}`}>
							Notifications
						</div>
						<hr />
						<div onClick={() => setTab(Tab.ChangePassword)} className={`setting__title ${activeClass(Tab.ChangePassword)}`}>
							Change Password
						</div>
						<hr />
						<div onClick={() => setTab(Tab.Help)} className={`setting__title ${activeClass(Tab.Help)}`}>
							Help
						</div>
						<hr />
					</div>
					{/* right__column */}
					{tab === Tab.Notifications && (
						<div className='right__column tab__notifications'>
							<div className='container__item'>
								<div className='title'>Push Notificaion</div>
								<div className='input__toggler'>
									{/* Source: W3schools */}
									<label className='switch'>
										<input type='checkbox' />
										<span className='slider round'></span>
									</label>
								</div>
							</div>
							<div className='container__item'>
								<div className='title'>Chat Notification</div>
								<div className='input__toggler'>
									{/* Source: W3schools */}
									<label className='switch'>
										<input type='checkbox' />
										<span className='slider round'></span>
									</label>
								</div>
							</div>
						</div>
					)}
					{tab === Tab.ChangePassword && (
						<div className='right__column tab__change__password'>
							<div className='input__label'>Old password</div>
							<input type='text' placeholder='Enter your old password' />
							<div className='input__label'>New password</div>
							<input type='text' placeholder='Enter your new password' />
							<div className='input__label'>Confirm new password</div>
							<input type='text' placeholder='Enter your confirm new passowrd' />
							<div className='reset__password'>Reset password</div>
							<button>Update</button>
						</div>
					)}
					{tab === Tab.Help && (
						<div className='right__column'>
							<div className='help__tab__content'>Help section coming soon.</div>
						</div>
					)}
				</div>
			</div>

			{/* Desired Design Image */}
			{/* <div className='desired__profile__page'>
				<Image src={desiredSettings} alt='desired profile image' />
			</div> */}
		</div>
	)
}
