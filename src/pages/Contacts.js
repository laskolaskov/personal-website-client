import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProfilePic from '../components/ProfilePic'
import SocialLinks from '../components/SocialLinks'

const StyledDiv = styled.div`
	width: 50vw;
	margin: 2em auto;
	background-color: var(--primary);
	border: 5px solid var(--dark);
	border-radius: 2vh;
	transition: 1.5s ease;
	background: linear-gradient(60deg, var(--primary, #f6d365), var(--light, #fda085) 55%, var(--primary, #f6d365)) var(--x, 0)/ 200%;
	overflow: none;
	
	&:hover {
		--x: 100%;
	}
`

function Contacts() {
	return (
		<StyledDiv>
			<Container fluid>
				<Row>
					<Col><SocialLinks /></Col>
					<Col><ProfilePic /></Col>
				</Row>
			</Container>
		</StyledDiv>
	)
}

export default Contacts