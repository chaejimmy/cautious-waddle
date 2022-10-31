import React, {useState} from 'react';
import {IconButton, Theme} from '@mui/material';
import AppTooltip from '../tooltip';
import Image from 'next/image';
import ChatPopOver from './ChatPopOver';
import ChatModal from './ChatModal';
import {useRouter} from 'next/router';

/** Utilities */
const ChatIcon = (props) => {
	return <Image src='/assets/icons/icon-chat.svg' alt='Chat Icon' width={120} height={120} />;
};

/** Components */
function ChatIconParent({tooltipPosition}) {
	const router = useRouter();

	return (
		<AppTooltip title='Chat' placement={tooltipPosition}>
			<IconButton
				className='icon-btn'
				sx={{
					borderRadius: '50%',
					width: 40,
					height: 40,
					color: (theme) => theme.palette.text.secondary,
					backgroundColor: (theme) => theme.palette.background.default,
					border: 1,
					borderColor: 'transparent',
				}}
				onClick={() => router.push('/chat')}
				size='large'
			>
				<ChatIcon />
			</IconButton>
		</AppTooltip>
	);
}

/** Default Export */
export default function AppMessages({drawerPosition = 'right', tooltipPosition = 'bottom', isMenu = false, sxMessageContentStyle = {}}) {
	return (
		<>
			<ChatIconParent tooltipPosition={tooltipPosition} />
			{/* <span className='text-red-700'>i am red text</span> */}
			{/* <span className='text-3xl font-bold underline'>Hello world!</span> */}
			{/* <ChatPopOver /> */}
			{/* <ChatModal /> */}
		</>
	);
}
