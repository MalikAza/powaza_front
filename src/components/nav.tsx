import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkThemeSwitch from './switches/darkThemeSwitch'
import { Link } from '../types/links'

const links: Link[] = [
  {
    title: 'About',
    ref: '#about',
    icon: ''
  },
  {
    title: 'Projects',
    ref: '#projects',
    icon: ''
  },
  {
    title: 'Contact',
    ref: '#contact',
    icon: ''
  },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDarkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    switch (isDarkTheme) {
      case true:
        document.documentElement.classList.add('dark')
        break;
    
      case false:
        document.documentElement.classList.remove('dark')
        break;
    }
  }, [isDarkTheme])

  return (
    <header
      className="backdrop-blur-sm fixed font-ubuntu w-full top-0 transition-colors duration-500">
      <nav className='mx-auto max-w-7xl lg:w-3/5'>
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-0 theme-transition" aria-label="Global">
          <div className="flex-1 justify-between lg:flex-none mr-12">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-x-1">
              <span className="sr-only">Powaza</span>
              <span className='leading-6 text-wet-asphalt dark:text-silver'>Powaza</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-wet-asphalt dark:text-silver" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6 lg:items-center">
            <ul className='flex flex-row gap-6 font-ubuntu'>
              {
                links.map((link) => (
                  <li key={link.title}>
                    <a href={link.ref}
                      className='-mx-3 block rounded-lg px-3 py-2 text-wet-asphalt
                      hover:bg-dark-silver dark:text-silver dark:hover:bg-wet-asphalt'>
                      {link.title}
                    </a>
                  </li>
                ))
              }
            </ul>
            <DarkThemeSwitch isSelected={isDarkTheme} setSelected={setDarkTheme} />
          </div>
        </div>
      </nav>
      <Transition
        show={mobileMenuOpen}
        as={Fragment}
      >
        <Dialog as="div" className="lg:hidden" onClose={() => {setMobileMenuOpen(false)}}>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className="fixed inset-0 z-10" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-silver dark:bg-dark-asphalt px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-color duration-500">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5 flex items-center gap-x-1">
                    <span className="sr-only">Powaza</span>
                    <span className='text-sm font-semibold leading-6 text-wet-asphalt dark:text-silver'>Powaza</span>
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-wet-asphalt dark:text-silver"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-dark-silver dark:divide-wet-asphalt">
                    <div className="space-y-2 py-6">
                      {
                        links.map((link) => (
                          <a key={link.title} href={link.ref}
                            className='-mx-3 block rounded-lg px-3 py-2 text-base font-ubuntu leading-7 text-wet-asphalt
                              hover:bg-light-asphalt dark:text-silver dark:hover:bg-wet-asphalt'>
                            {link.title}
                          </a>
                        ))
                      }
                    </div>
                    <div className="py-6">
                      <DarkThemeSwitch isSelected={isDarkTheme} setSelected={setDarkTheme} />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
        </Dialog>
      </Transition>
    </header>
  )
}