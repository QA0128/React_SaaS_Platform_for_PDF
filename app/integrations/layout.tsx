import { ReactNode } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

export default function DashboardLayout({children}:{children: ReactNode}) {
  return (
    <div className="w-full max-w-[1440px] m-auto">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}