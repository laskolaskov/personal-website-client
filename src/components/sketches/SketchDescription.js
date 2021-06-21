//import React, { useRef, useEffect } from 'react'
//import '../../css/SketchDescription.css'
import { useTranslation, Trans } from 'react-i18next'
import Card from 'react-bootstrap/Card'
import P5link from '../links/P5link'
import DanShiffmanYTlink from '../links/DanShiffmanYTlink'
import P5editorLink from '../links/P5editorLink'

const SketchDescription = (props) => {
    const { t } = useTranslation()
    //generate content
    let title, description
    switch (props.value) {
        case 'main':
            title = 'main'
            //urls
            const urls = {
                p5Url: <P5link />,
                danUrl: <DanShiffmanYTlink />,
                editorUrl: <P5editorLink />
            }
            description = <Trans
                i18nKey="p5Description"
                t={t}
                components={urls}
            />
            break
        case 'fourier':
            title = props.value
            description = 'Fourier sketch description will be here !'
            break
        case 'test-sketch':
            title = props.value
            break
        default:
            title = 'No title available !'
            description = 'No description available !'
    }
    return (
        <Card
            border="primary"
            className="mb-2"
        >
            <Card.Header>
                Header
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SketchDescription