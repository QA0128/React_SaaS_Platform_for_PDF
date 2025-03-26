import AuthLayout from "@/app/layouts/auth";
import React from "react";

interface ForgetPasswordProps{
  children: React.ReactNode
}

export default function ForgetPasswordLayout({children}: ForgetPasswordProps) {
  return (
    <div>
      {children}
    </div>
  );  
}