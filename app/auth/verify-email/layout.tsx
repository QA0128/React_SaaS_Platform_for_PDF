import React from "react";

interface VerifyEmailProps{
  children: React.ReactNode
}

export default function VerifyEmailLayout({children}: VerifyEmailProps) {
  return (
    <div>
      {children}
    </div>
  );  
}