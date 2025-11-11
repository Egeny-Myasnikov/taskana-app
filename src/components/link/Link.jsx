import s from './link.module.css'

export const Link = ({ children, solid = false, ...props }) => {
	return (
		<a
			tabIndex={0}
			className={`${solid ? s.linkSolid : s.link} ${props.className || ''}`}
			{...props}
		>
			{children}
		</a>
	)
}
