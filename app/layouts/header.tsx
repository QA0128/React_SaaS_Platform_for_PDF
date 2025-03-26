'use client';

import Image from 'next/image';
import Button from '../components/button';
import { useEffect } from "react";

export default function Header() {

  useEffect(() => {
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');
    
    const toggleMenu = () => {
      menu.forEach((el) => el.classList.toggle('hidden'));
    }

    burger.forEach((btn) => btn.addEventListener('click', toggleMenu));
    close.forEach((btn) => btn.addEventListener('click', toggleMenu));
    backdrop.forEach((btn) => btn.addEventListener('click', toggleMenu));

    return () => {
      burger.forEach((btn) => btn.addEventListener('click', toggleMenu));
      close.forEach((btn) => btn.addEventListener('click', toggleMenu));
      backdrop.forEach((btn) => btn.addEventListener('click', toggleMenu));
    }
  }, []);


  return (
    <div className='w-full bg-white border-b border-[#DDE1E6] relative z-3'>
      <div className="py-6 max-w-7xl m-auto h-[80px] flex justify-center flex-col">
        <nav className="relative flex justify-between items-center bg-white mx-3 lg:mx-0">
          <a className="text-3xl font-bold leading-none" href="#">
            <Image
              src="/assets/images/logo.png"
              alt="Company banner"
              className="h-8"
              width={184}
              height={32}
            />
          </a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 flex-grow">
            <li>
              <a className="a-link text-sm text-gray-400 hover:text-gray-500" href="/faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="a-link text-sm text-blue-600 font-bold" href="/api">
                API
              </a>
            </li>
            <li>
              <a className="a-link text-sm text-gray-400 hover:text-gray-500" href="/integrations">
                Integrations
              </a>
            </li>
            <li>
              <a className="a-link text-sm text-gray-400 hover:text-gray-500" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="hidden lg:flex items-center gap-[16px]">
            <Button href="/auth/login" color="transparent" className="text-[#0076CE] border border-blue-500 !w-[106px]">
              <div>Log in</div>
            </Button>
            <Button href="/dashboard" color="blue" className="h-[48px] text-white"><div>Start Free Trial</div></Button>
          </div>
        </nav>
        <div className="navbar-menu relative z-50 hidden">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#"></a>
              <button className="navbar-close">
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/faq"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/api"
                  >
                    API
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-gilory font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/integrations"
                  >
                    Integrations
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <Button color='transparent' href='/auth/login' className="text-[#0076CE] border border-blue-500">
                  <div>Log in</div>
                </Button>
                <Button color="blue" href="/dashboard" className="text-white">Start Free Trial</Button>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2025</span>
              </p>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
