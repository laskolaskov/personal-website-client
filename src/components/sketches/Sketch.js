import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import '../../css/Sketch.css'

const Sketch = (props) => {
    //get ref to the rendered child element (the container)
    const sketchRef = useRef()
    const styleRef = useRef()
    //get P5 sketch name from router
    const sketchName = props.sketchName
    //use effects to load and attach the P5 sketch
    useEffect(() => {
        //get the rendered HTML container
        const el = sketchRef.current
        //clear container
        el.innerHTML = ''
        try {
            //load sketch
            const sketch = require(`../../sketches/${sketchName}.js`).default
            //create the sketch in this container
            new p5(sketch, el)
        } catch (error) {
            console.error(error)
            el.innerHTML = `No sketch named "${sketchName}" exists !`
        }
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
            <div ref={sketchRef} className="sketch-container ll-border"></div>
            <style ref={styleRef}></style>
        </>
    )
}

export default Sketch