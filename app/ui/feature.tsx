import Image from 'next/image';
import React from 'react';

type FeatureProps = {
  ico: string;
  title: string;
  content: string;
}

export const Feature: React.FC<FeatureProps> = ({ico, title, content}) => {
  return (
    <div className='flex gap-4 md:flex-col lg:flex-col'>
      <div className='w-[48px] h-[48px] flex justify-center items-center border-2 border-solid border-gray-300 rounded-lg'>
        <Image 
          src={`/assets/features/`+ico+'.ico'}
          width={24}
          height={24}
          alt={title}
        />
      </div>
      <div className='flex flex-col'>
        <div className='text-[#101828] text-[20px] font-semibold'>
          {title}
        </div>
        <div className='text-base text-[#475467] font-medium'>
          {content}
        </div>
      </div>
    </div>
  );
}