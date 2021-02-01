import React, { useRef, useEffect }  from 'react'
import p5 from 'p5'

const SketchContainer = React.memo((props) => {
    //get ref to the rendered child element (the container)
    const myRef = useRef()
    //get P5 sketch from 'sketch' prop
    const sketch = props.sketch
    //use effects to attach the P5 sketch
    useEffect(() => {
        //get the rendered HTML container
        const el = myRef.current
        //create the sketch in this container
        new p5(sketch, el)
        //clean up - clear the container (optional)
        return (() => {
            el.innerHtml = ''
        })
    })
    return (
        <div ref={myRef} className="sketch-container"></div>
    )
})

export default SketchContainer