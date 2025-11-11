import { Illustration } from '../illustration/Illustration'
import s from './taskList.module.css'

export const TaskListEmpty = () => {
	return (
		<div className={s.taskListEmpty} aria-labelledby='task-list-title'>
			<div className={s.taskListInfo}>
				<h2 id='task-list-title' className={s.taskListInfoTitle}>
					Все твои задачи организованы как надо
				</h2>
				<p className={s.taskListInfoText}>
					Отличная работа! Ты большой молодец!
				</p>
			</div>
			<div className={s.taskListImageWrapper}>
				<Illustration name={'TasksImg'} alt='' role='presentation' />
			</div>
		</div>
	)
}
