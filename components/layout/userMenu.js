
import React, { useEffect, useRef } from "react";
import { Fragment, useState } from 'react'
import { useRouter } from "next/router";
import { successToaster } from "../../utils/toast";
import { Menu, Transition } from '@headlessui/react'
import LogoutModal from "../userManagment/Modals/logoutModal";

const userNavigation = [
  { name: 'Logout' },

]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const UserMenu = (data) => {

  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const logout = () => {
    setIsOpen(true)

  }
  return (
    <>
      <Menu as="div" className="relative ">
        <div>
          <Menu.Button className="">

            <img
              height={500}
              width={500}
              className="h-9 w-9 rounded-full object-cover"

              src={data?.data ? data?.data?.avatar : '/assets/dummy.svg'}
              alt=""
            />


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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {userNavigation.map((item) => (
              <Menu.Item key={item.name}>
                {({ active }) => (
                  <div
                    onClick={logout}
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm cursor-pointer text-gray-700'
                    )}
                  >
                    {item.name}
                  </div>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
      <LogoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>

  );
};

export default UserMenu;
