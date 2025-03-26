'use client';

import { useRouter } from "next/navigation";
import type { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  color: 'black' | 'blue' | 'transparent';
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({color, children, href, className}) => {
  
  const router = useRouter();

  const colors = {
    black: `bg-black`,
    blue: `bg-[#0076CE]`,
    transparent: `bg-transparent`
  }

  const handleClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(`${colors[color]} lg:max-w-[240px] rounded-lg hover:bg-blue-400 transition tracking-[0.5px] gap-5 items-center justify-center py-3 mb-3 lg:mb-0`, className)}
    >
      <div className="px-3">{children}</div>
    </button>
  );
}

export default Button;