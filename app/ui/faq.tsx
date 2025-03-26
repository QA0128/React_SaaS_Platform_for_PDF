import React from 'react';

const Faqs = () => {
  return (
    <div className="mx-auto mt-12">
      <div className="divide-y divide-gray-100 justify-items-center">
        <details className="group bg-white p-4 w-full max-w-[900px] mb-4">
          <summary className="flex font-('bolder') cursor-pointer list-none items-center justify-between text-lg font-medium text-secondary-900 group-open:text-primary-500" style={{fontWeight:'bolder'}}>
            How does the free trial work?
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="block h-5 w-5 group-open:hidden"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="hidden h-5 w-5 group-open:block"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500">This is the first item's accordion body.</div>
        </details>
        <details className="group bg-white p-4 w-full max-w-[900px] mb-4">
          <summary className="flex font-('bolder') cursor-pointer list-none items-center justify-between text-lg font-medium text-secondary-900 group-open:text-primary-500" style={{fontWeight:'bolder'}}>
            How do I integrate with Zapier?
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="block h-5 w-5 group-open:hidden"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="hidden h-5 w-5 group-open:block"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500">This is the second item's accordion body.</div>
        </details>
        <details className="group bg-white p-4 w-full max-w-[900px] mb-4">
          <summary className="flex font-('bolder') cursor-pointer list-none items-center justify-between text-lg font-medium text-secondary-900 group-open:text-primary-500" style={{fontWeight:'bolder'}}>
            What happens when my credits run out?
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="block h-5 w-5 group-open:hidden"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="hidden h-5 w-5 group-open:block"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500">This is the third item's accordion body.</div>
        </details>
        <details className="group bg-white p-4 w-full max-w-[900px] mb-4">
          <summary className="flex font-('bolder') cursor-pointer list-none items-center justify-between text-lg font-medium text-secondary-900 group-open:text-primary-500" style={{fontWeight:'bolder'}}>
            Can I upgrade or downgrade my plan anytime?
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="block h-5 w-5 group-open:hidden"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="hidden h-5 w-5 group-open:block"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
          </summary>
          <div className="pb-4 text-secondary-500">This is the third item's accordion body.</div>
        </details>
      </div>
    </div>
  );
};

export default Faqs;
