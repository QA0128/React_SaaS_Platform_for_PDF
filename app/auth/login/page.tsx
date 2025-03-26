"use client";

import Button from "@/app/components/button";
import Image from "next/image";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-full pt-[80px]">
      <div className="w-85% lg:w-[396px] justify-self-center align-self-center flex flex-col">
        <Image src="/assets/images/logo.png" width={184} height={32} alt="Company Logo" />
        <div className="text-4xl font-medium leading-[54px] text-nowrap mt-[30px]">Login to your account</div>
        <div className="text-[#717171] text-lg leading-[27px] font-medium">Welcome Back to PDFRender.com!</div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Button color="transparent" href="google.com" className="rounded border-1 border-solid border-gray-300">
            <div className="flex gap-4 justify-center">
              <Image src={"/assets/icons/google.ico"} height={24} width={24} alt="Google Icon" />
              <div>Google</div>
            </div>
          </Button>
          <Button color="transparent" href="apple.com" className="rounded border-1 border-solid border-gray-300">
            <div className="flex gap-4 justify-center">
              <Image src={"/assets/icons/apple.ico"} height={24} width={24} alt="Apple Icon" />
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
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="maxim@gmail.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-500" />
              <span>Remember for 30 days</span>
            </label>
            <a href="/auth/forget-password" className="text-blue-600 font-medium hover:underline">
              Forgot password
            </a>
          </div>
          <Button color="blue" href="#" className="w-full lg:!max-w-none text-white mt-4">Log in</Button>
          <div className="w-full mt-12 text-base text-center">
            Don"t you have an account?
            <a href="/auth/signup" className="text-blue-600 font-medium hover:underline">
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
