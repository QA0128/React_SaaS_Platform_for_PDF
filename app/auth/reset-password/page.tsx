'use client';

import Button from '@/app/components/button';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='h-full pt-[160px]'>
      <div className="w-85% lg:w-[396px] justify-self-center align-self-center flex flex-col">
        <div className="text-4xl font-medium leading-[54px] text-nowrap mt-[30px] text-center">Reset Your Password</div>
        <div className="text-[#717171] text-base leading-[27px] font-medium text-center">Create a new password for your account</div>
        
        <form className="space-y-4 mt-8">

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className='text-[14px] text-[#B0B0B0] leading-[20px] font-medium'>Minimum 8 characters with upper and lower case</div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <Button color='blue' href='#' className='w-full lg:!max-w-none text-white mt-4'>Reset Password</Button>
        </form>

        <div className='text-center w-full mt-8 text-base'>
          Back to &nbsp;
          <a href='/auth/login' className='text-blue-600 font-medium hover:underline'>Login</a>
        </div>
        <div className='text-center w-full mt-2 text-base'>
          Need help? &nbsp;
          <a href='/auth/login' className='text-blue-600 font-medium hover:underline'>Contact Us</a>
        </div>
      </div>
    </div>
  );
}
