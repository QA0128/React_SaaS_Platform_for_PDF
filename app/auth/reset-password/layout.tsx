import AuthLayout from "@/app/layouts/auth";
import React from "react";

interface ResetPasswordProps{
  children: React.ReactNode
}

export default function ResetPasswordLayout({children}: ResetPasswordProps) {
  return (
    <div className="h-full">
      {children}
    </div>
  );  
}