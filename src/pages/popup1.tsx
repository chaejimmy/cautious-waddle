import {useState} from 'react'
export default function Test() {
	const [isOpen, setIsOpen] = useState(false)
	const togglePopup = () => setIsOpen(!isOpen)
	return (
		<div>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum doloribus, saepe distinctio modi explicabo magni veritatis dignissimos itaque ex at aperiam facere reprehenderit obcaecati aut soluta earum laudantium ullam! Voluptatem doloremque quia animi tempora dolor cum quisquam quod. Quibusdam soluta fugit, delectus laudantium eveniet tenetur a reprehenderit rerum ex dolorem reiciendis ad ipsam aperiam neque accusantium omnis labore nulla cumque totam dolor minus ipsa sequi nisi necessitatibus. Eaque provident perspiciatis debitis rem hic quo unde ut beatae officiis? Cumque impedit velit doloremque cum necessitatibus, ipsam at sunt ipsa et quidem! Quam quibusdam error facere autem est blanditiis, laudantium delectus accusantium aliquam rem quos accusamus, quo fugiat? Reprehenderit quisquam illum ratione? Ea exercitationem perspiciatis debitis doloribus similique a illo tempore officiis soluta, et totam laborum excepturi ipsam nostrum ducimus quibusdam esse tenetur dolorum
			temporibus architecto ex animi aliquid eos. Eius, reprehenderit! Reprehenderit dolorem dolore repellat similique quisquam quia natus exercitationem, eaque iure consectetur incidunt enim cupiditate beatae sit! Voluptatem vel ipsam error harum. Expedita quod molestias, sapiente delectus saepe reprehenderit dicta quaerat iusto accusantium laboriosam sit quisquam animi impedit natus recusandae aut assumenda vel adipisci illo eum deserunt labore. Fuga quia fugiat nulla voluptas rerum unde dolorem, repellendus voluptatum velit facere omnis consequatur cum saepe debitis reiciendis ex adipisci cupiditate recusandae blanditiis ipsa. Optio, atque sunt recusandae, libero pariatur dolores repellat et laboriosam vel aliquam excepturi. Fuga sint modi commodi ipsum aut. Dolorum, debitis delectus consectetur, tempore ad necessitatibus iure hic aut tempora, voluptatum fugiat ratione rem deserunt. Velit ipsam unde quod expedita, non vel voluptate voluptatem sint quas libero laudantium maiores eum
			impedit facilis? Mollitia dolores a eum, fuga corrupti minus quae numquam qui provident animi vero sapiente veritatis placeat! Quidem magni voluptatibus reiciendis fugiat? Blanditiis nulla odit neque animi eligendi ipsum fugit illo quam nisi dolores, debitis impedit iure?
			{/* <Login /> */}
			<button className='btn' onClick={togglePopup}>
				{isOpen ? 'Close Popup' : 'Open Popup'}
			</button>
			<Popper isOpen={isOpen} >
				<Popup1 controls={[isOpen, setIsOpen]} />
			</Popper>
		</div>
	)
}
export const Popup1 = ({controls}) => {
	const [isOpen, setIsOpen] = controls
	const closePopup = () => setIsOpen(false)
	return (
		<>
			<div className='heading'>Los Angles</div>
			<div>This is popup</div>
			<div>This is popup</div>
			<div>This is popup</div>
			<div>This is popup</div>
			<br />
			<button className='btn' onClick={closePopup}>
				Close popup
			</button>
		</>
	)
}
export const Popper = ({children, isOpen}) => {
	return (
		<div className='popper__default'>
			<div className={`popup__container ${isOpen ? 'show' : ''}`}>
				<div className={`popup__contents `}>{children}</div>
			</div>
		</div>
	)
}