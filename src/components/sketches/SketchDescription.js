//import React, { useRef, useEffect } from 'react'
//import '../../css/SketchDescription.css'
//import { useTranslation } from 'react-i18next'
import Card from 'react-bootstrap/Card'

const SketchDescription = (props) => {
    //create description text
    let text
    switch (props.value) {
        case 'main':
            text = 'main'
            break
        case 'fourier':
            text = props.value
            break
        case 'test-sketch':
            text = props.value
            break
        default:
            text = 'No description available !'
    }
    return (
        <Card
            border="primary"
            className="mb-2"
        >
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>{text}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SketchDescription