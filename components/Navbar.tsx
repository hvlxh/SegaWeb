import Image from "next/image";
import Link from "next/link";
import { useEffect, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

interface NavbarProps {
  active: string
}


const Navbar = (props: NavbarProps) => {
  useEffect(() => {
    const element = document.getElementById(props.active);
    element?.classList.add("font-semibold")
  }, [props.active])
  return (
    <Popover className={"w-full"}>
      <nav className="bg-white shadow-lg dark:bg-[rgb(20,20,20)]/50 mx-4 my-4 max-sm:py-3 py-4 rounded-lg items-center">
        <div className="flex items-center px-4">
          <Link
            href="/"
            className="rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <Image
              src="https://media.discordapp.net/attachments/962595773051174952/962595813488492554/title.png"
              width={120}
              height={80}
              alt="logo"
            />
          </Link>

          <ul className="ml-auto">
            <li key="faq" id="faq" className="inline-block max-sm:hidden mx-4 text-black dark:text-white hover:text-[rgb(255,122,122)] duration-300 cursor-pointer">
              <Link
                href="/faq"
                className="p-2 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >FAQ</Link>
            </li>
            <li key="staffs" id="staffs" className="inline-block max-sm:hidden mx-4 text-black dark:text-white hover:text-[rgb(255,122,122)] duration-300 cursor-pointer">
              <Link
                href="/staffs"
                className="p-2 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >Staffs</Link>
            </li>
            <li key="shop" id="shop" className="inline-block max-sm:hidden mx-4 text-black dark:text-white hover:text-[rgb(255,122,122)] duration-300 cursor-pointer">
              <Link
                href="/shop"
                className="p-2 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              >Shop</Link>
            </li>
          </ul>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[rgb(230,230,230)] dark:bg-[rgb(20,20,20)] p-2 text-black hover:bg-[rgb(200,200,200)] dark:text-white dark:hover:bg-[rgb(15,15,15)] focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white focus:ring-black">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform px-4 mt-4 transition md:hidden">
          <div className="divide-y-2 divide-[rgb(180,180,180)] dark:divide-[rgb(117,117,117)] rounded-lg bg-[rgb(235,235,235)] dark:bg-[rgb(26,26,26)] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-3 py-3">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    src="https://media.discordapp.net/attachments/962595773051174952/962595813488492554/title.png"
                    width={120}
                    height={80}
                    alt="logo"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md dark:bg-[rgb(25,25,25)]/100 p-2 dark:text-white hover:dark:bg-[rgb(25,25,25)]/50 hover:bg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/faq" className="text-base font-normal dark:text-white/80 hover:text-red-600 hover:dark:text-red-500">
                  FAQ
                </Link>

                <Link href="/staffs" className="text-base font-normal dark:text-white/80 hover:text-red-600 hover:dark:text-red-500">
                  Staffs
                </Link>

                <Link href="/shop" className="text-base font-normal dark:text-white/80 hover:text-red-600 hover:dark:text-red-500">
                  Shop
                </Link>

                <Link href="/blogs" className="text-base font-normal dark:text-white/80 hover:text-red-600 hover:dark:text-red-500">
                  Blogs
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Navbar;