import EditProfile from 'components/EditProfile';
import Header from 'components/header';
import WrapFooter from 'components/WrapFooter'
import styles from 'styles/Home.module.css'

export default function EditProfilePage() {
	return (
		<>
			<Header photoURL={''} />

			<EditProfile />

			<div className={styles.wrapfooter}>
				<WrapFooter />
			</div>
		</>
	);
}
