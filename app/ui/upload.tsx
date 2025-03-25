'use client';

import Button from '../components/button';
import React, { useState } from 'react';
import Link from 'next/link';

export const Upload: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'html' | 'url' | 'doc'>('html');

  return (
    <div>
      <div className="flex justify-center">
        <nav className="flex overflow-x-auto lg:w-[1040px] w-full h-[56px] p-[6px] mx-4 lg:mx-0 lg:my-8 items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-[#0076CE1A] rounded-xl dark:bg-gray-500/20 grid grid-cols-3">
          {/* HTML to PDF Tab */}
          <button
            role="tab"
            type="button"
            onClick={() => setSelectedTab('html')}
            aria-selected={selectedTab === 'html'}
            className={`flex whitespace-nowrap items-center justify-center h-11 px-5 font-semibold rounded-lg outline-none focus:ring-inset text-[#667085]
            ${
              selectedTab === 'html'
                ? 'text-gray-950 text-lg shadow bg-[#82C4F5] dark:text-white dark:bg-yellow-600'
                : 'hover:text-red-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400'
            }`}
          >
            HTML to PDF
          </button>

          {/* URL to PDF Tab */}
          <button
            role="tab"
            type="button"
            onClick={() => setSelectedTab('url')}
            aria-selected={selectedTab === 'url'}
            className={`flex whitespace-nowrap items-center justify-center h-11 px-5 font-semibold rounded-lg outline-none focus:ring-inset text-[#667085]
            ${
              selectedTab === 'url'
                ? 'text-gray-950 text-lg shadow bg-[#82C4F5] dark:text-white dark:bg-yellow-600'
                : 'hover:text-red-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400'
            }`}
          >
            URL to PDF
          </button>

          {/* DOC to PDF Tab */}
          <button
            role="tab"
            type="button"
            onClick={() => setSelectedTab('doc')}
            aria-selected={selectedTab === 'doc'}
            className={`flex whitespace-nowrap items-center justify-center h-11 px-5 font-semibold rounded-lg outline-none focus:ring-inset text-[#667085]
            ${
              selectedTab === 'doc'
                ? 'text-gray-950 text-lg shadow bg-[#82C4F5] dark:text-white dark:bg-yellow-600'
                : 'hover:text-red-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400'
            }`}
          >
            DOC to PDF
          </button>
        </nav>
      </div>
      <div className='border-2 border-solid border-gray-200 max-w-[1040px] rounded-lg p-4 lg:p-8 m-auto'>
        <div className='w-[40px] h-[40px] rounded border-1 border-solid border-gray-400 flex justify-center items-center m-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
          </svg>
        </div>
        <div className='p-1 mt-4'>
            <Link href="/" className='font-bold text-[#0055AA]'>Click to upload</Link> or drag and drop
        </div>
        <div>
          .{selectedTab}(max, 25MB)
        </div>
        <div className='url-input'>
          <div className="relative w-full max-w-md m-auto mt-6">

            {/* Icon */}

            <div className="absolute inset-y-0 right-6 pr-8 flex items-center pointer-events-none ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
              </svg>
            </div>

            {/* Input */}
            <input 
              className="max-w-[390px] h-[44px] w-[80%] lg:w-full mx-4 border-2 border-solid border-gray-300 rounded-lg px-3 py-2 " placeholder="Paste your raw HTML code here..." 
            />
          </div>
        </div>
      </div>
      <Button href="/" color='blue' className="text-[20px] w-full text-white m-auto py-3 px-5 my-8 lg:max-w-[218px]">Convert to PDF</Button>
    </div>
  );
};
