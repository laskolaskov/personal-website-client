//import { useTranslation } from 'react-i18next'
import { Row, Col } from 'react-bootstrap'
import SketchDescription from './SketchDescription'
import Sketch from './Sketch'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

const SketchContainer = (props) => {
    //get P5 sketch name from router
    const sketchName = props.location.pathname.split('/')[2] || 'test-sketch'
    //const { t } = useTranslation()
    const [viewCode, setViewCode] = useState(false)
    console.log(viewCode)

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
                    <Button variant="primary" onClick={() => {
                        setViewCode(!viewCode)
                    }}>TEST</Button>
                </Col>
                <Col>
                    <Sketch sketchName={sketchName} viewCode={viewCode} />
                </Col>
            </Row>
            {/* {sketchName === 'fourier' && <h1>Fourier COMP {t('test')}</h1> }
            {sketchName === 'test-sketch' && <h1 id="test-header">TEST SKETCH COMP</h1> } */}

        </>
    )
}

export default SketchContainer