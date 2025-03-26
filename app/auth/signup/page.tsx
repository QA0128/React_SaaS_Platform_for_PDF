'use client';

import Button from '@/app/components/button';
import Image from 'next/image';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='h-full pt-[40px]'>
      <div className="w-85% lg:w-[396px] justify-self-center align-self-center flex flex-col">
        <Image src="/assets/images/logo.png" width={184} height={32} alt="Company Logo" />
        <div className="text-4xl font-medium leading-[54px] mt-[30px]">Create Your PDFRender Account</div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Button color="transparent" href="google.com" className="rounded border-1 border-solid border-gray-300">
            <div className="flex gap-4 justify-center">
              <Image src={'/assets/icons/google.ico'} height={24} width={24} alt="Google Icon" />
              <div>Google</div>
            </div>
          </Button>
          <Button color="transparent" href="apple.com" className="rounded border-1 border-solid border-gray-300">
            <div className="flex gap-4 justify-center">
              <Image src={'/assets/icons/apple.ico'} height={24} width={24} alt="Apple Icon" />
              <div>Apple</div>
            </div>
          </Button>
        </div>
        <div className="flex items-center gap-4 text-gray-400 text-sm mt-8">
          <div className="flex-grow border-t border-gray-300" />
          <span>or continue with email</span>
          <div className="flex-grow border-t border-gray-300" />
        </div>
        <form className="space-y-4 mt-8">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Jone Doe"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="maxim@gmail.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="••••••••"
                className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>
                I agree to the&nbsp;
                <a href="/auth/forget-password" className="text-blue-600 font-medium hover:underline">
                  Terms of Service&nbsp;
                </a>
                and&nbsp;
                <a href="#" className="text-blue-600 font-medium hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>
          </div>
          <Button color='blue' href='#' className='w-full lg:!max-w-none text-white mt-4'>Create Account</Button>
          <div className='w-full mt-8 text-[14px] text-[#4D4D4D] text-center'>
            Already have an account?&nbsp;
            <a href="/auth/login" className="text-blue-600 font-medium hover:underline">
              Log in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
