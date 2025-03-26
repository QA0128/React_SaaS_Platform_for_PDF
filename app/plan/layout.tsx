import { ReactNode } from "react";

export default function PlanLayout({children}:{children: ReactNode}) {
  return (
    <div className="w-full bg-white h-100vh m-auto">
      <main>{children}</main>
    </div>
  );
}