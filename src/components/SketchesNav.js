import Nav from 'react-bootstrap/Nav'

function SketchesNav(props) {
    const {
        selected,
        handleSelected
    } = props
    console.log('sketches nav props :: ', props)
    return (
        <Nav activeKey={selected} onSelect={(key) => handleSelected(key)} className="flex-column">
            <Nav.Link eventKey="fourier">Fourier drawing</Nav.Link>
            <Nav.Link eventKey="test-sketch">Test</Nav.Link>
        </Nav>
    )
}

export default SketchesNav