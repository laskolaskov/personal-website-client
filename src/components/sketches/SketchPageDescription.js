import { useTranslation, Trans } from 'react-i18next'
import Card from 'react-bootstrap/Card'
import P5link from '../links/P5link'
import DanShiffmanYTlink from '../links/DanShiffmanYTlink'
import P5editorLink from '../links/P5editorLink'

const SketchPageDescription = () => {
    const { t } = useTranslation()

    const urls = {
        p5Url: <P5link className="text-warning" />,
        danUrl: <DanShiffmanYTlink className="text-warning" />,
        editorUrl: <P5editorLink className="text-warning" />
    }

    return (
        <Card
            border="primary"
            bg="info"
            className="mb-2"
        >
            <Card.Header>
                Header
            </Card.Header>
            <Card.Body>
                <Card.Title>page description test</Card.Title>
                <Card.Text>
                    <Trans
                        i18nKey="p5Description"
                        t={t}
                        components={urls}
                    />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default SketchPageDescription