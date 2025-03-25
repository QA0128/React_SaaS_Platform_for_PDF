import Image from "next/image";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

export default function Home() {
  return (
    <div className='container max-w-[1440px] bg-white m-auto'>
      <Header />
      <Footer />
    </div>
  );
}
