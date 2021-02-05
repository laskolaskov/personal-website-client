import React, { useRef, useEffect }  from 'react'
import p5 from 'p5'
import '../css/SketchContainer.css'

const SketchContainer = React.memo((props) => {
    //get ref to the rendered child element (the container)
    const myRef = useRef()
    //get P5 sketch from 'sketch' prop
    const sketch = props.sketch
    //use effects to attach the P5 sketch
    useEffect(() => {
        //get the rendered HTML container
        const el = myRef.current
        //clear container
        el.innerHTML = ''
        //create the sketch in this container
        new p5(sketch, el)
        //clean up - clear container (optional)
        return (() => {
            el.innerHTML = ''
        })
    })
    return (
        <div ref={myRef} className="sketch-container"></div>
    )
})

export default SketchContainer