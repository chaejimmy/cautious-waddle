const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const client = require('twilio')(accountSid, authToken)
const serviceId = process.env.TWILIO_VERIFY_SERVICE_SID || ''
// console.log({accountSid, authToken, serviceId});

const isDev = process.env.NODE_ENV === 'development'

export default async function handler(req, res) {
	const {to, code} = req.body

	const isValidPhoneNumber = /^\+[1-9]\d{1,14}$/.test(to)
	if (isValidPhoneNumber) {
		try {
			const verification_check = isDev
				? {status: 'approved'}
				: await client.verify.v2
						.services(serviceId) // .services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
						.verificationChecks.create({to, code})

			if (verification_check.status === 'approved') {
				const msg = 'otp verified successfully'
				console.log(msg)
				res.status(200).json(msg)
			} else if (verification_check.status === 'pending') {
				res.status(400).json({name: 'wrong-otp', message: 'OTP you entered is not correct. Please try again.'})
			}
		} catch (error: any) {
			console.log('Error Here: 401: ', error)
			// Possible error 1:
			// {
			// 	"name": "Error",
			// 	"message": "Max check attempts reached"
			// }
			res.status(401).json({name: error.name, message: error.message})
		}
	} else {
		console.log('Invalid phone number', 'Error Here: 400: ')
		res.status(400).json({name: 'invalid-phone-number', message: 'You entered invalid phone number otp. Try again.'})
	}
}
