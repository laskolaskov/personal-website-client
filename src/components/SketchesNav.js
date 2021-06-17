import Nav from 'react-bootstrap/Nav'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const TestLink = ({ match, children, className }) => (
    <IndexLinkContainer className={className} to={`${match.url}/testis`}>
        <Nav.Link eventKey="testis">{children}</Nav.Link>
    </IndexLinkContainer>
)

const StyledTestLink = styled(TestLink)`
    background-color: var(--success);
`

function SketchesNav(props) {
    const {
        match
    } = props

    return (
        <Nav className="flex-column">
            <IndexLinkContainer to={`${match.url}/fourier`}>
                <Nav.Link eventKey="fourier">Fourier drawing</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer to={`${match.url}/test-sketch`}>
                <Nav.Link eventKey="test-sketch">Test</Nav.Link>
            </IndexLinkContainer>
            <StyledTestLink match={match}>test styled link</StyledTestLink>
        </Nav>
    )
}

export default withRouter(SketchesNav)