import React from 'react';
import Button from '../components/button';
import Image from 'next/image';

const Subscription = () => {

  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='border border-gray-300 rounded-xl max-w-[412px] p-4 m-auto w-full'>
        <div className='subscription-type text-[20px] text-[#6B7280] leading-(150%)'> Essential</div>
        <div className='subscription-rate text-[42px] font-medium flex items-center gap-4'> $19 <span className='text-lg leading-(150%) text-[#6B7280]'>/month</span></div>
        <div className=''>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>500 PDF conversion/month</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>No watermarks</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Priority API access</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Custom PDF settings</div></div>
          <div className='item'><Image src="/assets/subscription/grayscale-vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature line-through decoration-[#6B7280]'>Email & Chat support</div></div>
          <div className='item'><Image src="/assets/subscription/grayscale-vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature line-through decoration-[#6B7280]'>Advanced PDF customization</div></div>
          <div className='item'><Image src="/assets/subscription/grayscale-vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature line-through decoration-[#6B7280]'>Premium support</div></div>
          <div className='item'><Image src="/assets/subscription/grayscale-vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature line-through decoration-[#6B7280]'>Dedicated API resources</div></div>
        </div>
        <Button className='text-white w-[-webkit-fill-available] lg:max-w-none !mt-4 !mb-2' color='blue' href='/'> Choose plan </Button>
        <Button className='text-white w-[-webkit-fill-available] lg:max-w-none border-[#0076CE] border-1 !text-[#0076CE]' color='transparent' href='/'> Start free trial </Button>
      </div>
      <div className='border border-gray-300 rounded-lg max-w-[412px] p-4 m-auto w-full'>
        <div className='subscription-type text-[20px] leading-(150%) text-[#6B7280]'> Pro</div>
        <div className='subscription-rate text-[42px] font-medium flex items-center gap-4'> $49 <span className='text-lg leading-(150%) text-[#6B7280]'>/month</span></div>
        <div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>500 PDF conversion/month</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>No watermarks</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Priority API access</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Custom PDF settings</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Email & Chat support</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Advanced PDF customization</div></div>
          <div className='item'><Image src="/assets/subscription/grayscale-vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature line-through decoration-[#6B7280]'>Premium support</div></div>
          <div className='item'><Image src="/assets/subscription/grayscale-vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature line-through decoration-[#6B7280]'>Dedicated API resources</div></div>
        </div>
        <Button className='text-white w-[-webkit-fill-available] lg:max-w-none !mt-4 !mb-2' color='blue' href='/'> Choose plan </Button>
        <Button className='text-white w-[-webkit-fill-available] lg:max-w-none border-[#0076CE] border-1 !text-[#0076CE]' color='transparent' href='/'> Start free trial </Button>
      </div>
      <div className='border border-gray-300 rounded-lg max-w-[412px] p-4 m-auto w-full'>
        <div className='subscription-type text-[20px] leading-(150%) text-[#6B7280]'> Enterprise</div>
        <div className='subscription-rate text-[42px] font-medium flex items-center gap-4'> $149 <span className='text-lg leading-(150%) text-[#6B7280]'>/month</span></div>
        <div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>500 PDF conversion/month</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>No watermarks</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Priority API access</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Custom PDF settings</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Email & Chat support</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Advanced PDF customization</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Premium support</div></div>
          <div className='item'><Image src="/assets/subscription/vector.png" alt="Checked" width={15} height={15}/><div className='px-2 item-feature'>Dedicated API resources</div></div>
        </div>
        <Button className='text-white w-[-webkit-fill-available] lg:max-w-none !mt-4 !mb-2' color='blue' href='/'> Choose plan </Button>
        <Button className='text-white w-[-webkit-fill-available] lg:max-w-none border-[#0076CE] border-1 !text-[#0076CE]' color='transparent' href='/'> Start free trial </Button>
      </div>
    </div>
  );

}

export default Subscription;