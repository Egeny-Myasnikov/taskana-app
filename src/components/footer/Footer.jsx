import s from './footer.module.css'

export const Footer = () => {
	return (
		<footer className={s.footer} role='contentinfo'>
			<p className={s.footerText}>Проект TaskanaApp</p>
		</footer>
	)
}
