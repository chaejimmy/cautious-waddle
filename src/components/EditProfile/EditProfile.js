import {Box} from '@chakra-ui/react';
import Settings from './Settings';
import {ChakraProvider} from '@chakra-ui/react';
import Layout from './Layout';
import {auth, firestore, firebase} from 'services/auth/firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useEffect } from 'react';

export default function EditProfile() {
	const [user, loading, error] = useAuthState(auth)
  
	if(loading) return null
	
	return (
		<>
			<ChakraProvider>
				<Layout>
					<div>
						<Box background='linear-gradient(269.67deg, #657ADC 9.71%, #4B61C2 86.77%)' height='100' />
						<Settings />
					</div>
				</Layout>
			</ChakraProvider>
		</>
	);
}
