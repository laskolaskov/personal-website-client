import SketchesNav from '../components/sketches/SketchesNav'
import SketchContainer from '../components/sketches/SketchContainer'
import { Container, Row, Col } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
    margin-top: var(--ll-spacing);
`

function Sketches(props) {
    return (
        <StyledContainer fluid>
            <Row>
                <Col xs={2}>
                    <SketchesNav />
                </Col>
                <Col>
                    {/* <Route path={props.match.url + '/fourier'} component={SketchContainer} />
                    <Route path={props.match.url + '/test-sketch'} component={SketchContainer} /> */}
                    {/* <Route component={SketchContainer} /> */}
                    <Route component={SketchContainer} />
                </Col>
            </Row>
        </StyledContainer>
    )
}

export default Sketches