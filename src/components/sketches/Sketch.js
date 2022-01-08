import React, { useRef, useEffect } from 'react'
import p5 from 'p5'
import '../../css/Sketch.css'

const Sketch = (props) => {
    //get ref to the rendered child element (the container)
    const sketchRef = useRef()
    const styleRef = useRef()
    //get P5 sketch name from router
    const sketchName = props.sketchName
    const viewCode = props.viewCode
    //use effects to load and attach the P5 sketch
    useEffect(() => {
        //get the rendered HTML container
        const el = sketchRef.current
        try {
            //load sketch
            const sketch = require(`../../sketches/${sketchName}.js`).default
            //show the sketch or sketch code in the container
            !viewCode ? new p5(sketch, el) : el.innerHTML = `<pre>${sketch.toString()}</pre>`
        } catch (error) {
            console.error(error)
            el.innerHTML = `No sketch named "${sketchName}" exists !`
        }
        //clean up - clear container
        return (() => {
            el.innerHTML = ''
        })
    }, [sketchName, viewCode])
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
        //clean up - clear container
        return (() => {
            el.innerHTML = ''
        })
    }, [sketchName])

    const classes = `${!viewCode ? 'sketch-container' : null} ll-border`

    return (
        <>
            <div ref={sketchRef} className={classes}></div>
            <style ref={styleRef}></style>
        </>
    )
}

export default Sketch