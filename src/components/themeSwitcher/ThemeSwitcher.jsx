import { useEffect, useState } from 'react'
import { ButtonSwitcher } from '../buttonSwitcher/ButtonSwitcher'

export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState('light')
	const [isChecked, setIsChecked] = useState(true)

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	const switchTheme = () => {
		setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
	}
	return (
		<ButtonSwitcher
			switchTheme={switchTheme}
			isChecked={isChecked}
			setIsChecked={setIsChecked}
		/>
	)
}
