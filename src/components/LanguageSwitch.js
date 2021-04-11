import React from 'react'
import bgFlag from './svg/bulgaria.png'
import ukFlag from './svg/united-kingdom.png'

import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

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

const LSInput = styled.input`
    display: none;
`

const LSBox = styled.div`
    ${props => commonMixin('column', 'center', null, props.scale ? props.scale : defaultScale, props.scale ? Math.round(props.scale * 0.5) : Math.round(defaultScale * 0.5), 'var(--dark)')}
    position: relative;
    border-radius: ${props => props.scale ? Math.round(props.scale * 0.25) : Math.round(defaultScale * 0.25)}px;
    cursor: pointer;
    margin: 1em;

    ${LSInput}:checked + label > & {
        background-color: var(--light);
    }
`

const LSBall = styled.div`
    ${props => commonMixin(null, null, null, props.scale ? Math.round(props.scale * 0.5) : Math.round(defaultScale * 0.5), props.scale ? Math.round(props.scale * 0.5) : Math.round(defaultScale * 0.5), 'grey')}
    position: absolute;
    border-radius: 50%;
    border: 3px solid black;

    ${LSInput}:checked + label > ${LSBox} & {
        transform: translateX(100%);
    }
`

const LSScenery = styled.div`
    ${commonMixin('row', 'space-between', null, null, null, null)}
    display: flex;
    padding: 0px ${props => props.scale ? Math.round(props.scale * 0.1) : Math.round(defaultScale * 1)}px;
    svg {
        width: ${props => props.scale ? Math.round(props.scale * 0.333) : Math.round(defaultScale * 0.333)}px;
    }
    img {
        width: ${props => props.scale ? Math.round(props.scale * 0.333) : Math.round(defaultScale * 0.333)}px;
    }
`

export default function LanguageSwitch(props) {
    const { i18n } = useTranslation()
    return (
        <div>
            <LSInput
                type="checkbox"
                name="ls"
                id="ls"
                onChange={(e) => {
                    i18n.changeLanguage(e.target.checked ? 'en' : 'bg')
                }}
                {...props}
            />
            <label htmlFor="ls">
                <LSBox {...props} >
                    <LSBall {...props} />
                    <LSScenery {...props} >
                        <img src={bgFlag} alt="error" />
                        <img src={ukFlag} alt="error" />
                    </LSScenery>
                </LSBox>
            </label>
        </div>

    )
}