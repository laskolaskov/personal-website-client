import SketchesNav from '../components/SketchesNav'
import SketchContainer from '../components/SketchContainer'
import { Container, Row, Col } from 'react-bootstrap'
import { Route } from 'react-router-dom'

function Sketches(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <SketchesNav />
                </Col>
                <Col>
                    <Route path={props.match.url + '/fourier'} component={SketchContainer} />
                    <Route path={props.match.url + '/test-sketch'} component={SketchContainer} />
                </Col>
            </Row>
        </Container>
    )
}

export default Sketches