import { useState } from 'react'

export const useDarkMode = () => {
    const [isDark, toggleDark] = useState(true)

    const themes = {
        dark: 'css/bootstrap-nightfall.min.css',
        light: null,
    }

    const setTheme = () => {
		document.getElementById('theme-link').href = isDark ? themes.dark : themes.light
	}

	const toggleTheme = () => {
		toggleDark(!isDark)
		setTheme()
	}

    setTheme()

    return [isDark, toggleTheme]
}