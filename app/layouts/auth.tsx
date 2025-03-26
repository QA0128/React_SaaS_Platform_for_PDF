import Image from 'next/image';
import { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="p-4 bg-white">
      <div className="lg:grid lg:grid-cols-2" style={{height: `calc(100vh - 32px)`}}>
        <div className='h-full'>{children}</div>
        <div className="relative w-auto h-auto">
          <Image src={'/assets/auth/background.png'} alt="Auth Background" fill className="object-cover rounded-l-[32px]" />
        </div>
      </div>
    </div>
  );
}
