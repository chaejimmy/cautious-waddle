import {Box, Heading, FormControl, FormLabel, Input, Button, Select, Divider, Grid, GridItem, Textarea} from '@chakra-ui/react'
import styled from 'styled-components'
import CustomRadio from './hooks/customRadio'

import {FileUploader} from 'react-drag-drop-files'
import {useEffect, useState, useMemo} from 'react'
import isEmail from 'isemail'
import {auth, firestore, firebase} from 'services/auth/firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {updateUserInUsersCollection} from 'services/auth/firebase/firebaseLoginWithProvider'
import {usersCollection} from 'services/auth/firebase/collections'
import {useCollectionData, useDocument} from 'react-firebase-hooks/firestore'
import axiosInstance, {paths} from 'utils/api/axiosInstance'
import {useUserData} from 'contexts/UserData'

const fileTypes = ['JPG', 'PNG', 'GIF']

const initialFormData = {}

// const initialFormData = {
// 	displayName: 'sahil',
// 	email: 'sahil@rajput.com',
// 	phoneNumber: '+918360267243',
// 	hobbie: 'Reading',
// 	occupation: 'teacher', // occupation: 'doctor',
// 	bio: 'i am excellent developer',
// 	dob: '2022-09-16',
// 	city: 'Panchkula',
// 	gender: 'male', // 'female'
// }

const Settings = () => {
	const [user, loading, error] = useAuthState(auth)
	const [formData, setFormData] = useState(initialFormData)
	const [userData, setUserData] = useUserData()
	console.log('userData? #k5h3', userData)

	// Using firebase
	// const [snapshot, loadingDocument, errorDocument] = useDocument(usersCollection.doc(user.uid))
	// useEffect(() => {
	// 	if (snapshot) {
	// 		console.log('snapshot.date():', snapshot.data())
	// 		setFormData(snapshot.data())
	// 	}
	// }, [snapshot])

	// Using backend now: (15 Sep, 2022)
	useEffect(() => {
		onPageLoad()
	}, [])

	async function onPageLoad() {
		const {data: details} = await axiosInstance.get(paths.profile)
		console.log('got details :?  #5hwh5', details)

		setFormData({
			displayName: details.first_name + ' ' + details.last_name,
			email: details.email,
			phoneNumber: details.phone_no,
			hobbie: details.hobbie?.name,
			occupation: details.occupation?.name,
			bio: details.bio,
			dob: details.date_of_brith.slice(0, 10), // to get first 10 digits from the date say: `"2018-04-01T00:00:00.000Z"`
			city: 'NOTE: Need to add field in backend api ~Backend Work',
			gender: details.gender, // not gettting filled to radio buttons on fetching IDK why.
		})
	}

	const handleInput = (field) => (e) => {
		console.log(field, ':', e.target.value)

		// To handle inputs independently
		switch (field) {
			case 'name':
				break

			case 'email':
				break

			case 'phoneNumber':
				const allowedPhoneNuberLengthLimit = 13
				if (e.target.value.length > allowedPhoneNuberLengthLimit) return alert('Phone number can not have length of more than 13 digits.')

				// remove all + from number
				const pseduoNumber = e.target.value.replaceAll('+', '')

				const hasDigitsOnly = !/\D/.test(pseduoNumber)
				if (!hasDigitsOnly) return alert('Phone number must be numeric.')
				break

			default:
				break
		}

		setFormData((formData) => ({...formData, [field]: e.target.value}))
	}

	const handleSaveButton = async () => {
		// email validation
		const isValidEmail = isEmail.validate(formData.email)
		if (!isValidEmail) alert('Please use a valid email.')

		// phone validation
		const isValidPhoneNumber = /^\+[1-9]\d{1,14}$/.test(formData.phoneNumber)
		if (!isValidPhoneNumber) return alert('Phone number is not valid.\nMake sure you are providing country code as well for e.g., +14155552671, +442071838750, +551155256325.') // Checkout: https://www.twilio.com/docs/glossary/what-e164

		if (isValidEmail && isValidPhoneNumber) {
			try {
				await updateUserInUsersCollection(user.uid, formData)
				alert('Form Sumitted')
			} catch (error) {
				alert(error.message)
			}
		}
	}

	return (
		<>
			<StyledLogo pl={40} pr={40} gridAutoFlow='column' gridTemplateColumns='1fr  fit-content(40%)' gap='8' width='full' align='top' justifyContent='center' background='#e4e4e4;' paddingTop='50px' paddingBottom='50px' alignContent='center' alignItems='start'>
				<GridItem p={6} background='white' borderRadius='10' position='relative' top='-10%'>
					<Box textAlign='center'>
						{/* Debugger */}
						{/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
						{/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
						<Heading fontSize='20'>Edit Profile</Heading>
						<Divider p='2' />
						<Box my={4} textAlign='left'>
							<form>
								<FormControl>
									<FormLabel>Full Name</FormLabel>
									<Input type='text' placeholder='Enter your full name' value={formData?.displayName} onChange={handleInput('displayName')} />
								</FormControl>
								<FormControl mt={6}>
									<FormLabel>Email</FormLabel>
									<Input type='email' placeholder='Enter your email ID.' value={formData?.email} onChange={handleInput('email')} />
								</FormControl>

								<FormControl mt={6}>
									<FormLabel>Phone number</FormLabel>
									<Input type='tel' placeholder='(208) 555-0112' value={formData?.phoneNumber} onChange={handleInput('phoneNumber')} />
								</FormControl>

								<FormControl mt={6}>
									<FormLabel>Hobbie</FormLabel>

									<Select placeholder='Select option' value={formData?.hobbie} onChange={handleInput('hobbie')}>
										<option value='Music, Sports, Traveling'>Music, Sports, Traveling</option>
										<option value='Reading'>Reading</option>
										<option value='Play Games'>Play Games</option>
									</Select>
								</FormControl>

								<FormControl mt={6}>
									<FormLabel>Occupation</FormLabel>

									<Select placeholder='Select option' value={formData?.occupation} onChange={handleInput('occupation')}>
										<option value='doctor'>Doctor</option>
										<option value='teacher'>Teacher</option>
										<option value='student'>Student</option>
									</Select>
								</FormControl>
								<FormControl mt={6}>
									<FormLabel>BIO</FormLabel>
									<Textarea placeholder='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' value={formData?.bio} onChange={handleInput('bio')} />
								</FormControl>

								<FormControl mt={6}>
									<FormLabel>Date of Birth</FormLabel>
									<Input type='date' placeholder='14 july 1992' value={formData?.dob} onChange={handleInput('dob')} />
								</FormControl>
								<FormControl mt={6}>
									<FormLabel>City</FormLabel>
									<Input type='text' placeholder='City' value={formData?.city} onChange={handleInput('city')} />
								</FormControl>

								<FormControl mt={6}>
									<FormLabel>Who you are</FormLabel>

									<CustomRadio inputValue={formData?.gender} handleInput={handleInput('gender')} />
								</FormControl>
								<FormControl mt={6}>
									<Button size='md' height='48px' width='200px' border='2px' backgroundColor='#657ADC' colorScheme='blue' color='white' onClick={handleSaveButton} background='#657ADC !important'>
										Save
									</Button>
								</FormControl>
							</form>
						</Box>
					</Box>
				</GridItem>

				<GridItem p={6} background='white' borderRadius='10' position='relative' top='-10%'>
					<Box textAlign='center'>
						<Heading fontSize='20'>Verify your profile</Heading>
						<Divider p='2' />
						<Box my={4} textAlign='left'>
							<form>
								<FormControl mt={6}>
									<FormLabel>Select your Government id to verify your profile</FormLabel>

									<Select placeholder=''>
										<option value=''>SELECT DOCUMENTS</option>
										<option value='ID Card'>ID Card</option>
										<option value='License'>License</option>
									</Select>
								</FormControl>
								<FormControl mt={6}>
									<FileUploader multiple={true} name='file' types={fileTypes} />
								</FormControl>

								<Heading mt='2' color='#F26465' fontSize='13px'>
									Note : you need upload selfie with document and document copy
								</Heading>

								<FormControl mt={6}>
									<Button size='md' height='48px' width='200px' border='2px' backgroundColor='#657ADC' colorScheme='blue' color='white' background={'#4a61c2'}>
										Submit
									</Button>
								</FormControl>
							</form>
						</Box>
					</Box>
				</GridItem>
			</StyledLogo>
		</>
	)
}

const StyledLogo = styled(Grid)`
	@media only screen and (max-width: 960px) {
		grid-auto-flow: row;
		padding-left: 20px;
		padding-right: 20px;
		padding-top: 20px;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
`

export default Settings
