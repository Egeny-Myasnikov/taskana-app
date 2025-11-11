import { Link } from '../link/Link'
import s from './footer.module.css'

export const Footer = () => {
	return (
		<footer className={s.footer} role='contentinfo'>
			<p className={s.footerText}>
				Проект выполнен в рамках стажировки{' '}
				<Link
					href={'https://preax.ru/'}
					aria-label='Перейти на сайт PREAX (откроется в новой вкладке)'
					target='_blank'
					rel='noopener noreferrer'
				>
					PREAX
				</Link>
			</p>
		</footer>
	)
}
