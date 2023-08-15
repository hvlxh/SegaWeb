import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaDiscord, FaShoppingBag, FaVoteYea } from "react-icons/fa"

interface NavbarProps {
  active: string
}

const NavIcon = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <Link href={href} className="flex items-center p-2 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
    {icon}
  </Link>
);

const NavItem = ({ href, text }: { href: string, text: string }) => (
  <Link href={href} className="flex items-center p-2 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
    <span>{text}</span>
  </Link>
);

const Navbar = (props: NavbarProps) => {
  useEffect(() => {
    const element = document.getElementById(props.active);
    element?.classList.add("font-semibold");
  }, [props.active]);

  return (
    <Popover className="w-full">
      <nav className="bg-white/10 shadow-lg mb-4 max-sm:py-3 py-3 relative flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center px-4">
          <Link href="/" passHref className="rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <Image
              src="https://media.discordapp.net/attachments/962595773051174952/962595813488492554/title.png"
              width={120}
              height={80}
              alt="logo"
            />
          </Link>
        </div>

        {/* Right section */}
        <ul className="flex items-center space-x-2">
          <li key="faq" id="faq" className="max-sm:hidden mx-2 text-white/90 hover:text-[rgb(255,122,122)] duration-300 cursor-pointer">
            <NavItem href="/faq" text="FAQ" />
          </li>
          <li
            key="staffs"
            id="staffs"
            className="max-sm:hidden mx-2 text-white/90 hover:text-[rgb(255,122,122)] duration-300 cursor-pointer"
          >
            <NavItem href="/staffs" text="Staffs" />
          </li>

          <li className="max-sm:hidden inline-block max-sm:hidde text-white/50">
            <span className="text-xl font-extralight mx-3">|</span>
          </li>

          <div className="flex items-center space-x-2 max-sm:hidden">
            <NavIcon href="https://store.segamc.net" icon={<FaShoppingBag className="text-white text-xl hover:text-red-400 duration-150" />} />
            <NavIcon href="https://discord.segamc.net" icon={<FaDiscord className="text-white text-xl hover:text-red-400 duration-150" />} />
            <NavIcon href="https://vote.segamc.net/" icon={<FaVoteYea className="text-white text-xl hover:text-red-400 duration-150 mr-5" />} />
          </div>
        </ul>


        {/* Mobile menu toggle */}
        <div className="-my-2 mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white/40 p-2 text-black hover:bg-[rgb(200,200,200)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div className="border-t border-white/40 absolute bottom-0 left-0 right-0" />
      </nav>

      <Transition
        as={React.Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform px-4 mt-4 transition md:hidden">
          <div className="divide-y-2 divide-[rgb(117,117,117)] rounded-lg bg-black/80 shadow-lg ring-1 ring-black ring-opacity-5">
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
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[rgb(25,25,25)]/100 p-2 text-white hover:bg-[rgb(25,25,25)]/50 hover:bg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-3 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-center">
                <Link href="/faq" className="text-base font-normal dark:text-white/80 hover:text-red-600 hover:dark:text-red-500">
                  FAQ
                </Link>

                <Link href="/staffs" className="text-base font-normal dark:text-white/80 hover:text-red-600 hover:dark:text-red-500">
                  Staffs
                </Link>
              </div>
            </div>

            <div className="flex justify-evenly p-2">
              <NavIcon href="https://store.segamc.net" icon={<FaShoppingBag className="text-white text-xl hover:text-red-400 duration-150" />} />
              <NavIcon href="https://discord.segamc.net" icon={<FaDiscord className="text-white text-xl hover:text-red-400 duration-150" />} />
              <NavIcon href="https://vote.segamc.net/" icon={<FaVoteYea className="text-white text-xl hover:text-red-400 duration-150" />} />
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Navbar;
