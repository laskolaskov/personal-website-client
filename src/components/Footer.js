//import React from './react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const StyledFooter = styled.footer`
    min-height: 10vh;
`

function Footer() {
    const { t } = useTranslation()
    return (
        <StyledFooter>
            <div>{t('iconsBy')} <a href="https://www.freepik.com" target="_blank" rel="noreferrer" title="Freepik">Freepik</a>, <a href="https://www.flaticon.com/authors/pixel-buddha" target="_blank" rel="noreferrer" title="Pixel Buddha">Pixel Buddha</a>, <a href="https://www.flaticon.com/authors/pixel-perfect" target="_blank" rel="noreferrer" title="Pixel perfect">Pixel perfect</a> {t('iconsFrom')} <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer" title="Flaticon">www.flaticon.com</a></div>
        </StyledFooter>
    )
}

export default Footer