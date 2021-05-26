import React from 'react'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
//import Fade from 'react-bootstrap/Fade'
//import Button from 'react-bootstrap/Button'
//import Collapse from 'react-bootstrap/Collapse'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const SpacedBtn = styled(Button)`
    margin: 0.2rem;
`
const SpecialBtn = styled(SpacedBtn)`
    background-color: var(--indigo);
    &:hover {
        background-color: var(--yellow);
    }
`

/* const H1 = styled.h1`
  background-color: green;
`
const MyButton = styled.button`
  height: ${props => props.small ? 40 : 60}px;
  width: ${props => props.small ? 60 : 120}px;
`;

const BasicNotification = styled.p`
  background: lightblue;
  padding: 5px;
  margin: 5px;
  color: black;
`;

const SuccessNotification = styled(BasicNotification)`
  background: lightgreen;
`;

const ErrorNotification = styled(BasicNotification)`
  background: lightcoral;
  font-weight: bold;
`; */

//import { useDarkMode } from '../hooks/useDarkMode'

export default function Test() {
    return (
        <>
            <StyledDiv>
                <SpacedBtn variant="primary">Primary</SpacedBtn>
                <SpacedBtn variant="secondary">Secondary</SpacedBtn>
                <SpacedBtn variant="success">Success</SpacedBtn>
                <SpacedBtn variant="danger">Danger</SpacedBtn>
                <SpacedBtn variant="info">Info</SpacedBtn>
                <SpacedBtn variant="warning">Warning</SpacedBtn>
                <SpacedBtn variant="light">Light</SpacedBtn>
                <SpacedBtn variant="dark">Dark</SpacedBtn>
                <SpacedBtn variant="link">Link</SpacedBtn>
                <SpecialBtn variant="primary">Link</SpecialBtn>
            </StyledDiv>
            <StyledDiv>
                <SpacedBtn variant="outline-primary">Primary</SpacedBtn>
                <SpacedBtn variant="outline-secondary">Secondary</SpacedBtn>
                <SpacedBtn variant="outline-success">Success</SpacedBtn>
                <SpacedBtn variant="outline-danger">Danger</SpacedBtn>
                <SpacedBtn variant="outline-info">Info</SpacedBtn>
                <SpacedBtn variant="outline-warning">Warning</SpacedBtn>
                <SpacedBtn variant="outline-light">Light</SpacedBtn>
                <SpacedBtn variant="outline-dark">Dark</SpacedBtn>
                <SpacedBtn variant="outline-link">Link</SpacedBtn>
            </StyledDiv>

            {/* <div>
				<H1 className="text-danger">Contacts</H1>
				<MyButton className="btn btn-primary" small onClick={() => toggleTheme()}>Click Me</MyButton>
				<MyButton className="btn btn-success" large>Click Me</MyButton>
				<BasicNotification>Basic Message</BasicNotification>
				<SuccessNotification>Success Message</SuccessNotification>
				<ErrorNotification>Error Message</ErrorNotification>
			</div>
			<Button onClick={() => setOpen(!open)} aria-controls="example-fade-text" aria-expanded={open}>Toggle text</Button>
			<Fade in={open} timeout={5000}>
				<div id="example-fade-text">
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
					terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
					labore wes anderson cred nesciunt sapiente ea proident.
        		</div>
			</Fade>
			<Button
				onClick={() => setOpen2(!open2)}
				aria-controls="example-collapse-text"
				aria-expanded={open2}
			>
				click
			</Button>
			<Collapse in={open2}>
				<div id="example-collapse-text">

					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
					terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
					labore wes anderson cred nesciunt sapiente ea proident.
				</div>
			</Collapse> */}
			{/* <Button variant="success" onClick={() => toggleTheme()}>Switch to {`${isDark ? 'Light' : 'Dark'}`} Mode</Button> */}
			{/* <Button varian="primary" onClick={(e) => console.log(e)}>Click Me</Button> */}
        </>
    )
}