const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)
const serviceId = process.env.TWILIO_VERIFY_SERVICE_SID || ''
// console.log({accountSid, authToken, serviceId});

const isDev = process.env.NODE_ENV === 'development'

export default async function handler(req, res) {
	const {to} = req.body

	const isValidPhoneNumber = /^\+[1-9]\d{1,14}$/.test(to)
	if (isValidPhoneNumber) {
		console.log('Invalid phone number')


		try {
			const verification = isDev ? {status: 'pending'} : await client.verify.v2.services(serviceId).verifications.create({to, channel: 'sms'})

			if (verification.status === 'pending') {
				const msg = 'OTP sent successfully'
				console.log(msg)
				res.status(200).json(msg)
			} else {
				res.status(201).json('Probably otp is sent')
			}
		} catch (error: any) {
			console.log('Error Here: 401: ', error)
			res.status(401).json({name: error.name, message: error.message})
		}
	} else {
		console.log('Error Here: 400: ')
		res.status(400).json({name: 'invalid-phone-number', message: 'Phone number is not valid'})
	}
}
