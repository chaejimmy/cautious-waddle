import {ca} from 'date-fns/locale'
import {useRouter} from 'next/router'
import {useState} from 'react'
import styled from 'styled-components'

import Header from '../../components/PaymentModule/Header'

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 3rem;
	color: #333;
`

const StyledH1 = styled.h1`
	font-size: 1rem;
	font-weight: normal;
	margin-bottom: 0.5rem;
`

const StyledP = styled.p`
	font-size: 1.25rem;
	font-weight: 600;
`

const StyledButton = styled.button`
	background-color: #4d65d6;
	color: #fff;
	border-radius: 1rem;
	padding: 1.25rem 2.5rem;
	width: 100%;
	font-size: 1rem;
`

const initialCard = {
	number: '',
	expiry: '',
	cvv: '',
	name: '',
	secure: false,
}

const sampleDetails = {
	number: '4012 8888 8888 1881',
	expiry: '02/25',
	cvv: '842',
	name: 'Albert Flores',
	secure: true,
}

const AddCard = () => {
	const router = useRouter()
	const [card, setCard] = useState(initialCard)

	const handleFillDemoCard = () => setCard(sampleDetails)

	return (
		<div className='root__container__add__card'>
			<Header pageTitle='Add your Card' />

			<div className='container__add__card'>
				<div className='column__left'>
					<StyledDiv>
						<StyledH1 onClick={handleFillDemoCard}>Total Payment</StyledH1>
						<StyledP>$1050</StyledP>
					</StyledDiv>
				</div>

				<div className='column__right'>
					<div>
						<div style={{display: 'flex', flexDirection: 'column', marginBottom: '2rem'}}>
							<h1
								style={{
									fontSize: '0.9rem',
									fontWeight: '100',
									color: '#999',
									marginBottom: '0.5rem',
								}}
							>
								Card
							</h1>
							<input
								type='text'
								placeholder='Enter your card number'
								value={card.number}
								style={{
									backgroundColor: '#EEEEEE',
									borderRadius: '5px',
									border: '0px',
									padding: '1rem',
									color: 'black',
								}}
							/>
						</div>

						<div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1rem'}}>
							<div style={{display: 'flex', flexDirection: 'column', marginBottom: '1rem'}}>
								<h1
									style={{
										fontSize: '0.9rem',
										fontWeight: '100',
										color: '#999',
										marginBottom: '0.5rem',
									}}
								>
									Expiry Date
								</h1>
								<input
									type='text'
									placeholder='MM / YY'
									value={card.expiry}
									style={{
										backgroundColor: '#EEEEEE',
										borderRadius: '5px',
										border: '0px',
										padding: '1rem',
										color: 'black',
									}}
								/>
							</div>
							<div style={{display: 'flex', flexDirection: 'column', marginBottom: '1rem', marginLeft: 50}}>
								<h1
									style={{
										fontSize: '0.9rem',
										fontWeight: '100',
										color: '#999',
										marginBottom: '0.5rem',
									}}
								>
									CVV
								</h1>
								<input
									type='text'
									placeholder='Enter CVV'
									value={card.cvv}
									style={{
										backgroundColor: '#EEEEEE',
										borderRadius: '5px',
										border: '0px',
										padding: '1rem',
										color: 'black',
									}}
								/>
							</div>
						</div>

						<div style={{display: 'flex', flexDirection: 'column', marginBottom: '2rem'}}>
							<h1
								style={{
									fontSize: '0.9rem',
									fontWeight: '100',
									color: '#999',
									marginBottom: '0.5rem',
								}}
							>
								Name on card
							</h1>
							<input
								type='text'
								placeholder='Enter name as on card'
								value={card.name}
								style={{
									backgroundColor: '#EEEEEE',
									borderRadius: '5px',
									border: '0px',
									padding: '1rem',
									color: 'black',
								}}
							/>
						</div>

						<div style={{display: 'flex', marginBottom: '2rem'}}>
							<input
								type='checkbox'
								checked={card.secure}
								style={{
									backgroundColor: '#EEEEEE',
									borderRadius: '5px',
									border: '0px',
									padding: '1rem',
									marginRight: '1rem',
									color: '#999',
								}}
							/>
							<h1 style={{fontSize: '0.9rem', fontWeight: '100', color: '#999'}}>Secure this option for faster checkout</h1>
						</div>

						<StyledButton onClick={() => router.push('/')}>
							<p>Proceed</p>
						</StyledButton>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AddCard
