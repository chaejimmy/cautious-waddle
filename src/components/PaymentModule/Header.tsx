import styled from 'styled-components'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from "next/router"

const StyledDiv = styled.div`
	display: flex;
	padding: 1.5rem 1rem;
	border-bottom: 1px solid #e0e0e0;
	align-items: center;
`

const StyledH1 = styled.h1`
	font-size: 1.2rem;
	padding-left: 1rem;
	color: #444;
	font-size: 1.5rem;
	color: black;
`

const Header = ({ pageTitle }: { pageTitle: string }) => {
  const router = useRouter()

  return (
    <StyledDiv>
      <div className='arrow__back' onClick={() => router.back()}>
        <ArrowBackIcon className='arrow__back' />
      </div>
      <StyledH1>{pageTitle}</StyledH1>
    </StyledDiv>
  )
}
export default Header
