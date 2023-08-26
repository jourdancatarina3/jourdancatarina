"use client";

import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ styleAbout, styleProjects, styleContact }) => {
  return (
    <div className='glow flex justify-between py-8 px-10 z-10'>
          <Link href="/" className='font-medium text-normal text-xl lg:text-2xl hover:cursor-pointer hover:underline underline-offset-4'>Jourdan Ken Catarina</Link>
      <div className='hidden md:flex lg:flex'>
          <Link href="#projects">
            <h1 className={`px-8 ${styleProjects} hover:underline underline-offset-4 font-medium text-xl lg:text-2xl hover:cursor-pointer`}>Projects</h1>
          </Link>

          <Link href="#about">
            <h1 className={`px-8 ${styleAbout} hover:underline underline-offset-4 font-medium text-xl lg:text-2xl hover:cursor-pointer`}>About</h1>
          </Link>

          <Link href="#contact">
            <h1 className={`px-8 ${styleContact} hover:underline underline-offset-4 font-medium text-xl lg:text-2xl hover:cursor-pointer`}>Contact</h1>
          </Link>
      </div>
      <Menu as="div" className="lg:hidden md:hidden relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full rounded-md text-xl mt-1 font-medium text-white">
            <FontAwesomeIcon icon={faBars} width={35} height={35} />
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
          <Menu.Items className="absolute bg-opacity-20 right-0 mt-2 w-32 origin-top-right rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#projects"
                    className={`${active ? 'bg-violet-500 text-white' : 'text-white'
                      } group flex w-full font-semibold items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Projects
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#about"
                    className={`${active ? 'bg-violet-500 text-white' : 'text-white'
                      } group flex w-full font-semibold items-center rounded-md px-2 py-2 text-sm`}
                  >
                    About
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href="#contact"
                    className={`${active ? 'bg-violet-500 text-white' : 'text-white'
                      } group flex w-full font-semibold items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Contact
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Header