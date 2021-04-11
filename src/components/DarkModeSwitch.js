import React from 'react'
import { ReactComponent as SunIcon } from './svg/sun.svg'
import { ReactComponent as MoonIcon } from './svg/moon.svg'

import styled from 'styled-components'

const defaultScale = 300
const commonMixin = (flexDir, justCont, alignItems, w, h, bgColor) => {
    return `
        display: flex;
        flex-direction: ${flexDir};
        justify-content: ${justCont};
        align-items: ${alignItems};
        width: ${w}px;
        height: ${h}px;
        background-color: ${bgColor};
        transition: all 0.5s ease;
    `
}

const DMSInput = styled.input`
    display: none;
`

const DMSBox = styled.div`
    ${props => commonMixin('column', 'center', null, props.scale ? props.scale : defaultScale, props.scale ? Math.round(props.scale * 0.5) : Math.round(defaultScale * 0.5), 'var(--light)')}
    position: relative;
    border-radius: ${props => props.scale ? Math.round(props.scale * 0.25) : Math.round(defaultScale * 0.25)}px;
    cursor: pointer;

    ${DMSInput}:checked + label > & {
        background-color: var(--dark);
    }
`

const DMSBall = styled.div`
    ${props => commonMixin(null, null, null, props.scale ? Math.round(props.scale * 0.5) : Math.round(defaultScale * 0.5), props.scale ? Math.round(props.scale * 0.5) : Math.round(defaultScale * 0.5), 'grey')}
    position: absolute;
    border-radius: 50%;
    border: 3px solid black;

    ${DMSInput}:checked + label > ${DMSBox} & {
        transform: translateX(100%);
    }
`

const DMSScenery = styled.div`
    ${commonMixin('row', 'space-between', null, null, null, null)}
    display: flex;
    padding: 0px ${props => props.scale ? Math.round(props.scale * 0.1) : Math.round(defaultScale * 1)}px;
    svg {
        width: ${props => props.scale ? Math.round(props.scale * 0.333) : Math.round(defaultScale * 0.333)}px;
    }
`

export default function DarkModeSwitch(props) {
    return (
        <div>
            <DMSInput
                type="checkbox"
                name="dms"
                id="dms"
                onChange={() => props.toggleTheme()}
                checked={!props.isDark}
                {...props}
            />
            <label htmlFor="dms">
                <DMSBox {...props} >
                    <DMSBall {...props} />
                    <DMSScenery {...props} >
                        <MoonIcon />
                        <SunIcon />
                    </DMSScenery>
                </DMSBox>
            </label>
        </div>

    )
}