import { Illustration } from '../illustration/Illustration'
import s from './statistic.module.css'

export const Statistic = () => {
	return (
		<div
			className={s.statistic}
			role='region'
			aria-labelledby='statistic-title'
		>
			<span className={s.statisticImg}>
				<Illustration name={'SideImg'} alt='' role='presentation' />
			</span>
			<p id='statistic-title' className={s.statisticText}>
				Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
				и самочувствие.
			</p>
		</div>
	)
}
