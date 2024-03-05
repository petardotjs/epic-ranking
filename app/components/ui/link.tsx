import { Link } from '@remix-run/react'
import clsx from 'clsx'

export default function CustomLink({
	className,
	...props
}: React.ComponentProps<typeof Link>) {
	return (
		// we pass content anyway
		// eslint-disable-next-line jsx-a11y/anchor-has-content
		<Link
			prefetch="intent"
			className={clsx(
				'bg-[hsl(47.95deg_95.82%_53.14%)] p-1.5 font-bold text-black',
				className,
			)}
			{...props}
		/>
	)
}
