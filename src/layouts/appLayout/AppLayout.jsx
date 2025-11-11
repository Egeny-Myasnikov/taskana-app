import { Content } from '../../components/content/Content'
import { Header } from '../../components/header/Header'
import s from './appLayout.module.css'
import { TaskProvider } from '../../context/taskProvider'

export const AppLayout = () => {
	return (
		<TaskProvider>
			<div className={s.appLayout} role='document'>
				<Header />
				<Content />
			</div>
		</TaskProvider>
	)
}
