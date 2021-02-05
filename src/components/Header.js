import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { IndexLinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>Lasko</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <IndexLinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/sketches">
                        <Nav.Link>Sketches</Nav.Link>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/contacts">
                        <Nav.Link>Contacts</Nav.Link>
                    </IndexLinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header