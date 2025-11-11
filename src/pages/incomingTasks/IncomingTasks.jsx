import { Footer } from '../../components/footer/Footer'
import { MainContainer } from '../../components/mainContainer/MainContainer'
import s from './incomingTasks.module.css'

export function IncomingTasks() {
	return (
		<div
			className={s.incomingTasks}
			role='region'
			aria-label='Страница входящих задач'
		>
			<div className={s.container}>
				<MainContainer />
				<Footer />
			</div>
		</div>
	)
}
