import { Icon } from '../icon/Icon'
import { Link } from '../link/Link'
import s from './navBar.module.css'

export const NavBar = () => {
	return (
		<nav className={s.navBar} role='navigation' aria-label='Основная навигация'>
			<ul className={s.navBarLst} role='menubar'>
				<li className={s.navBarItem} role='none'>
					<Link
						href={'#'}
						solid
						role='menuitem'
						aria-label='Перейти к разделу Входящие задачи'
						aria-current='page'
					>
						<Icon
							name={'InboxIcon'}
							alt='inbox-icon'
							className={s.navbarIconLink}
						/>
						Входящие
					</Link>
				</li>
			</ul>
		</nav>
	)
}
