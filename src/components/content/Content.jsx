import { IncomingTasks } from '../../pages/incomingTasks/IncomingTasks'
import { NavBar } from '../navBar/NavBar'
import { SideBar } from '../sideBar/SideBar'
import { TaskEditor } from '../taskEditor/TaskEditor'
import s from './content.module.css'

export const Content = () => {
	return (
		<div className={s.content} role='application'>
			<NavBar />
			<IncomingTasks />
			<SideBar />
			<TaskEditor />
		</div>
	)
}
