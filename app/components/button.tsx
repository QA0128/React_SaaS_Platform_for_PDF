'use client';

import { useRouter } from "next/navigation";
import type { FC } from "react";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  href: string;
  className?: string;
}

const Button: FC<ButtonProps> = ({text, href, className}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
    console.log(`${text}`);
  }

  return (
    <button
      onClick={handleClick}
      className={clsx("text-white rounded-lg bg-[#0076CE] hover:bg-blue-400 transition tracking-[0.5px]", className)}
    >
      <div className="px-3">{text}</div>
    </button>
  );
}

export default Button;