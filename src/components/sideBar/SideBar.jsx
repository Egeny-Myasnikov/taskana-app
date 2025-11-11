import { Statistic } from '../statistic/Statistic'
import s from './sideBar.module.css'

export const SideBar = () => {
	return (
		<aside
			className={s.sideBar}
			role='complementary'
			aria-label='Дополнительная информация'
		>
			<Statistic />
		</aside>
	)
}
