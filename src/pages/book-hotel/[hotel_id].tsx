import {useAuthState} from 'react-firebase-hooks/auth'
import {useRouter} from 'next/router'
import Head from 'next/head'
import {auth, firestore, firebase} from 'services/auth/firebase/firebase'
import Image from 'next/image'
import hotelImageWide from 'assets/hotel_image_wide.png'
import mapImage from 'assets/map_image.png'
import personImage from 'assets/person__image.png'
import chatIcon from 'assets/chat__icon.png'
import starIcon from '../../../public/img/icon/icon-star.svg'
import profileUserIconSmall from 'assets/profile-page-user-icon-sm.png'
import bookmarkIcon from 'assets/bookmark__icon.png'
import shareIcon from 'assets/share__icon.png'
import Header from 'components/header'
import WrapFooter from 'components/WrapFooter'
import styles from 'styles/Chat.module.css'
import type {Hotel} from 'utils/hotelsData'
import {getCurrencySymbol} from '../test'
import hotelsData from 'utils/hotelsData'
import {useState} from 'react'

export default function BookingPage() {
	const [user, loading, error] = useAuthState(auth as any)
	const router = useRouter()

	if (loading) return ''

	// !temporarily commented to enable non-logged in users to access booking page
	// if (!user) router.push('/login')

	return (
		<>
			<Head>
				<title>Booking | Totel</title>
				<meta name='description' content='Booking | Totel' />
			</Head>
			<Header />
			{/* <div className='blueTopBar'></div> */}
			{/* We don't need blute top bar on book-hotel page. */}

			<ProfileParent />

			<div className={styles.wrapfooter}>
				<WrapFooter />
			</div>
		</>
	)
}

// const initialRequests = ['Accepted', 'Request', 'Pending', 'Rejected']
const initialRequests = ['Request', 'Request', 'me']

const ProfileParent = () => {
	const router = useRouter()
	const [requests, setRequests] = useState(initialRequests)
	const [waitingListStatus, setWaitingListStatus] = useState<Boolean>(false)

	const acceptedRequests = requests.filter((s) => s === 'Accepted')
	const nonAcceptedRequests = requests.filter((s) => s !== 'Accepted' && s !== 'me')

	const hotel_id = router.query.hotel_id

	const hotel: Hotel | undefined = hotelsData.find((h) => h.id === hotel_id)
	console.log('hotel?', hotel)

	if (!hotel) {
		return <div>No hotel found with id {hotel_id}</div>
	}

	const BookNowButton = (
		<div className='book__now'>
			<button className='btn__book__now' onClick={() => router.push('/payment/booking-details')}>
				Book Now
			</button>
			<button className={`btn__book__now btn__waiting__list ${waitingListStatus ? 'btn__waiting__list__leave gradient-box' : ''}`} onClick={() => setWaitingListStatus(!waitingListStatus)}>
				{waitingListStatus ? 'Leave Wait List' : 'Join Wait List'}
			</button>
		</div>
	)

	const handleRequest = (idx) => () => {
		setRequests((reqs) => {
			const newReqs = [...reqs]

			if (reqs[idx] === 'Request') {
				newReqs[idx] = 'Pending'
				return newReqs
			} else if (reqs[idx] === 'Pending') {
				// ! This case is for testing only
				newReqs[idx] = 'Accepted'
				return newReqs
			} else if (reqs[idx] === 'Accepted') {
				// ! This case is for testing only
				newReqs[idx] = 'Rejected'
				return newReqs
			} else {
				return newReqs
			}
		})
	}

	return (
		<div className='root__book__hotel'>
			<div className='image__slide__show'>
				<div className='hotel__image__wide'>
					{/* <Image src={hotelImageWide} /> */}
					<Image src={hotel.imageUri} layout='fill' objectFit='cover' />
				</div>
			</div>

			<div className='root__container__hotel__details'>
				<div className='date__and__container__icons'>
					<div className='booking__date'>March 24, 2020</div>
					<div className='container__bookmark__and__share__icon'>
						<div className='bookmark__icon'>
							<Image src={bookmarkIcon} />
						</div>
						<div className='share__icon'>
							<Image src={shareIcon} />
						</div>
					</div>
				</div>

				<div className='container__hotel__details'>
					<div className='column__left'>
						<div className='container__name__and__rating'>
							<div className='hotel__name'>{hotel.name}</div>
							<div className='rating__container'>
								<Image src={starIcon} alt='User icon' /> <div className='rating__number'>{hotel.rating}</div>
							</div>
						</div>

						<div className='container__price'>
							<div className='date__and__gender__specific'>
								<div className='start__end__date'>
									{/* {hotel.startDate} - {hotel.endDate} */} {/* Using checkin - checkout time **for now** */}
									{hotel.checkInTime} - {hotel.checkOutTime}
								</div>
								{/* <div className='male__female__only'>Female only</div> */}
							</div>

							<div className='container__price__and__per__day'>
								<div className='hotel__price'>
									{getCurrencySymbol(hotel.priceCurrency)} {hotel.priceTotal}
								</div>{' '}
								<div className='per__day'>/Day</div>
							</div>
						</div>

						<div className='details__title'>Details</div>
						<div className='hotel__details'>
							{' '}
							{hotel.address && (
								<div>
									<strong>Address:</strong> {hotel.address}, {hotel.city}, {hotel.zip}, {hotel.countryName}
								</div>
							)}
						</div>

						<div className='map__image'>
							<Image src={mapImage} />
						</div>
					</div>

					<div className='column__right'>
						{Boolean(acceptedRequests.length) ? (
							<>
								{acceptedRequests.map((status, idx) => (
									<Person status={status} handleRequest={handleRequest(idx)} />
								))}
								{BookNowButton}
							</>
						) : (
							<>{BookNowButton}</>
						)}

						{Boolean(nonAcceptedRequests.length) && (
							<>
								<div className='heading__interested__partners'>Wait List</div>
								{waitingListStatus && <Person status={'me'} />}
								{nonAcceptedRequests.map((status, idx) => (
									<Person key={'person_request' + idx} status={status} handleRequest={handleRequest(idx + acceptedRequests.length)} />
								))}
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

const emptyFun = () => {}

const Person = ({status, handleRequest = emptyFun}) => {
	return (
		<div className={`container__user ${status === 'me' ? 'me' : ''}`}>
			<div className='container__upper'>
				<div className='container__image__name__profession'>
					<div className={`person__image ${status === 'Rejected' ? 'rejected' : ''}`}>
						<Image src={personImage} />
					</div>

					<div className='container__name__and__profession'>
						<div className={`person__name ${status === 'Rejected' ? 'rejected' : ''}`}>Albert Flores</div>
						<div className={`person__profession ${status === 'Rejected' ? 'rejected' : ''}`}>Doctor</div>
						{status === 'me' ? '(me)' : ''}
					</div>
				</div>

				<div className={`container__user__icon__and__rating ${status === 'Rejected' ? 'rejected' : ''}`}>
					<div className='profile__user__icon__small'>
						<Image src={profileUserIconSmall} alt='profile user icon small' />
					</div>
					<span className={`user__rating`}>{'4.0'}</span>
				</div>
			</div>

			{status !== 'me' && (
				<>
					<div className='container__buttons'>
						<button className={status.toLowerCase()} onClick={handleRequest}>
							{status}
						</button>
						<button className={`send__message ${status === 'Rejected' ? 'rejected' : ''}`}>
							<div className='container__send__message'>
								<div className='chat__icon'>
									<Image src={chatIcon} />
								</div>
								<div className={`${status === 'Rejected' ? 'rejected' : ''}`}>Send Message</div>
							</div>
						</button>
					</div>
				</>
			)}
		</div>
	)
}

// {status.toLowerCase() === 'accepted' && BookNowButton}
