import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import '../css/SketchContainer.css'

const SketchContainer = (props) => {
    //get ref to the rendered child element (the container)
    const sketchRef = useRef()
    const styleRef = useRef()
    //get P5 sketch from 'sketch' prop
    const sketchName = props.sketchName
    //use effects to attach the P5 sketch
    useEffect(() => {
        //get the rendered HTML container
        const el = sketchRef.current
        //clear container
        el.innerHTML = ''
        //load sketch
        const sketch = require(`../sketches/${sketchName}.js`).default
        //create the sketch in this container
        new p5(sketch, el)
        //clean up - clear container (optional)
        return (() => {
            el.innerHTML = ''
        })
    })
    //use effect to load styles from public css file
    useEffect(() => {
        //get the rendered HTML style element
        const el = styleRef.current
        //fetch and load the css
        async function fetchCSS() {
            try {
                //load CSS from file in the public folder
                const base = window.location.href.split('#')[0]
                const resp = await fetch(`${base}css/sketches/${sketchName}.css`)
                const css = await resp.text()
                //set CSS
                el.innerHTML = css
            } catch (error) {
                console.error(error)
            }
        }
        fetchCSS()
        //clean up - clear container (optional)
        return (() => {
            el.innerHTML = ''
        })
    })

    return (
        <>
            <div ref={sketchRef} className="sketch-container"></div>
            <style ref={styleRef}></style>
        </>
    )
}

export default SketchContainer