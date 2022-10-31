import {firestore} from './firebase';

export const usersCollection = firestore.collection('users');
export const messagesCollection = firestore.collection('messages');
