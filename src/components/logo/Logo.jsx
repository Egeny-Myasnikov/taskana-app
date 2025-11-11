import { Icon } from '../icon/Icon'
import s from './logo.module.css'

export const Logo = () => {
	return (
		<a
			href='#'
			className={s.logo}
			title='Перейти на главную страницу Taskana'
			aria-label='Перейти на главную страницу Taskana'
		>
			<Icon
				name={'LogoIcon'}
				className={s.logoImg}
				alt='Логотип Taskana'
				aria-hidden='true'
				color='var(--base-white)'
			/>
		</a>
	)
}
