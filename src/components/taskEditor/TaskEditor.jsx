import { useContext, useLayoutEffect, useRef, useState } from 'react'
import { TaskContext } from '../../context/taskContext'
import { generateId } from '../../utils'
import { Button } from '../button/Button'
import { Icon } from '../icon/Icon'
import { Input } from '../input/Input'
import s from './taskEditor.module.css'

export const TaskEditor = () => {
	const { taskEditorIsOpen, setTaskEditorIsOpen, saveTask } =
		useContext(TaskContext)
	const [title, setTitle] = useState('')
	const [priority, setPriority] = useState(1)
	const inputRef = useRef(null)

	const setFocus = () => {
		setTimeout(() => {
			inputRef.current.focus()
		}, 500)
	}

	useLayoutEffect(() => {
		setFocus()
	}, [taskEditorIsOpen, saveTask])

	const handleSave = () => {
		if (title.trim()) {
			const now = new Date()
			saveTask({
				id: generateId(),
				title: title.trim(),
				priority,
				createdAt: now.toISOString(),
				updatedAt: now.toISOString(),
			})
			resetForm()
		}
	}

	const handleCancel = () => {
		resetForm()
		setTaskEditorIsOpen(false)
	}

	const resetForm = () => {
		setTitle('')
		setPriority(1)
	}

	const handleKeyPress = e => {
		if (e.key === 'Enter' && title.trim()) {
			handleSave()
		}
	}

	const priorityIcons = ['MinusIcon', 'ChevronUpIcon', 'DoubleChevronUpIcon']

	return (
		<div
			className={`${s.taskEditor} ${taskEditorIsOpen ? s.taskEditorOpen : ''}`}
		>
			<div className={`${s.taskEditorBody}`}>
				<div className={`${s.taskEditorHeader}`}>
					<h2 className={`${s.taskEditorTitle}`}>Создание задачи</h2>
					<div>
						<Input
							type='text'
							ref={inputRef}
							label='Название'
							placeholder='Название задачи'
							required={true}
							value={title}
							onChange={e => setTitle(e.target.value)}
							onKeyPress={handleKeyPress}
						/>
					</div>
				</div>

				<div className={`${s.taskEditorContent}`}>
					<div className={`${s.taskEditorPriorityGroup}`}>
						<span className={`${s.taskEditorLabel}`}>Приоритет</span>
						<div className={`${s.taskEditorPriorityOptions}`}>
							{priorityIcons.map((icon, idx) => (
								<button
									key={icon}
									className={`${s.taskEditorPriorityBtn} ${
										s[`taskEditorPriorityBtn--${idx + 1}`]
									} ${
										priority === idx + 1 ? s.taskEditorPriorityBtnActive : ''
									}`}
									onClick={() => setPriority(idx + 1)}
									type='button'
								>
									<Icon name={icon} className={s[`priority--${+idx + 1}`]} />
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className={`${s.taskEditorFooter}`}>
				<Button
					variant='primary'
					onClick={handleSave}
					disabled={!title.trim()}
					type='button'
				>
					Создать
				</Button>
				<Button variant='secondary' onClick={handleCancel}>
					Отмена
				</Button>
			</div>
		</div>
	)
}
