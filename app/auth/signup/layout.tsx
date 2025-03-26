import React from "react";

interface SignUpElementProps{
  children: React.ReactNode
}

export default function SignUpLayout({children}: SignUpElementProps) {
  return (
    <div className="h-full">
      {children}
    </div>
  );  
}