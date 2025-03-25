import React from 'react';
import Image from "next/image";
import Button from "../components/button";

export default function Footer() {
  return (
    <div className="bg-[#0076CE] relative z-2">
      <div className="max-w-[1280px] px-8 pt-16 pb-12 m-auto">
        <div className="footer-content lg:flex">
          <div className="footer-link h-[88px]">
            <div className="footer-banner flex items-center gap-3">  
              <Image 
                src="/assets/images/banner.png"
                width={32}
                height={32}
                alt = "Company Banner"
                style={{borderRadius: 6}}
              />
              <div className="font-bold text-white text-2xl">PDFRender</div>
            </div>
            <div className="footer-nav mt-8">
              <ul className="flex gap-8">
                <li>
                  <a className="text-sm text-white font-bold hover:text-gray-300" href="/faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="text-sm text-white font-bold hover:text-gray-300" href="/api">
                    API
                  </a>
                </li>
                <li>
                  <a className="text-sm text-white font-bold hover:text-gray-300" href="/integrations">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className="text-sm text-white font-bold hover:text-gray-300" href="/contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex-grow'></div>
          <div className="footer-contact flex flex-col">
            <div className='text-white text-sm tracking-wide mt-4 lg:mt-0'> Stay up to date</div>
            <div className='flex-grow'></div>
            <div>
              <form>
                <div className='flex gap-4 mt-4 lg:mt-0'>
                  <div className="w-full max-w-sm lg:min-w-[200px]">
                    <input className="w-full min-w-[226px] bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-white  shadow-sm focus:shadow h-[44px]" placeholder="Enter your email" />
                  </div>
                  <Button color='blue' className='border-1 border-solid text-white border-white rounded-lg h-[44px] px-3 py-4 flex items-center' href='/'> Subscribe </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='h-[20px] lg:h-[64px]'></div>
        <div className="footer-copyright lg:flex pt-8 border-t border-white">
          <div className='text-white'>
            @ 2025 PDFRender. All rights reserved.
          </div>
          <div className='flex-grow'></div>
          <div>
            <ul className="flex gap-8">
              <li>
                <a className="text-sm text-white hover:text-gray-300" href="/terms">
                  Terms
                </a>
              </li>
              <li>
                <a className="text-sm text-white hover:text-gray-300" href="/privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-sm text-white hover:text-gray-300" href="/cookies">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}