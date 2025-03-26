import { ReactNode } from "react";
import Header from "../layouts/header";
import Footer from "../layouts/footer";

export default function DashboardLayout({children}:{children: ReactNode}) {
  return (
    <div className="w-full m-auto">
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
}