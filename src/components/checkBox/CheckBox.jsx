import { useId, useState } from 'react'
import s from './checkBox.module.css'

export const CheckBox = ({ title, priority }) => {
	const [isChecked, setIsChecked] = useState(false)
	const id = useId()
	return (
		<label className={`${s.checkBox}`} htmlFor={id}>
			<input
				className={`${s.checkBoxFieldNone} `}
				type='checkbox'
				id={id}
				checked={isChecked}
				onChange={e => {
					setIsChecked(e.target.checked)
				}}
			/>
			<span
				className={`${s.checkBoxField} ${
					priority ? s[`checkBoxFieldPriority--${priority}`] : ''
				}`}
			></span>
			<span className={`${s.checkBoxTitle}`}>{title}</span>
		</label>
	)
}
