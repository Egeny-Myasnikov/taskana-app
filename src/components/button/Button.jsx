import s from './button.module.css'

const buttonVariants = {
	base: 'base',
	primary: 'primary',
	secondary: 'secondary',
	default: false,
}

export const Button = ({
	type = 'button',
	children,
	variant = buttonVariants.base,
	...props
}) => {
	return (
		<button
			{...props}
			type={type}
			className={`${s.button} ${variant ? s[`button--${variant}`] : ''} ${
				props.className || ''
			}`}
		>
			{children}
		</button>
	)
}
