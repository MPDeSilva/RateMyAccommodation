import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import firebase from '../firebase/clientApp'
import { useAuthState } from "react-firebase-hooks/auth"



const navigation = [
  { name: 'Search', href: '/search', current: true },
  { name: 'Universities', href: '#', current: false },
  { name: 'Reviews', href: '#', current: false },
  { name: 'Dashboard', href: '#', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
  const [user, loading, error] = useAuthState(firebase.auth())
     return (
     <Disclosure as="nav" className="flex flex-col fixed bg-gray-800 w-full z-50">
      {({ open }) => (
        <>
          <div className="flex max-w-7xl justify-between mx-auto w-full">
            <div className="relative flex items-center justify-between h-16 w-full">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto cursor-pointer"
                    src="/Logo.png"
                    alt={"RMA"}
                    // height={40}
                    // width={40}
                  />
                  <img
                    className="hidden lg:flex h-8 w-auto cursor-pointer"
                    src="/Logo.png"
                    alt={"RMA"}
                    // height={40}
                    // width={40}
                  />
                  <Link href='/'>
                    <h1 className="mx-2 md:py-2 text-base sm:text-lg md:text-2xl font-medium text-white cursor-pointer">RateMyAccommodation</h1>
                  </Link>
                </div>
              </div>
              <div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href} >
                          <div
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="md:flex hidden mr-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 sm:right-10 right-6 md:right-0 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      { user ? <img
                        className="sm:h-8 sm:w-8 h-5 w-5 rounded-full"
                        src={user.photoURL}
                        alt={"Profile"}
                        // height={30}
                        // width={30}
                      /> : <img className="sm:h-8 sm:w-8 h-5 w-5 rounded-full"
                      src="/Profile.svg"
                      alt={"Profile"}
                      // height={30}
                      // width={30}
                    /> }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    { user ? <>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#" >
                              <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Your Profile
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#" >
                              <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Settings
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#" >
                              <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Sign out
                            </div>
                          </Link>
                        )}
                      </Menu.Item></> 
                      
                      :
                       
                      <><Menu.Item>
                        {({ active }) => (
                          <Link
                            href="/login" >
                              <div
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Login/Register
                            </div>
                          </Link>
                        )}</Menu.Item></>}
                    </Menu.Items> 
                  </Transition>
                </Menu>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                 {/* Mobile menu button*/}
                 <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block sm:h-6 sm:w-6 h-5 w-5" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block sm:h-6 sm:w-6 h-5 w-5" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      </Disclosure>
    )
 
}

export default NavBar