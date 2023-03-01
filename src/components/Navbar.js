import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Squares2X2Icon, BellIcon } from '@heroicons/react/24/solid'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Disclosure as='nav' className='bg-white shadow sticky top-0 '>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='flex flex-shrink-0 items-center'>
                  <img
                    className='block h-8 w-auto lg:hidden'
                    src={logo}
                    alt='Your Company'
                  />

                  <img
                    className='hidden h-8 w-auto lg:block'
                    src={logo}
                    alt='Your Company'
                  />
                  <Link to='/'>
                    {' '}
                    <p className=' ml-5 font-bold text-lg'>Arbit Blog</p>
                  </Link>
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                <p className='rounded-full bg-white p-3 hover:text-gray-500 focus:outline-none'>
                  Posts
                  {/* <span className='absolute -top-3 -right-4 w-4 flex justify-center align-middle p-3'>
                    10
                  </span> */}
                  <span className='absolute top-3 bg-green-300 text-gray-500  rounded text-xs w-4 '>
                    10
                  </span>
                </p>
                <button
                  type='button'
                  className='rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none '
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
                <button
                  type='button'
                  className='rounded-full bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none '
                >
                  <span className='sr-only'>View notifications</span>
                  <Squares2X2Icon className='h-6 w-6' aria-hidden='true' />
                </button>

                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-white text-sm focus:outline-none '>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'></Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pt-2 pb-3'>
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as='a'
                href='/'
                className='block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700'
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/new'
                className='block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700'
              >
                Create New Post
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
