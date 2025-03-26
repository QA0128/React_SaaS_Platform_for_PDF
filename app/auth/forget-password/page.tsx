'use client';

import Button from '@/app/components/button';

export default function ForgetPasswordPage() {

  return (
    <div>
      <div className="w-85% lg:w-[396px] justify-self-center align-self-center flex flex-col mt-[180px]">
        <div className="text-4xl font-medium leading-[54px] text-nowrap mt-[30px] text-center">Forgot Password?</div>
        <div className="text-[#717171] text-lg leading-[27px] font-medium text-center mt-4">Enter your email address to receive a password reset link.</div>
        <form className="space-y-4 mt-8">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="olivia@pdfrender.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button color='blue' href='#' className='w-full lg:!max-w-none text-white mt-4'>Send reset link</Button>

        </form>
      </div>
    </div>
  );
}
