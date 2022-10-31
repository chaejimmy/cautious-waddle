import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import AppLngSwitcher from "components/lang-switcher";
import Box from "@mui/material/Box";
// import AppSearchBar from "components/search-bar";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import { toggleNavCollapsed } from "redux/actions";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import Chat from "components/chat";
import AppNotifications from "components/notifications/app-notifications";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AppTooltip from "components/tooltip";
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { alpha } from "@mui/material/styles";
import AppLogo from "components/logo";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import {useRouter} from 'next/router';
import {auth as authFirestore, firestore, firebase} from 'services/auth/firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useUserData } from "contexts/UserData";

// const AppHeader = ({photoURL = 'user.png'}) => {
const AppHeader = ({photoURL = ''}) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [notificationAnchorEl, setNotificationAnchorEl] = React.useState<null | HTMLElement>(null);
	const [auth, setAuth] = React.useState(false);
	const router = useRouter();
	const [userData, setUserData] = useUserData()
	const [currentUser, loading, error] = useAuthState(authFirestore as any)
	console.log('useAuthState?', {currentUser, loading, error});
	

	const handleSignOut = async () => {
		await authFirestore.signOut()
		setUserData({})
		router.push('/')
	}
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAuth(event.target.checked);
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		// alert('yo?');
		setAnchorEl(event.currentTarget);
	};

	const handleLogin = () => {
		router.push('/login');
	};

	const handleSignup = () => {
		router.push('/signup');
	};

	const dispatch = useDispatch();

	return (
		<>
			<AppBar
				color='inherit'
				sx={{
					boxShadow: 'none',
					backgroundColor: 'background.paper',
					transition: 'width 0.5s ease',
					width: '100%',
				}}
				className='app-bar'
			>
				<Toolbar
					sx={{
						boxSizing: 'border-box',
						minHeight: {xs: 56, sm: 70},
						paddingLeft: {xs: 5},
						paddingRight: {xs: 5, md: 7.5, xl: 12.5},
					}}
				>
					<Hidden lgUp>
						<IconButton
							sx={{
								color: 'text.secondary',
							}}
							edge='start'
							className='menu-btn'
							color='inherit'
							aria-label='open drawer'
							onClick={() => dispatch(toggleNavCollapsed())}
							size='large'
						>
							<MenuIcon
								sx={{
									width: 35,
									height: 35,
								}}
							/>
						</IconButton>
					</Hidden>
					<Box
						sx={{
							'& .logo-text': {
								display: {xs: 'none', sm: 'block'},
							},
						}}
					>
						<AppLogo />
					</Box>
					<Box
						sx={{
							flexGrow: 1,
						}}
					/>
					{/* <Box
          sx={{
            minHeight: 40,
            position: "relative",
            "& .searchRoot": {
              position: { xs: "absolute", sm: "relative" },
              right: { xs: 0, sm: "auto" },
              top: { xs: 0, sm: "auto" },
            },
          }}
        >
          <AppSearchBar iconPosition="right" placeholder="Search…" />
        </Box> */}

					<Box sx={{ml: 4}}>
						<Hidden smDown>
							<Box
								sx={{
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									marginLeft: -2,
									marginRight: -2,
								}}
							>
								<Box
									sx={{
										px: 2,
									}}
								>
									<Chat />
								</Box>
								<Box
									sx={{
										px: 2,
									}}
								>
									<AppNotifications />
								</Box>
							</Box>
						</Hidden>

						<Hidden smUp>
							<Box
								sx={{
									position: 'relative',
									display: 'flex',
									alignItems: 'center',
									marginLeft: -2,
									marginRight: -2,
								}}
							>
								<Box
									sx={{
										px: 1.85,
									}}
								>
									<AppTooltip title='More'>
										<IconButton
											sx={{
												borderRadius: '50%',
												width: 40,
												height: 40,
												color: (theme) => theme.palette.text.secondary,
												backgroundColor: (theme) => theme.palette.background.default,
												border: 1,
											}}
											onClick={handleClick}
											size='large'
										>
											<MoreVertIcon />
										</IconButton>
									</AppTooltip>
								</Box>
							</Box>
						</Hidden>

						<Menu id='simple-menu' anchorEl={notificationAnchorEl} keepMounted open={Boolean(notificationAnchorEl)} onClose={handleClose}>
							<MenuItem>
								<AppNotifications isMenu />
							</MenuItem>
							<MenuItem>
								<Chat isMenu />
							</MenuItem>
							<MenuItem>Setting</MenuItem>
						</Menu>
					</Box>

					{!auth && (
						<Box
							sx={{
								// pl: 5, // remove padding
							}}
						>
							<IconButton style={{height: 58, width: 58}} size='large' aria-label='account of current user' aria-controls='menu-appbar' aria-haspopup='true' onClick={handleMenu} color='inherit'>
								{!loading && <Avatar src={currentUser?.photoURL || ''} alt='avatar' /> }
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorEl}
								PaperProps={{
									elevation: 0,
									sx: {
										borderRadius: '16px',
										overflow: 'visible',
										width: '202px',
										filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
										mt: 13,
										ml: 6,
										'& .MuiAvatar-root': {
											width: 32,
											height: 32,
											ml: -0.5,
											mr: 1,
										},
										'&:before': {
											content: '""',
											display: 'block',
											position: 'absolute',
											top: 0,
											right: 47,
											width: 10,
											height: 10,
											bgcolor: 'background.paper',
											transform: 'translateY(-50%) rotate(45deg)',
											zIndex: 0,
										},
										'.MuiMenuItem-root a': {
											color: '#696888',
										},
										'.MuiMenuItem-root span': {
											color: '#696888',
										},
									},
								}}
								keepMounted
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>



								{(!loading && !currentUser && !userData?.access_token) ?
									<>
										<MenuItem
											sx={{
												color: '#696888',
											}}
											onClick={handleSignup}
										>
										Signup {/** SIGNUP BUTTON */}
										</MenuItem>
										<MenuItem
											sx={{
												color: '#696888',
											}}
											onClick={handleLogin}
											>
											Login {/** LOGIN/SIGNIN BUTTON */}
										</MenuItem>
									</> :
									<>
										<MenuItem
											sx={{
												color: '#696888',
											}}
											onClick={() => router.push('/profile')}
											>
											Profile {/** Profile BUTTON */}
										</MenuItem>
										<MenuItem
											sx={{
												color: '#696888',
											}}
											onClick={() => router.push('/chat')}
											>
											Chat {/** chat BUTTON */}
										</MenuItem>
										<MenuItem
											sx={{
												color: '#696888',
											}}
											onClick={() => router.push('/posts-list')}
											>
											Posts List {/** posts-list BUTTON */}
										</MenuItem>
										<MenuItem
											sx={{
												color: '#696888',
											}}
											onClick={() => router.push('/edit-profile')}
											>
											Edit Profile {/** posts-list BUTTON */}
										</MenuItem>
										<MenuItem
											sx={{
												color: '#696888',
											}}
											onClick={handleSignOut}
											>
											Signout {/** Signout BUTTON */}
										</MenuItem>
		
									</>
								}
					
								<Divider variant='middle' />
								<MenuItem>
									<Link href='/how-it-work'>How it Work</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/help'>Help</Link>
								</MenuItem>
								<MenuItem>
									<Link href='/about-totel'>About Totel</Link>
								</MenuItem>
							</Menu>
						</Box>
					)}
				</Toolbar>
			</AppBar>
			<div className='header__height'></div>
		</>
	);
};
export default AppHeader;
