import React from 'react'
import styled from 'styled-components'

import { useDarkMode } from '../hooks/useDarkMode'

const TogglerInput = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`
const TogglerLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 100px;
    height: 50px;
    background: ${props => props.isDark ? 'red' : 'green'};
    border-radius: 100px;
    position: relative;
    transition: background-color .2s;
`
const TogglerBtn = styled.span`
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 45px;
    height: 45px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

    ${TogglerInput}:checked + ${TogglerLabel} & {
        left: calc(100% - 2px);
        transform: translateX(-100%);
    }
    ${TogglerLabel}:active & {
        width: 60px;
    }
`

export default function Toggler(props) {
    const [isDark, toggleTheme] = useDarkMode()
    return (
        <div>
            <TogglerInput
                id={props.id}
                onChange={() => toggleTheme()}
                type="checkbox"
                //checked={isDark}
            />
            <TogglerLabel
                isDark={isDark}
                htmlFor={props.id}
            >
                <TogglerBtn />
            </TogglerLabel>
        </div>
    )
}