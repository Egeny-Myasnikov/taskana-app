import { useContext } from 'react'
import { TaskContext } from '../../context/taskContext'
import { CheckBox } from '../checkBox/CheckBox'
import { TaskListEmpty } from './TaskListEmpty'
import s from './taskList.module.css'

export const TaskList = () => {
	const { taskList } = useContext(TaskContext)
	return (
		<article className={s.taskList} aria-labelledby='Список задач'>
			{taskList?.length > 0 ? (
				<ul className={s.list}>
					{taskList.map(({ id, title, priority }) => (
						<li key={id} className={s.item}>
							<CheckBox title={title} priority={priority} />
						</li>
					))}
				</ul>
			) : (
				<TaskListEmpty />
			)}
		</article>
	)
}
