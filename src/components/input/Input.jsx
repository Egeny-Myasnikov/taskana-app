import { forwardRef, useId, useState } from 'react'
import { Icon } from '../icon/Icon'
import s from './input.module.css'

export const Input = forwardRef(
	(
		{
			label,
			placeholder,
			required = false,
			clearable = true,
			value: externalValue,
			defaultValue = '',
			onChange,
			onClear,
			className = '',
			...props
		},
		ref
	) => {
		const [internalValue, setInternalValue] = useState(defaultValue)
		const id = useId()

		const isControlled = externalValue !== undefined
		const value = isControlled ? externalValue : internalValue

		const handleChange = e => {
			if (!isControlled) {
				setInternalValue(e.target.value)
			}
			onChange?.(e)
		}

		const handleClear = () => {
			if (!isControlled) {
				setInternalValue('')
			}

			const syntheticEvent = {
				target: {
					value: '',
					name: props.name,
				},
				type: 'clear',
			}

			onClear?.(syntheticEvent)
			onChange?.(syntheticEvent)
		}

		const showClearButton = clearable && value
		return (
			<div className={`${s.inputContainer} ${className}`}>
				{label && (
					<label htmlFor={id} className={`${s.inputLabel}`}>
						{label}
						{required && <span className={`${s.inputRequired}`}>*</span>}
					</label>
				)}

				<div className={`${s.inputWrapper}`}>
					<input
						ref={ref}
						id={id}
						className={`${s.inputField}`}
						value={value}
						onChange={handleChange}
						placeholder={placeholder}
						required={required}
						{...props}
					/>

					{showClearButton && (
						<button
							type='button'
							className={`${s.inputClear}`}
							onClick={handleClear}
							aria-label='Очистить поле'
						>
							<Icon name={'XMarkIcon'} />
						</button>
					)}
				</div>
			</div>
		)
	}
)
