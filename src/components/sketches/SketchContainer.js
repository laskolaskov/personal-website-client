//import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'
import SketchDescription from './SketchDescription'
import Sketch from './Sketch'

const SketchContainer = (props) => {
    //get P5 sketch name from router
    const sketchName = props.location.pathname.split('/')[2] || 'test-sketch'
    //const { t } = useTranslation()

    return (
        <>
            {/* <Row>
                <Col>
                    <SketchDescription value="main" />
                </Col>
            </Row> */}
            <Row>
                <Col xs={4}>
                    <SketchDescription value={sketchName} />
                    <SketchDescription value="shit" />
                </Col>
                <Col>
                    <Sketch sketchName={sketchName} />
                </Col>
            </Row>
            {/* {sketchName === 'fourier' && <h1>Fourier COMP {t('test')}</h1> }
            {sketchName === 'test-sketch' && <h1 id="test-header">TEST SKETCH COMP</h1> } */}

        </>
    )
}

export default SketchContainer