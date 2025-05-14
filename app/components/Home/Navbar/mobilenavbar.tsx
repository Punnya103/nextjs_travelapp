import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const Mobilenavbar = ({ closeNav, showNav }: Props) => {
  const overlayClasses = showNav
    ? 'translate-x-0'
    : '-translate-x-full';

  const sidebarClasses = showNav
    ? 'translate-x-0 delay-200'
    : '-translate-x-full delay-0';

  return (
    <div>
      <div
        className={`fixed inset-0 z-[1002] bg-black opacity-70 w-full h-screen transform transition-transform duration-300 ease-in-out lg:hidden ${overlayClasses}`}
      />

      <div
        className={`fixed flex flex-col justify-center h-full w-[80%] sm:w-[60%] bg-rose-900 text-white space-y-6 z-[1050] transform transition-transform duration-500 ease-in-out lg:hidden ${sidebarClasses}`}
      >
        {navLinks.map((link) => (
          <Link href={link.url} key={link.id}>
            <p className="ml-12 w-fit border-b-[1.5px] border-white pb-1 text-[20px] sm:text-[30px]">
              {link.label}
            </p>
          </Link>
        ))}

        <CgClose onClick={closeNav} className="absolute top-1 right-1 sm:w-8 sm:h-8 w-6 h-6" />
      </div>
    </div>
  );
};

export default Mobilenavbar;
