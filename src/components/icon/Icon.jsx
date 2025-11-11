import { CheckIcon } from './icons/CheckIcon'
import { ChevronBottomIcon } from './icons/ChevronBottomIcon'
import { ChevronUpIcon } from './icons/ChevronUpIcon'
import { DoubleChevronUpIcon } from './icons/DoubleChevronUpIcon'
import { EditIcon } from './icons/EditIcon'
import { InboxIcon } from './icons/InboxIcon'
import { LoadingIcon } from './icons/LoadingIcon'
import { LogoIcon } from './icons/LogoIcon'
import { MinusIcon } from './icons/MinusIcon'
import { MoonIcon } from './icons/MoonIcon'
import { PlusIcon } from './icons/PlusIcon'
import { SunIcon } from './icons/SunIcon'
import { XMarkIcon } from './icons/XMarkIcon'

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
