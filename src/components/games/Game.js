import React, { useRef, useEffect } from 'react'
//import '../../css/Game.css'
//import kaboomTest from '../../games/test'

const Game = (props) => {
    //get ref to the rendered child element (the container)
    const sketchRef = useRef()
    const gameName = props.game ?? 'kaboomTest'
    //use effects to load and attach the Kaboom game
    useEffect(() => {
        //get the rendered HTML container
        const el = sketchRef.current
        //clear container
        el.innerHTML = ''
        try {
            //load sketch
            const sketch = require(`../../games/${gameName}.js`).default
            //create the sketch in this container
            sketch(el)
        } catch (error) {
            console.error(error)
            el.innerHTML = `No game named "${gameName}" exists !`
        }
        //clean up - clear container
        return (() => {
            el.innerHTML = ''
        })
    })
    return (
        <>
            <div ref={sketchRef} className="ll-border"></div>
        </>
    )
}

export default Game