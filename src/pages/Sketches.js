import SketchesNav from '../components/sketches/SketchesNav'
import SketchContainer from '../components/sketches/SketchContainer'
import { Container, Row, Col } from 'react-bootstrap'
import { Route } from 'react-router-dom'
import SketchPageDescription from '../components/sketches/SketchPageDescription'

function Sketches(props) {
    return (
        <Container className="mt-2" fluid>
            <Row>
                <Col>
                    <SketchPageDescription />
                </Col>
            </Row>
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
        </Container>
    )
}

export default Sketches