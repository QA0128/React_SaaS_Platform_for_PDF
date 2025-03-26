import Image from "next/image";
import Subscription from "../ui/subscription";

export default function PlanPage() {
  return (
    <div className="container max-w-[1200px] lg:w-[1200px] m-auto mt-[50px]">
      <div className="justify-items-center">
        <Image src="/assets/images/logo.png" width={184} height={32} alt="Company Logo" />
      </div>
      <div className="text-4xl leading-[54px] font-medium text-center mt-3">Choose Your Plan to Get Started</div>
      <div className="subscription mt-4">
        <Subscription></Subscription>
      </div>
      <div className="w-full mt-8 text-[14px] text-[#4D4D4D] text-center">
        Already have an account?&nbsp;
        <a href="/auth/login" className="text-blue-600 font-medium hover:underline">
          Log in
        </a>
      </div>
    </div>
  );
}
