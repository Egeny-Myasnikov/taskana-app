import { TaskList } from '../taskList/TaskList'
import s from './mainContainer.module.css'

export const MainContainer = () => {
	return (
		<main
			id='main-content'
			className={`${s.mainContainer}`}
			role='main'
			aria-labelledby='main-title'
		>
			<h1 id='main-title' className={`${s.mainTitle}`}>
				Входящие
			</h1>
			<TaskList />
		</main>
	)
}
