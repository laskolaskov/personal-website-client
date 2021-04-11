import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { ReactComponent as LightLogo } from './svg/darkBullSkull.svg'
import { ReactComponent as DarkLogo } from './svg/lightBullSkull.svg'

import DarkModeSwitch from '../components/DarkModeSwitch'
import LanguageSwitch from '../components/LanguageSwitch'

import { useTranslation } from 'react-i18next'
import { useDarkMode } from '../hooks/useDarkMode'

function Header() {
    const [isDark, toggleTheme] = useDarkMode()
    const { t } = useTranslation()
    return (
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand>
                {isDark ? <DarkLogo width="50" /> : <LightLogo width="50" />}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
                <Nav>
                    <IndexLinkContainer to="/">
                        <Nav.Link>{t('navHome')}</Nav.Link>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/sketches">
                        <Nav.Link>{t('navSketches')}</Nav.Link>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/contacts">
                        <Nav.Link>{t('navContacts')}</Nav.Link>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/test">
                        <Nav.Link>Test</Nav.Link>
                    </IndexLinkContainer>
                </Nav>
                <Form inline>
                    <DarkModeSwitch isDark={isDark} toggleTheme={toggleTheme} scale={50} />
                    <LanguageSwitch scale={50} />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header