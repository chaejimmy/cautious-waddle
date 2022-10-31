import {useState} from 'react'
import Popup1 from './popup1'
// import hotelsData from 'utils/hotelsDataOld.js'
import hotels, {hotelsByPartnerData} from 'utils/hotelsData'
import starIcon from '../../public/img/icon/icon-star.svg'
import hotelSample from 'assets/hotel_sample.png'
import maleIcon from 'assets/male_icon.png'
import femaleIcon from 'assets/female_icon.png'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Link from 'next/link'
import axiosInstance, {paths} from 'utils/api/axiosInstance'

// console.log(
// 	'got data names:?',
// 	hotelsData.data.map((h) => h.hotel.name)
// )

// const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// const hasImagesFilter = (h) => {
// 	const media = h?.hotel?.media
// 	if (media) {
// 		const first = media[0]
// 		return Boolean(first.uri)
// 	}
// }

// For hotelsDataOld
// const goodShapeMap = (h) => ({name: h.hotel.name, imageUri: h?.hotel.media[0].uri, rating: h.hotel.rating, priceTotal: h.offers[0].price?.total || '0', priceCurrency: h.offers[0].price?.currency || '', startDate: h.offers[0].price.variations.changes[0].startDate, endDate: h.offers[0].price.variations.changes[0].endDate})
// const prettyDateAndMonth = (date) => new Date(date).getDate() + ' ' + monthNames[new Date(date).getMonth()].slice(0, 3)
// const prettyDateMap = (hotel) => ({...hotel, startDate: prettyDateAndMonth(hotel.startDate), endDate: prettyDateAndMonth(hotel.endDate)})
// const hotels: Hotel[] = hotelsData.data.filter(hasImagesFilter).map(goodShapeMap).map(prettyDateMap)

export default function Test() {
	const [isOpen, setIsOpen] = useState(false)
	const togglePopup = () => setIsOpen(!isOpen)
	return (
		<div>
			<h1>Testing It</h1>
			{/* <Login /> */}
			{/* <Popup1 /> */}
			{/* <HotelsList /> */}
			{/* <HotelsListByPartner /> */}
			<Signup />
		</div>
	)
}

const Signup = () => {
	const handleSignup = async () => {
		const email = 'usertest1@mail.com'
		const password = '456456'
		const first_name = 'kim'
		const last_name = 'john'

		const {data} = await axiosInstance.post(paths.signup, {
			email,
			username: '',
			password,
			first_name,
			last_name,
		})

		console.log('data?', data)
	}

	return (
		<>
			<button onClick={handleSignup}>Signup</button>
		</>
	)
}

export const getCurrencySymbol = (priceCurrency) => (priceCurrency === 'GBP' ? '£' : priceCurrency === 'EUR' ? '€' : priceCurrency)

export const HotelsList = () => {
	const router = useRouter()

	const handleHotelClick = () => router.push('/book-hotel')

	return (
		<>
			<div className='hotels__container'>
				{hotels.map((hotel) => {
					return (
						<Link href={`/book-hotel/${encodeURIComponent(hotel.id)}`}>
							<div className='hotel__card'>
								{/* <div className='hotel__card' onClick={handleHotelClick}> */}
								<div className='hotel__image__container'>
									{/* NEED to make a carousel here to show all the available images on hovered state */}
									<img className='hotel__image' src={hotel.imageUri} />
									<div className='start__end__date'>
										{/* {hotel.startDate} - {hotel.endDate} */} {/* Using checkin - checkout time **for now** */}
										{hotel.checkInTime} - {hotel.checkOutTime}
									</div>
								</div>
								<div className='container__details'>
									<div className='hotel__name'>{hotel.name}</div>
									<div className='container__currency__and__rating'>
										<div>
											{/* GBP = pound, EUR = euro */}
											{getCurrencySymbol(hotel.priceCurrency)} {hotel.priceTotal} <span className='light__gray'>/ Day</span>
										</div>
										<div className='rating__container'>
											<div className='rating__number'>{hotel.rating}</div> <Image src={starIcon} alt='User icon' />
										</div>
									</div>
								</div>
								{/* DEBUGGER */}
								{/* <pre>{JSON.stringify(hotel, null, 2)}</pre> */}
							</div>
						</Link>
					)
				})}
			</div>
		</>
	)
}

const hotelsByPartnerDataTyped: Hotel[] = hotelsByPartnerData

export const HotelsListByPartner = () => {
	const router = useRouter()

	// const handleHotelClick = () => router.push('/book-hotel')

	return (
		<>
			<div className='container__hotels__by__partner'>
				{hotelsByPartnerDataTyped.map((hotel) => {
					return (
						<Link href={`/book-hotel/${encodeURIComponent(hotel.id)}`}>
							<div className='hotel__card'>
								{/* <div className='hotel__card' onClick={handleHotelClick}> */}
								<div className='hotel__image__container'>
									{/* <Image layout='fill' objectFit='cover' src={hotelSample} alt='hotel image here?' /> */}
									<Image layout='fill' objectFit='cover' src={hotel.imageUri} alt='hotel image here?' />
									<div className='start__end__date'>
										{hotel.checkInTime} - {hotel.checkOutTime}
									</div>
									<div className={`container__male__female__or__both ${hotel.partners?.male && hotel.partners?.female ? 'should__be__top' : ''}`}>
										{Boolean(hotel.partners?.male) && (
											<>
												<div className='container__image__male__female'>
													<Image src={maleIcon} alt='male / female icon here?' />
												</div>
												<span>{hotel.partners?.male} Male</span>
											</>
										)}
										{Boolean(hotel.partners?.female) && (
											<>
												<div className='container__image__male__female'>
													<Image src={femaleIcon} alt='male / female icon here?' />
												</div>
												<span>{hotel.partners?.female} Female</span>
											</>
										)}
									</div>
								</div>
								<div className='container__details'>
									<div className='hotel__name'>{hotel.name}</div>
									<div className='container__currency__and__rating'>
										<div>
											{hotel.priceCurrency === 'GBP' ? '£' : hotel.priceCurrency} {hotel.priceTotal} <span className='light__gray'>/ Day</span>
										</div>
										<div className='rating__container'>
											<div className='rating__number'>{hotel.rating}</div> <Image src={starIcon} alt='User icon' />
										</div>
									</div>
								</div>
								{/* DEBUGGER */}
								{/* <pre>{JSON.stringify(hotel, null, 2)}</pre> */}
							</div>
						</Link>
					)
				})}
			</div>
		</>
	)
}
