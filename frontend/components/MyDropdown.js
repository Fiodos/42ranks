import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Bars4Icon } from '@heroicons/react/24/solid'

export default function MyDropdown() {
	const links = [
			{ key: '0', href: '/leaderboard', label: 'Leaderboard', disabled: false},
			{ key: '1', href: '/challenge', label: 'Challenge', disabled: false },
			{ key: '2', href: '/about', label: 'About', disabled: false },
		  ]
  return (
    <Menu>
      <Menu.Button className="mt-10 m-10"><Bars4Icon className="h-8 w-8"/></Menu.Button>
	  <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
	  <Menu.Items className="absolute left-20 bottom-4 text-base font-mono">
		{links.map(link=>(
        <Menu.Item key={links.href} as={Fragment}>
			{({ active }) => (
              <a
			  href={link.href}
			  className={`${active && '[#32682F]'} pl-5`}
			>
				{link.label}
				<br></br>
			</a>
				)}
				</Menu.Item>
		))}
      </Menu.Items>
	  </Transition>
    </Menu>
  )
}
