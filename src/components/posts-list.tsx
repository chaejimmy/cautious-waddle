import desiredPostsList from 'assets/desired-posts-list.png';
import img1 from 'assets/postslist_img1.png';
import img2 from 'assets/postslist_img2.png';
import img3 from 'assets/postslist_img3.png';
import img4 from 'assets/postslist_img4.png';
import Image from 'next/image';
import {useState} from 'react';

// const dummyData = [
// 	{
// 		postDate: 'March 24, 2020',
// 		image: img1,
// 		title: 'A',
// 		gender: 'Male',
// 		date: '4 Jun - 6 Jun',
// 		price: '$100',
// 	},
// 	{
// 		postDate: 'March 24, 2020',
// 		image: img2,
// 		title: 'Ab ka daam kab milega milega milega milega',
// 		gender: 'Female',
// 		date: '4 Jun - 6 Jun',
// 		price: '$100',
// 	},
// 	{
// 		postDate: 'March 24, 2020',
// 		image: img3,
// 		title: 'Abc',
// 		gender: 'Male',
// 		date: '4 Jun - 6 Jun',
// 		price: '$100',
// 	},
// 	{
// 		postDate: 'March 24, 2020',
// 		image: img4,
// 		title: 'Abcd',
// 		gender: 'Male/Female',
// 		date: '4 Jun - 6 Jun',
// 		price: '$100',
// 	},
// ];

const dummyData = [
	{
		postDate: 'March 24, 2020',
		image: img1,
		title: 'Saraswati ( pure vegetarian ) - a complete family hotel',
		gender: 'Male',
		date: '4 Jun - 6 Jun',
		price: '$100',
	},
	{
		postDate: 'March 24, 2020',
		image: img2,
		title: 'Saraswati ( pure vegetarian ) - a complete family hotel',
		gender: 'Female',
		date: '4 Jun - 6 Jun',
		price: '$100',
	},
	{
		postDate: 'March 24, 2020',
		image: img3,
		title: 'Saraswati ( pure vegetarian ) - a complete family hotel',
		gender: 'Male',
		date: '4 Jun - 6 Jun',
		price: '$100',
	},
	{
		postDate: 'March 24, 2020',
		image: img4,
		title: 'Saraswati ( pure vegetarian ) - a complete family hotel',
		gender: 'Male/Female',
		date: '4 Jun - 6 Jun',
		price: '$100',
	},
];

const tabs = ['live', 'expired'];

export default function PostsList() {
	const [tab, setTab] = useState('live');

	const handleTab = (name) => () => {
		setTab(name);
	};

	return (
		<>
			<div className='blueTopBar blueTopBar__tabs'>
				<div className='container__tabs'>
					<span onClick={handleTab('live')} className={`${tab === 'live' ? 'active' : ''}`}>
						Live
					</span>
					<span onClick={handleTab('expired')} className={`${tab === 'expired' ? 'active' : ''}`}>
						Expired
					</span>
				</div>
			</div>

			<div className='root__container__postslist'>
				<div className='container__postslist'>
					{tab === 'live' &&
						dummyData.map((post) => {
							let genderColor;
							if (post.gender.toLowerCase() === 'male') {
								genderColor = 'blue';
							} else if (post.gender.toLowerCase() === 'female') {
								genderColor = 'pink';
							} else {
								genderColor = 'gradient';
							}

							return (
								<div className='post'>
									<div className='hotel__image'>
										<Image src={post.image} alt='hotel image' />
									</div>

									<div className='right__column'>
										<div className='post__date'>{post.postDate}</div>
										<div className='title'>{post.title}</div>
										<div className='gender__and__date'>
											<span className={`gender ${genderColor}`}>{post.gender}</span>
											<span className='date'>{post.date}</span>
										</div>
										<div className='price'>
											{post.price}
											<span> / Day</span>
										</div>
									</div>
								</div>
							);
						})}

					{tab === 'expired' && <div className='expected__places__coming__soon'>Expired places coming soon..</div>}
				</div>

				{/* <div className='desired__login__signup'>
				<Image src={desiredPostsList} alt='desired posts list image' />
			</div> */}
			</div>
		</>
	);
}
