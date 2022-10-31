import {Box} from '@chakra-ui/react';

export default function Layout({children}) {
	return (
		<>
			<Box maxwidth='1512px' m='auto'>
				{/* <header maxwidth='1200px' m='auto'>
					<Navbar />
				</header> */}
				<main>{children}</main>
			</Box>
		</>
	);
}
