import styled from 'styled-components'
import fb from './svg/facebook.png'
import ln from './svg/linkedin.png'
import gh from './svg/github.png'

const links = [
    {
        url: 'https://www.linkedin.com/in/lasko-laskov-6668b254/',
        img: ln,
        alt: 'linkedin'
    },
    {
        url: 'https://github.com/laskolaskov',
        img: gh,
        alt: 'github'
    },
    {
        url: 'https://www.facebook.com/lasko.laskov.1',
        img: fb,
        alt: 'facebook'
    }
]

const Box = styled.div`
	width: 20vw;
	height: 60vh;
	margin: 5vh auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
const StyledImg = styled.img`
    width: 6vw;
    height: 6vw;
    border-radius: 3vw;

    &:hover {
        box-shadow: 0vh 0vh 3vh var(--light);
    }
`

const SocialLink = (props) => {
    return (
        <a href={props.url} rel="noreferrer" target="_blank"><StyledImg src={props.img} alt={props.alt}/></a>
    )
}

export default function SocialLinks () {
    return (
        <Box>
            {links.map(config => <SocialLink {...config} />)}
        </Box>
    )
}