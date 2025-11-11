import { useCallback } from 'react'
import { Icon } from '../icon/Icon'
import s from './buttonSwitcher.module.css'

export const ButtonSwitcher = ({ isChecked, setIsChecked, switchTheme }) => {
	const handleChange = useCallback(
		e => {
			const newCheckedState = e.target.checked

			setIsChecked(newCheckedState)
			switchTheme?.(newCheckedState)
		},
		[setIsChecked, switchTheme]
	)

	const handleKeyDown = useCallback(
		e => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault()
				const newCheckedState = !isChecked
				setIsChecked(newCheckedState)
				switchTheme?.(newCheckedState)
			}
		},
		[isChecked, setIsChecked, switchTheme]
	)

	return (
		<label
			className={s.switcher}
			htmlFor='switcher'
			tabIndex={0}
			onKeyDown={handleKeyDown}
			aria-label='Переключить между светлой и темной темой'
		>
			<input
				onChange={handleChange}
				checked={isChecked}
				className={s.switcherInput}
				type='checkbox'
				name='switcher'
				id='switcher'
			/>
			<span className={s.sunIcon}>
				<Icon name={'SunIcon'} />
			</span>
			<span className={s.moonIcon}>
				<Icon name={'MoonIcon'} />
			</span>
		</label>
	)
}
