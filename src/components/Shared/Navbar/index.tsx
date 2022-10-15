import NotificationIcon from '@components/Notification/Icon';
import useStaffMode from '@components/utils/hooks/useStaffMode';
import { Disclosure } from '@headlessui/react';
import { MailIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import hasPrideLogo from '@lib/hasPrideLogo';
import isFeatureEnabled from '@lib/isFeatureEnabled';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { useAppStore } from 'src/store/app';

import MenuItems from './MenuItems';
import MoreNavItems from './MoreNavItems';
import Search from './Search';
import StaffBar from './StaffBar';

const Navbar: FC = () => {
  const currentProfile = useAppStore((state) => state.currentProfile);
  const { allowed: staffMode } = useStaffMode();

  interface NavItemProps {
    url: string;
    name: string;
    current: boolean;
  }

  const NavItem = ({ url, name, current }: NavItemProps) => {
    return (
      <Link href={url} aria-current={current ? 'page' : undefined}>
        <Disclosure.Button
          className={clsx(
            'w-full text-left px-2 md:px-3 py-1 rounded-md font-bold cursor-pointer text-sm tracking-wide',
            {
              'text-black dark:text-white bg-gray-200 dark:bg-lime-800': current,
              'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-lime-200 dark:hover:bg-lime-800':
                !current
            }
          )}
        >
          {name}
        </Disclosure.Button>
      </Link>
    );
  };

  const NavItems = () => {
    const { pathname } = useRouter();

    return (
      <div className='flex w-full'>
          <NavItem url="/" name="EXPLORER" current={pathname == '/'} />
          <NavItem url="/explore" name="ORGANIZATION" current={pathname == '/explore'} />
            
      </div>
    );  
  };

  return (
    
    <>
      <Disclosure
      as="header"
      className="sticky top-0 z-10 w-full bg-white border-b dark:bg-gray-900 dark:border-b-gray-700/80 bg-lime-400 border-black border-2"
    >
      {({ open }) => (
        <>
          {staffMode && <StaffBar />}
          <div className="container px-5 mx-auto max-w-screen-xl ">
            <div className="flex relative justify-between items-center h-14 sm:h-16 ">
              <div className="flex justify-start items-center">
                <Disclosure.Button className="inline-flex justify-center items-center mr-4 text-gray-500 rounded-md sm:hidden focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <Link href="/">
                 { /*<img
                    className="w-8 h-8"
                    height={32}
                    width={32}
                    src={currentProfile && hasPrideLogo(currentProfile) ? '/pride.svg' : '/logo.svg'}
                    alt="Logo"
                  /> */} #
                </Link>
                <div className="hidden sm:block sm:ml-6 ">
                  <div className="flex items-center space-x-">
                    <div className="hidden lg:block">
                      {/*<Search />*/}
                    </div>
                    <NavItems />
                  </div>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                {currentProfile ? (
                  <>
                    {isFeatureEnabled('messages', currentProfile?.id) && (
                      <Link href="/messages">
                        <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </Link>
                    )}
                    <NotificationIcon />
                  </>
                ) : null}
                <MenuItems />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            <div className="flex flex-col p-3 space-y-2">
              <div className="mb-2">
                <Search hideDropdown />
              </div>
              <NavItems />
            </div>
          </Disclosure.Panel>

        </>
      )}
      </Disclosure>
      <div className='border-black border-b-2 border-r-2 border-l-2 flex'>
        <div className='w-1/4 text-center pt-2 border-black border-r-2'>
          <p>TAGGING CONTENT</p>
        </div>
        <div className='flex items-center space-x- w-1/2 border-black border-r-2'>
          <Search/>
        </div>
        <div className='w-1/4'>

        </div>
      </div>
    </>
    
  );
};

export default Navbar;
