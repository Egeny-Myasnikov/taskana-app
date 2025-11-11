import { useContext, useState } from 'react'
import { Button } from '../button/Button'
import { Icon } from '../icon/Icon'
import { Logo } from '../logo/Logo'
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher'
import s from './header.module.css'
import { TaskContext } from '../../context/taskContext'

export const Header = () => {
	const { taskEditorIsOpen, setTaskEditorIsOpen } = useContext(TaskContext)

	const [isPending, setIsPending] = useState(false)
	const handleOpenTaskEditor = () => {
		if (!taskEditorIsOpen) {
			setIsPending(true)
			setTaskEditorIsOpen(true)
			setIsPending(false)
		}
	}

	return (
		<header className={s.header} role='banner'>
			<Logo />
			<div className={s.headerGroup}>
				<Button
					disabled={false}
					onClick={handleOpenTaskEditor}
					aria-label='Создать новую задачу'
					title='Создать новую задачу'
					className={isPending ? s.btnHeaderLoading : ''}
				>
					{isPending ? (
						<Icon
							name={'LoadingIcon'}
							color='var(--base-white)'
							alt='loading-icon'
						/>
					) : (
						<>
							<Icon
								name={'PlusIcon'}
								className={s.headerBtnIcon}
								alt='plus icon'
							/>
							Создать
						</>
					)}
				</Button>

				<ThemeSwitcher />
			</div>
		</header>
	)
}
