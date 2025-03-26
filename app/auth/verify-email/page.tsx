'use client';

import Button from '@/app/components/button';

export default function VerifyEmailPage() {

  return (
    <div className='h-full'>
      <div className="w-85% lg:w-[396px] justify-self-center align-self-center flex flex-col mt-[180px]">
        <div className="text-4xl font-medium leading-[54px] md:text-nowrap lg:md:text-nowrap mt-[30px] self-center">Verify Your Email Address</div>
        <div className="text-[#717171] leading-[27px] font-medium text-center text-base mt-4">
          “We’ve sent a verification link to olivia@estatepro.com. Please check your inbox and click the link to complete your registration.”
        </div>
        <div className="text-[#717171] leading-[27px] font-medium text-center text-base mt-4">
          Resend in 10 sec
        </div>
        <form className="space-y-4 mt-8">

          <Button color='blue' href='#' className='w-full lg:!max-w-none text-white mt-4'>Resend</Button>

        </form>
        <div className='text-center w-full mt-8 text-base'>
          Go to &nbsp;
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
