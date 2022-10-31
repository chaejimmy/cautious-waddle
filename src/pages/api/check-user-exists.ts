import type {NextApiRequest, NextApiResponse} from 'next'

const firebase = require('firebase-admin')
const serviceAccount = require('services/auth/firebase/totel-d7322-firebase-adminsdk-pt3ke-e0f3e049fc.json')

let firebaseApp

if (!firebase.apps.length) {
	firebaseApp = firebase.initializeApp({
		credential: firebase.credential.cert(serviceAccount),
		// ~ *BELOW* db url is not requied imo now~Sahil, 15 Sep, 2022
		// databaseURL: 'https://for-next-auth-example-project-default-rtdb.firebaseio.com',
	})
} else {
	// idk if this returs firebaseApp or not,, ~Sahil
	firebaseApp = firebase.app() // if already initialized, use that one
}

const firestore = firebase.firestore()
const usersCollection = firestore.collection('users')
const messagesCollection = firestore.collection('messages')

// Only admin can retrieve all users BTW #1/2 https://stackoverflow.com/questions/46939765/retrieving-a-list-of-users-who-have-registered-using-firebase-auth, #2/2: https://stackoverflow.com/questions/56380107/typeerror-admin-listusers-is-not-a-function
async function getAllUsers() {
	const allUsers: any = []

	const listAllUsers = async (nextPageToken?: string) => {
		const res: any = await (firebase.auth() as any).listUsers(1000, nextPageToken)
		allUsers.push(...res.users)
		if (res.pageToken) {
			await listAllUsers(res.pageToken)
		}
	}

	await listAllUsers()

	// console.log('allUsers?', allUsers)
	return allUsers
}

type ResponseData = {alreadyExists: Boolean; message?: String} | {message: String}

export default async function allUserList(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	const users = await getAllUsers()

	if (req.body.email) {
		const emails = users.map((u) => u.email)
		const alreadyExists = emails.includes(req.body.email)
		res.status(200).json({alreadyExists})
	} else if (req.body.phoneNumber) {
		const snapshot: any = await usersCollection.where('phoneNumber', '==', req.body.phoneNumber).get()
		if (snapshot.docs.length > 0) {
			const emails = snapshot.docs
				.map((t: any) => t.data())
				.map((u) => u.email)
				.join(', ')
			const message = 'Phone number already linked with email ' + emails
			console.log(message)
			res.status(200).json({alreadyExists: true, message})
		} else {
			res.status(200).json({alreadyExists: false})
		}
	} else {
		res.status(400).json({message: 'Please send email or phoneNumber property in the request.'})
	}
}
