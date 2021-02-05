import { useState } from 'react'
import SketchesNav from '../components/SketchesNav'
import SketchContainer from '../components/SketchContainer'

function Sketches() {
    const [selected, handleSelected] = useState('test-sketch')

    return (
        <>
            <SketchesNav selected={selected} handleSelected={handleSelected} />
            <SketchContainer sketchName={selected} />
        </>
    )
}

export default Sketches