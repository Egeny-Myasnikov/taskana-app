import { useState } from 'react'
import { TaskContext } from './taskContext'

export const TaskProvider = ({ children }) => {
	const [taskEditorIsOpen, setTaskEditorIsOpen] = useState(false)
	const [taskList, setTaskList] = useState([])
	const saveTask = task => {
		setTaskList(prevTasks => [task, ...prevTasks])
	}
	return (
		<TaskContext
			value={{ taskEditorIsOpen, setTaskEditorIsOpen, taskList, saveTask }}
		>
			{children}
		</TaskContext>
	)
}
