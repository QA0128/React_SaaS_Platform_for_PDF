'use client';

import Image from 'next/image';
import Button from '../components/button';
import React, { useState } from 'react';
import Faqs from '../ui/faq';

type IntegrationType = 'Zapier' | 'Make' | 'Workato' | 'N8N';

export default function DashboardPage() {
  const [integrateType, setIntegrateType] = useState<IntegrationType>('Zapier');

  return (
    <div className="overflow-hidden w-full">
      <section className="banner m-auto bg-[#F2F4F8]">
        <div className="relative z-1 lg:grid grid-cols-12 gap-4">
          <Image
            src={'/assets/landing/Rows.png'}
            width={1296}
            height={972}
            alt="Rows Background"
            className="hidden lg:block absolute top-[-64px] left-[-160px]"
          />
          <div className="hidden lg:block absolute top-[-64px] left-[-160px] w-[1296px] h-[400px] lg:h-[972px] bg-[radial-gradient(circle,_transparent_0%,_#F2F4F8_100%)]"></div>
          <div className="z-2 content-container relative lg:h-[711px] lg:col-span-7 flex flex-col justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:w-[660px] mt-6 text-center lg:text-start font-bold mx-auto">
              Convert HTML to PDF in Seconds with Seamless Integrations
            </div>
            <div className="text-base lg:text-lg lg:w-[660px] mx-auto mt-5">
              Automate PDF generation with ease through Zapier, Make, N8N and Workato.
            </div>
            <div className="button-group lg:flex gap-4 lg:w-[660px] mx-auto mt-8">
              <Button href="/" color="blue" className="text-white w-full px-7">
                <div className="flex gap-4 justify-center items-center">
                  <div>Start Free Trial</div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.586 6.15692L6.636 2.20692C6.45384 2.01832 6.35305 1.76571 6.35533 1.50352C6.3576 1.24132 6.46277 0.990508 6.64818 0.8051C6.83359 0.619692 7.0844 0.514523 7.3466 0.512245C7.6088 0.509966 7.8614 0.610761 8.05 0.792919L13.707 6.44992C13.8002 6.54257 13.8741 6.65273 13.9246 6.77407C13.9751 6.8954 14.001 7.02551 14.001 7.15692C14.001 7.28833 13.9751 7.41844 13.9246 7.53977C13.8741 7.66111 13.8002 7.77127 13.707 7.86392L8.05 13.5209C7.95775 13.6164 7.84741 13.6926 7.7254 13.745C7.6034 13.7974 7.47218 13.825 7.3394 13.8262C7.20662 13.8273 7.07494 13.802 6.95205 13.7517C6.82915 13.7015 6.7175 13.6272 6.62361 13.5333C6.52971 13.4394 6.45546 13.3278 6.40518 13.2049C6.3549 13.082 6.3296 12.9503 6.33075 12.8175C6.3319 12.6847 6.35949 12.5535 6.4119 12.4315C6.46431 12.3095 6.54049 12.1992 6.636 12.1069L10.586 8.15692H1C0.734784 8.15692 0.48043 8.05156 0.292893 7.86403C0.105357 7.67649 0 7.42214 0 7.15692C0 6.8917 0.105357 6.63735 0.292893 6.44981C0.48043 6.26228 0.734784 6.15692 1 6.15692H10.586Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Button>
              <Button
                href="/"
                color="transparent"
                className="hover:bg-blue-500 w-full lg:max-w-[240px] text-base font-semibold hover:text-white py-4 px-7 flex border border-blue-500 hover:border-transparent"
              >
                <div className="text-[#0076CE]">See Pricing Plans</div>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block z-2 content-container lg:col-span-5 flex h-[512px] w-full m-auto">
            <img
              src={`/assets/landing/dashboard.png`}
              className="border-solid border-3 border-gray-700 rounded-l-xl border-r-0 h-[512px] hidden lg:block object-cover object-left-top"
              alt="Dashboard Screenshot"
            />
          </div>
        </div>
      </section>
      <section className="integrate-zapier relative bg-white z-2">
        <div className="content-container m-auto pt-[60px]">
          <div className="flex">
            <Image src={'/assets/icons/home-line.ico'} width={20} height={20} className="h-[20px]" alt="Home Line" />
            <div> &nbsp; &nbsp; &nbsp; &gt; &nbsp; &nbsp; &nbsp; Integrations &nbsp; &nbsp; &nbsp;</div>
            <div>
              &gt; &nbsp; &nbsp; &nbsp;
              <span className="">{integrateType}</span>
            </div>
          </div>
          <div className="flex justify-center">
            <nav className="flex overflow-x-auto w-full h-[56px] p-[6px] mx-4 lg:mx-0 lg:my-8 items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-[#EAECF0] rounded-xl dark:bg-gray-500/20 grid grid-cols-4">
              {/* Zapier Tab */}
              <button
                role="tab"
                type="button"
                onClick={() => setIntegrateType('Zapier')}
                aria-selected={integrateType === 'Zapier'}
                className={`flex whitespace-nowrap items-center justify-center h-11 px-5 font-semibold rounded-lg outline-none focus:ring-inset text-[#667085]
                ${
                  integrateType === 'Zapier'
                    ? 'text-gray-950 text-lg shadow bg-white dark:text-white dark:bg-yellow-600'
                    : 'hover:text-red-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400'
                }`}
              >
                Zapier
              </button>

              {/* Make Tab */}
              <button
                role="tab"
                type="button"
                onClick={() => setIntegrateType('Make')}
                aria-selected={integrateType === 'Make'}
                className={`flex whitespace-nowrap items-center justify-center h-11 px-5 font-semibold rounded-lg outline-none focus:ring-inset text-[#667085]
                ${
                  integrateType === 'Make'
                    ? 'text-gray-950 text-lg shadow bg-white dark:text-white dark:bg-yellow-600'
                    : 'hover:text-red-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400'
                }`}
              >
                Make
              </button>

              {/* Workato Tab */}
              <button
                role="tab"
                type="button"
                onClick={() => setIntegrateType('Workato')}
                aria-selected={integrateType === 'Workato'}
                className={`flex whitespace-nowrap items-center justify-center h-11 px-5 font-semibold rounded-lg outline-none focus:ring-inset text-[#667085]
                ${
                  integrateType === 'Workato'
                    ? 'text-gray-950 text-lg shadow bg-white dark:text-white dark:bg-yellow-600'
                    : 'hover:text-red-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400'
                }`}
              >
                Workato
              </button>
              {/* N8N Tab */}
              <button
                role="tab"
                type="button"
                onClick={() => setIntegrateType('N8N')}
                aria-selected={integrateType === 'N8N'}
                className={`flex whitespace-nowrap items-center justify-center h-11 px-5 font-semibold rounded-lg outline-none focus:ring-inset text-[#667085]
                ${
                  integrateType === 'N8N'
                    ? 'text-gray-950 text-lg shadow bg-white dark:text-white dark:bg-yellow-600'
                    : 'hover:text-red-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400'
                }`}
              >
                N8N
              </button>
            </nav>
          </div>
        </div>
        <div className="integrate-content content-container justify-self-center">
          <div className="text-[42px] font-bold">Integrating With {integrateType}</div>
          <div className="text-2xl leading-[30px] font-medium">
            Connect PDFRender with thousands of apps using Zapier's no-code platform.
          </div>
          <div className="text-[20px]">
            <p className="pt-8 pb-4">
              Zapier is a powerful automation platform that allows you to connect different applications and automate
              workflows without the need for coding. By integrating PDFRender with Zapier, you can streamline the
              process of converting HTML to PDF, making it an essential tool for businesses looking to enhance
              efficiency and reduce manual tasks. Whether you're automating document creation, report generation, or any
              PDF-related task, PDFRender's integration with Zapier simplifies the process.
            </p>
            <p className="py-4">
              With PDFRender, creating, updating, and downloading PDFs becomes effortless. This integration is designed
              to save time, reduce errors, and ensure consistent output. By automating these tasks, teams can focus on
              more strategic activities rather than manual conversions. This guide will walk you through the key
              features, available modules, and step-by-step instructions to integrate PDFRender with your Zapier
              workflows effectively.
            </p>
            <p className="py-4">
              This page also includes example templates to help you get started quickly, FAQs to address common
              concerns, and guidance on leveraging PDFRender's features to their fullest potential. Whether you're a
              beginner or an experienced user, this guide will ensure that your integration process is smooth and
              successful.
            </p>
          </div>
        </div>
      </section>
      <section className="m-auto bg-white pt-12">
        <div className="lg:grid grid-cols-2 gap-4">
          <div className="relative lg:h-[600px] flex flex-col justify-center">
            <div className="pl-[80px]">
              <div className="rounded-full w-fit bg-[#E4F1FA] border-8 rounded-full border-[#F1F9FF]">
                <Image
                  src={'/assets/icons/alert-circle.ico'}
                  height={24}
                  width={24}
                  alt="ALERT CIRCLE"
                  className="m-2"
                />
              </div>
              <div className="text-3xl font-semibold leading-[38px] my-4">Available Modules</div>
              <div className="mb-4">
                <Button color="transparent" href="/" className="border-1 border-gray-300">
                  Convert HTML to PDF
                </Button>
              </div>
              <div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Log in to your Zapier account</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Click "Create Zap" and select PDFRender as the trigger.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Choose the desired action (e.g., "Convert HTML to PDF").</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Connect your PDFRender API key.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Set up input parameters (upload .html file or paste raw text).</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Test the Zap and activate.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block flex h-[512px] w-full m-auto pl-[80px]">
            <img
              src={`/assets/dashboards/zapier.png`}
              className="border-solid border-3 border-gray-700 rounded-l-xl border-r-0 h-[512px] hidden lg:block object-cover object-left-top"
              alt="Dashboard Screenshot"
            />
          </div>
        </div>
      </section>
      <section className="m-auto bg-white pt-12">
        <div className="lg:grid grid-cols-2 gap-4">
          <div className="hidden lg:block flex h-[512px] w-full m-auto">
            <img
              src={`/assets/dashboards/make.png`}
              className="border-solid border-3 border-gray-700 rounded-r-xl border-l-0 h-[512px] hidden lg:block object-cover"
              alt="Dashboard Screenshot"
              style={{ objectPosition: '-149px -57px' }}
            />
          </div>
          <div className="relative lg:h-[600px] flex flex-col justify-center">
            <div className="pl-[80px]">
              <div className="rounded-full w-fit bg-[#E4F1FA] border-8 rounded-full border-[#F1F9FF]">
                <Image
                  src={'/assets/icons/alert-circle.ico'}
                  height={24}
                  width={24}
                  alt="ALERT CIRCLE"
                  className="m-2"
                />
              </div>
              <div className="text-3xl font-semibold leading-[38px] my-4">Integrating with Make</div>
              <div className='pb-8'>
                Use Make's visual builder to automate complex PDF generation workflows.
              </div>
              <div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Log into Make and create a new scenario.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Add PDFRender as a module.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Select the action (e.g., "Convert HTML to PDF").</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Provide your API key and input data.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Run the scenario and review the output.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="m-auto bg-white pt-12">
        <div className="lg:grid grid-cols-2 gap-4">
          <div className="relative lg:h-[600px] flex flex-col justify-center">
            <div className="pl-[80px]">
              <div className="rounded-full w-fit bg-[#E4F1FA] border-8 rounded-full border-[#F1F9FF]">
                <Image
                  src={'/assets/icons/alert-circle.ico'}
                  height={24}
                  width={24}
                  alt="ALERT CIRCLE"
                  className="m-2"
                />
              </div>
              <div className="text-3xl font-semibold leading-[38px] my-4">Integrating with N8N</div>
              <div className='mb-8'>Create custom automation workflows using N8N's self-hosted solution.</div>
              <div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Install and configure N8N.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Create a new workflow and add PDFRender as a node.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Set API credentials and define input parameters.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Test the workflow and execute.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block flex h-[512px] w-full m-auto pl-[80px]">
            <img
              src={`/assets/dashboards/n8n.png`}
              className="border-solid border-3 border-gray-700 rounded-l-xl border-r-0 h-[512px] hidden lg:block object-cover object-left-top"
              alt="Dashboard Screenshot"
            />
          </div>
        </div>
      </section>
      <section className="m-auto bg-white pt-12 pb-12">
        <div className="lg:grid grid-cols-2 gap-4">
          <div className="hidden lg:block flex h-[512px] w-full m-auto">
            <img
              src={`/assets/dashboards/workato.png`}
              className="border-solid border-3 border-gray-700 rounded-r-xl border-l-0 h-[512px] hidden lg:block object-cover"
              alt="Dashboard Screenshot"
            />
          </div>
          <div className="relative lg:h-[600px] flex flex-col justify-center">
            <div className="pl-[80px]">
              <div className="rounded-full w-fit bg-[#E4F1FA] border-8 rounded-full border-[#F1F9FF]">
                <Image
                  src={'/assets/icons/alert-circle.ico'}
                  height={24}
                  width={24}
                  alt="ALERT CIRCLE"
                  className="m-2"
                />
              </div>
              <div className="text-3xl font-semibold leading-[38px] my-4">Integrating with Workato</div>
              <div className='pb-8'>
                Leverage Workato for advanced, enterprise-grade automation workflows.
              </div>
              <div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Log into Workato and create a new recipe.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Add PDFRender as an action step.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Configure API credentials and input parameters.</div>
                </div>
                <div className="flex gap-4 mb-4 items-center">
                  <Image src={'/assets/icons/check-circle.ico'} height={28} width={28} alt="Check Circle Icon" />
                  <div>Test the recipe and activate.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq p-20 gap-16 bg-[#F2F4F8]">
        <div className="content-container m-auto gap-3">
          <div className="integration-help">
            <div className="text-[#001D6C] text-[20px] font-extrabold text-center tracking-[1px]">FAQS</div>
            <div className="text-[42px] font-bold text-[#21272A] text-center">Frequently Asked Questions</div>
          </div>
          <div>
            <Faqs></Faqs>
          </div>
        </div>
      </section>
      <section className="p-20 w-full bg-white">
        <div className="text-[42px] font-bold leading-[110%] justify-self-center">Need Help with Integrations?</div>
        <div className="flex gap-4 justify-center mt-8">
          <Button color="blue" href="/" className="px-5 py-4 text-white">
            Contact Support
          </Button>
          <Button
            color="transparent"
            href="/"
            className="px-5 py-4 font-semibold text-[#0076CE] border-1 border-[#0076CE] lg:max-w-none"
          >
            Explore More Templates
          </Button>
        </div>
      </section>
    </div>
  );
}
