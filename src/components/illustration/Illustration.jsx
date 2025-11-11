import { SideImg } from './illustrations/SideImg'
import { TasksImg } from './illustrations/TasksImg'

export const Illustration = ({ name, width, height, ...props }) => {
	const icons = {
		SideImg,
		TasksImg,
	}

	const Component = icons[name]

	if (!Component) {
		console.warn(`Illustration "${name}" not found`)
		return null
	}

	return <Component width={width} height={height} {...props} />
}
