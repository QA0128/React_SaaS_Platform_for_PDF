import Image from "next/image";
import Button from "../components/button";
import { DollarSign, Search, EllipsisVertical } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="h-full">
      <div className="flex items-center">
        <div className="grow">
          <p className="font-semibold text-xl leading-[30px]">Welcome Jhon Doe!</p>
          <p className="font-normal text-base leading-[24px] mt-2">Here's quick overview of your account status.</p>
        </div>
        <Button color="blue" href="/" className="text-white text-sm h-[44px]">
          Generate PDF
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="h-[163px] p-5 bg-white border-1 border-solid border-[#EAECF0] rounded-lg">
          <div className="p-2 w-fit rounded-lg bg-[#E9F1FF]">
            <DollarSign color="#0076CE" size={20} />
          </div>
          <div className="text-lg font-normal text-[#595959] leading-[27px] pt-5 pb-3">Credits Remaining</div>
          <div className="text-2xl leading-[36px] font-semibold">300</div>
        </div>
        <div className="h-[163px] p-5 bg-white border-1 border-solid border-[#EAECF0] rounded-lg">
          <div className="p-2 w-fit rounded-lg bg-[#E9F1FF]">
            <DollarSign color="#0076CE" size={20} />
          </div>
          <div className="text-lg font-normal text-[#595959] leading-[27px] pt-5 pb-3">Credits Used</div>
          <div className="text-2xl leading-[36px] font-semibold">200</div>
        </div>
      </div>
      <div className="my-4 p-5 rounded-lg border-1 border-solid border-[#EAECF0] bg-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">Available Integrations</div>
            <div className="text-sm font-normal leading-[20px] mt-2">
              Supercharge your workflow and connect the tool you use every day.
            </div>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-64 bg-white">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-4 py-4">
            <div>
              <Image src="/assets/integrations/zapier.png" width={48} height={48} alt="Zapier Company"/>
            </div>
            <div className="grow">
              <div className="font-semibold leading-[24px] text-[#344054]">Zapier</div>
              <div className="text-[#475467] text-sm leading-[20px] font-normal">Build custom automations and integrations with other apps.</div>
            </div>
            <div className="font-semibold text-sm leading-[20px] mr-2">Learn more</div>
          </div>
          <hr className="border-[#EAECF0]"/>
          <div className="flex items-center gap-4 py-4">
            <div>
              <Image src="/assets/integrations/make.png" width={48} height={48} alt="Zapier Company"/>
            </div>
            <div className="grow">
              <div className="font-semibold leading-[24px] text-[#344054]">Make</div>
              <div className="text-[#475467] text-sm leading-[20px] font-normal">Streamline software projects, sprints, tasks, and bug tracking.</div>
            </div>
            <div className="font-semibold text-sm leading-[20px] mr-2">Learn more</div>
          </div>
          <hr className="border-[#EAECF0]"/>
          <div className="flex items-center gap-4 py-4">
            <div>
              <Image src="/assets/integrations/n8n.png" width={48} height={48} alt="N8N Company"/>
            </div>
            <div className="grow">
              <div className="font-semibold leading-[24px] text-[#344054]">N8N</div>
              <div className="text-[#475467] text-sm leading-[20px] font-normal">Link pull requests and automate workflows.</div>
            </div>
            <div className="font-semibold text-sm leading-[20px] mr-2">Learn more</div>
          </div>
          <hr className="border-[#EAECF0]"/>
          <div className="flex items-center gap-4 py-4">
            <div>
              <Image src="/assets/integrations/w.png" width={48} height={48} alt="Workato Company"/>
            </div>
            <div className="grow">
              <div className="font-semibold leading-[24px] text-[#344054]">Workato</div>
              <div className="text-[#475467] text-sm leading-[20px] font-normal">Embed file previews in projects.</div>
            </div>
            <div className="font-semibold text-sm leading-[20px] mr-2">Learn more</div>
          </div>
        </div>
      </div>
      <div className="my-4 p-5 rounded-lg border-1 border-solid border-[#EAECF0] bg-white">
        <div className="flex justify-between">
          <div className="font-semibold text-xl leading-[30px]">Subscription</div>
          <EllipsisVertical />
        </div>
        <div className="text-[#027A48] font-medium text-[12px] w-fit leading-[18px] py-1 px-2 mt-2 rounded-50% bg-[#ECFDF3]">
          Enterprise
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between">
            <div className="font-medium text-base text-[#4D5464] leading-[24px]">Renewable frequency</div>
            <div className="text-[#667085] text-sm font-normal leading-[20px]">Monthly</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium text-base text-[#4D5464] leading-[24px]">Features included</div>
            <div className="text-[#667085] text-sm font-normal leading-[20px]">10GB Storage, 30 invoices/month</div>
          </div>
          <div className="flex justify-between">
            <div className="font-medium text-base text-[#4D5464] leading-[24px]">Billing Cycle Info</div>
            <div className="text-[#667085] text-sm font-normal leading-[20px]">Next renewal: Nov 25, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}
