import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider, setPersistence, browserLocalPersistence} from 'firebase/auth';

// Initialize Firebase
// const firebaseConfig = {
// 	apiKey: 'AIzaSyDCIMisRqxjdbBhFRtt1UMP4AZNNljb3v8',
// 	// databaseURL: "https://metoospace.firebaseio.com",
// 	authDomain: 'metoospace-cf8b8.firebaseapp.com',
// 	projectId: 'metoospace-cf8b8',
// 	storageBucket: 'metoospace-cf8b8.appspot.com',
// 	messagingSenderId: '446579819584',
// 	appId: '1:446579819584:web:4c33abbf4de4c9b3694ba5',
// 	measurementId: 'G-86ZD4B91Y9',
// };

// created `web` in google account of "testorange24apple@gmail.com"
const firebaseConfig = {
	apiKey: "AIzaSyAYu8iEeSnAmQzaL_S9LFkRsh0Xq8wOE-A",
	authDomain: "totel-d7322.firebaseapp.com",
	projectId: "totel-d7322",
	storageBucket: "totel-d7322.appspot.com",
	messagingSenderId: "407855852221",
	appId: "1:407855852221:web:39d5c3a392dae3e0f9e5d4",
	measurementId: "G-FNCGTS9LMY"
  };

// sahil's project
// const firebaseConfig = {
// 	apiKey: 'AIzaSyD4Mvmy67bkoW25fMBFWPEisD-onV1N2Sc',
// 	authDomain: 'for-next-auth-example-project.firebaseapp.com',
// 	projectId: 'for-next-auth-example-project',
// 	storageBucket: 'for-next-auth-example-project.appspot.com',
// 	messagingSenderId: '559365040465',
// 	appId: '1:559365040465:web:0fb62c9c06a98dec928b70',
// 	measurementId: 'G-KREKVDDMZP',
// };

let firebaseApp;

if (!firebase.apps.length) {
	firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
	// idk if this returs firebaseApp or not,, ~Sahil
	firebaseApp = firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
const firestore = firebase.firestore();

// ENABLE DISABLE FOR USING EMULATOR ON LOCALHOST
const enableEmulator_onLocalhost = false;
// Connecting app to "CLOUD FIREBASE EMULATOR"
const isBrowser = typeof window !== 'undefined';
if (enableEmulator_onLocalhost && isBrowser) {
	if (window.location.hostname === 'localhost') {
		firestore.useEmulator('localhost', 8080); // https://firebase.google.com/docs/emulator-suite/connect_firestore#web-version-8 // ~sahil
		auth.useEmulator('http://localhost:9099');
	}
}

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

// ! attempt to persist authorization on page refresh
// auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

async function loginWithGoogle() {
	try {
		// 1. https://firebase.google.com/docs/auth/web/auth-state-persistence#web-version-8
		// await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
		// 2. Seems right: https://stackoverflow.com/a/70558051/10012446
		// 3. This also looks good: https://stackoverflow.com/a/59148227/10012446
		// CONCLUSION: Seems like firebase auth by default saves auth on in `indexedDB` and you can simply get the auth data by using hook `useAuthState` form  library `react-firebase-hooks/auth`

		const provider = new GoogleAuthProvider();
		// const auth = getAuth(); // todo remove this line coz now using `auth` directly form `firebase.auth()`'s return value
		const details = await signInWithPopup(auth, provider);

		// return {uid: details.user.uid, displayName: details.user.displayName};
		return details;
	} catch (error: any) {
		// presistence await errors:
		let errorCode = error.code;
		let errorMessage = error.message;

		if (error.code !== 'auth/cancelled-popup-request') {
			console.error(error);
		}

		return null;
	}
}

async function loginWithFacebook() {
	try {
		// await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL); // https://firebase.google.com/docs/auth/web/auth-state-persistence#web-version-8

		const provider = new FacebookAuthProvider();
		// const auth = getAuth(); // todo remove this line coz now using `auth` directly form `firebase.auth()`'s return value
		const details = await signInWithPopup(auth, provider);

		// ?? what is type of shape?~~~!
		return details;
	} catch (error: any) {
		if (error.code !== 'auth/cancelled-popup-request') {
			console.error(error);
		}

		return null;
	}
}

export {firestore, auth, firebase, googleAuthProvider, githubAuthProvider, facebookAuthProvider, twitterAuthProvider, loginWithGoogle, loginWithFacebook};

// complete list of providerId:
// EmailAuthProviderID: password
// PhoneAuthProviderID: phone
// GoogleAuthProviderID: google.com
// FacebookAuthProviderID: facebook.com
// TwitterAuthProviderID: twitter.com
// GitHubAuthProviderID: github.com
// AppleAuthProviderID: apple.com
// YahooAuthProviderID: yahoo.com
// MicrosoftAuthProviderID: hotmail.com