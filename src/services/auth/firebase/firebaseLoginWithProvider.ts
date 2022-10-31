import {usersCollection} from './collections';
import {firestore, firebase, loginWithFacebook, loginWithGoogle} from './firebase';

// OFFICIAL DOCS: Get dat with firestore: https://firebase.google.com/docs/firestore/query-data/get-data

export const addToUsersCollection = async (details, displayNameOverride = '', phoneNumberOverride = '') => {
	const providerId = details.providerId;
	const {displayName, email, uid, phoneNumber, photoURL} = details.user;

	try {
		await usersCollection.doc(uid).set({
			// await usersCollection.add({
			displayName: displayNameOverride || displayName,
			email,
			uid,
			phoneNumber: phoneNumber || phoneNumberOverride,
			providerId: providerId || 'email',
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			photoURL,
		});
	} catch (error) {
		debugger;
		alert('failed to add user to users collection');
		console.log('failed to add user to users collection', error);
	}
};

export const updateUserInUsersCollection = async (uid, formData) => {
	try {
		await usersCollection.doc(uid).update(formData);
	} catch (error: any ) {
		alert("Failded to update user: " + error.message)		
	}
}

// Utility Functions
export default async function firebaseLoginWithProvider(providerId) {
	let details;

	switch (providerId) {
		case 'facebook.com':
			details = await loginWithFacebook();
			console.log('details:fb?', details);
			if (!details) {
				alert('facebook login failed..');
			}
			break;

		case 'google.com':
			details = await loginWithGoogle();
			console.log('details:google?', details);
			if (!details) {
				alert('google login failed..');
			}
			break;

		default:
			throw new Error(providerId + ' not implemented yet, ~Totel Errors Suite');
	}

	// Don't try to add user if login failed i.e, `details = null`
	if (!details) return;

	const snapshot: any = await usersCollection.where('email', '==', details.user.email).get();

	// Get all users
	// const snapshot = await usersCollection.get()

	if (snapshot.docs.length === 0) {
		// Add user to users collection
		await addToUsersCollection(details);
		console.log('addToUsersCollection?', 'user added to users collection');
	} else {
		console.log('addToUsersCollection?', 'already exists in users collection');
	}
}