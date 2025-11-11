import { CheckIcon } from './icons/checkIcon.jsx'
import { ChevronBottomIcon } from './icons/ChevronBottomIcon.jsx'
import { ChevronUpIcon } from './icons/ChevronUpIcon.jsx'
import { DoubleChevronUpIcon } from './icons/DoubleChevronUpIcon.jsx'
import { EditIcon } from './icons/EditIcon.jsx'
import { InboxIcon } from './icons/InboxIcon.jsx'
import { LoadingIcon } from './icons/LoadingIcon.jsx'
import { LogoIcon } from './icons/LogoIcon.jsx'
import { MinusIcon } from './icons/MinusIcon.jsx'
import { MoonIcon } from './icons/MoonIcon.jsx'
import { PlusIcon } from './icons/PlusIcon.jsx'
import { SunIcon } from './icons/SunIcon.jsx'
import { XMarkIcon } from './icons/XMarkIcon.jsx'

export const Icon = ({
	name,
	width = 24,
	height = 24,
	color = 'currentColor',
	...props
}) => {
	const icons = {
		InboxIcon,
		LogoIcon,
		PlusIcon,
		LoadingIcon,
		MoonIcon,
		SunIcon,
		EditIcon,
		CheckIcon,
		XMarkIcon,
		ChevronBottomIcon,
		DoubleChevronUpIcon,
		ChevronUpIcon,
		MinusIcon,
	}

	const Component = icons[name]

	if (!Component) {
		console.warn(`Icon "${name}" not found`)
		return null
	}

	return <Component width={width} height={height} color={color} {...props} />
}
