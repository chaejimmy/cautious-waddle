import React from 'react';
import {Box} from '@mui/material';
import {useThemeContext} from 'utils/app-context-provider/ThemeContextProvider';
import {alpha} from '@mui/material/styles';
import Image from 'next/image'
// @ts-ignore
import Logo from '../../assets/icon/logo.svg';
import {useRouter} from 'next/router';

interface AppLogoProps {
  color?: string;
}

const MyImage = (props) => {
  return (
    <Image
      src="/assets/images/logo.png"
      alt="Picture of the author"
      width={90}
      height={32}
    />
  )
}

const AppLogo: React.FC<AppLogoProps> = () => {
  const {theme} = useThemeContext();
  const router = useRouter();

	const navigateToHome = () => {
		router.push('/');
	};

  return (
		<Box
			onClick={navigateToHome}
			sx={{
				height: {xs: 56, sm: 70},
				px: 10,
				py: 4,
				display: 'flex',
				flexDirection: 'row',
				cursor: 'pointer',
				alignItems: 'center',
				justifyContent: 'center',
				'& svg': {
					height: {xs: 40, sm: 45},
				},
			}}
			className='app-logo'
		>
			<MyImage />
		</Box>
	);
};

export default AppLogo;
