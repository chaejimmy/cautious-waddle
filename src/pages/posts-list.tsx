import Head from 'next/head';
import Header from 'components/header';
import WrapFooter from 'components/WrapFooter';
import styles from 'styles/Home.module.css';
import PostsList from 'components/posts-list';

export default function PostsListPage() {
	return (
		<>
			<Head>
				<title>Login</title>
				<meta name='description' content='Login page | Totel' />
			</Head>

			<Header photoURL={''} />
			{/* Blue bar in included in below PostList component */}
			<PostsList />

			<div className={styles.wrapfooter}>
				<WrapFooter />
			</div>
		</>
	);
}
