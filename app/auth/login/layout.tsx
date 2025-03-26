import React from "react";

interface LoginElementProps{
  children: React.ReactNode
}

export default function LoginLayout({children}: LoginElementProps) {
  return (
    <div className="h-full">
      {children}
    </div>
  );  
}