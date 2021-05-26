import styled from 'styled-components'
import picSource from './svg/profile-pic.jpg'


const Me = styled.img`
	max-width: 20vw;
	max-height: 60vh;
	display: block;
	margin: auto;
	border: solid 0.1vh var(--light);
	border-radius: 1vh;
	box-shadow: 0vh 0vh 3vh var(--light);
`

const Box = styled.div`
	width: 20vw;
	height: 60vh;
	margin: 5vh auto;
    display: flex;
    justify-content: center;
`

export default function ProfilePic () {
    return (
        <Box><Me src={picSource} alt="me" /></Box>
    )
}