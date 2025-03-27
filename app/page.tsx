import Image from 'next/image';
import Header from './layouts/header';
import Footer from './layouts/footer';
import { Upload } from './ui/upload';
import { Feature } from './ui/feature';
import Button from './components/button';
import ToggleButton from './components/switch';
import Subscription from './ui/subscription';
import Testimonials from './ui/testimonial';
import Faqs from './ui/faq';

export default function Home() {
  return (
    <div className="container max-w-none bg-white m-auto">
      <Header />
      <main className="lg:min-h-[350px] bg-[#F2F4F8] relative overflow-hidden">
        <section className="banner m-auto max-w-[1280px] ">
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
            <div className="hidden relative lg:block z-2 content-container lg:col-span-5 flex h-[551px] w-full m-auto">
              <div className='absolute p-[5px] #595959 rounded-lg h-[551px] w-[725px]  bg-gradient-to-r from-[#595959] to-[#F2F4F8]'>
                <div className='absolute rounded-lg w-full h-[540] top-[5px] bg-gradient-to-r from-transparent to-[#F2F4F8]'></div>
                <img
                  src={`/assets/landing/dashboard.png`}
                  className="h-[540px] hidden lg:block object-cover overflow-visible object-left-top"
                  alt="Dashboard Screenshot"
                />
              </div>
            </div>
          </div>
          <div className="z-2 relative text-sm font-semibold bg-[#F2F4F8]">
            <div className="content-container m-auto text-[#21272A] mt-3">We&apos;re trusted by:</div>
            <div className="content-container m-auto text-[#697077]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-4 pb-4 lg:pb-[80px]">
                <div className="outlink m-2 w-full flex min-w-[200px]">
                  <Image src={`/assets/icons/shells.ico`} width={32} height={32} alt="Shells Icon" className='h-[32px] w-[32px]'/>
                  <div className="text-2xl flex-grow text-center font-bold">SHELLS</div>
                </div>
                <div className="outlink m-2 w-full flex min-w-[200px]">
                  <Image src={`/assets/icons/smartfinder.ico`} width={32} height={32} alt="SmartFinder Icon" className='h-[32px] w-[32px]'/>
                  <div className="text-2xl flex-grow text-center font-bold">SmartFinder</div>
                </div>
                <div className="outlink m-2 w-full flex min-w-[200px]">
                  <Image src={`/assets/icons/zoomerr.ico`} width={32} height={32} alt="Zoomerr Icon" className='h-[32px] w-[32px]'/>
                  <div className="text-2xl flex-grow text-center font-bold">Zoomerr</div>
                </div>
                <div className="outlink m-2 w-full flex min-w-[200px]">
                  <Image
                    src={`/assets/icons/artvenue.ico`}
                    width={56}
                    height={32}
                    alt="ArtVenue Icon"
                    className="w-[56px] h-[32px]"
                  />
                  <div className="text-2xl flex-grow text-center font-bold">ArtVenue</div>
                </div>
                <div className="outlink m-2 w-full flex min-w-[200px]">
                  <Image src={`/assets/icons/kontrastr.ico`} width={24} height={30} alt="Kontrastr Icon" className='w-[32px] h-[32px]'/>
                  <div className="text-2xl flex-grow text-center font-bold">kontrastr</div>
                </div>
                <div className="outlink m-2 w-full flex min-w-[200px]">
                  <Image src={`/assets/icons/wavesMarathon.ico`} width={24} height={30} alt="Waves Marathon Icon" className='w-[32px] h-[32px]'/>
                  <div className="text-lg flex-grow text-center font-medium">
                    <span className="font-bold">WAVES</span>MARATHON
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="upload-section relative bg-white z-2 px-8 lg:pt-[96px] lg:pb-[48px]">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center w-full text-[42px] font-extrabold py-6 lg:text-nowrap">
              These are Companies Using our Product
            </div>
            <div className="text-lg text-center">
              Upload your HTML file or paste raw text, and download a perfectly formatted PDF in seconds.
            </div>
          </div>
          <div className="max-w-[1040px] text-center mx-auto">
            <Upload />
          </div>
        </section>
        <section className="features bg-white">
          <div className="content-container m-auto pt-12 gap-3">
            <div className="feature-help">
              <div className="text-[#001D6C] text-[20px] font-bold text-center">FEATURES</div>
              <div className="text-[42px] font-bold text-[#21272A] text-center">Why Choose PDFRender.com?</div>
              <div className="max-w-[768px] text-center m-auto text-[20px] font-medium pt-4">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users.
                Trusted by over 4,000 startups.
              </div>
            </div>
            <div className="mx-8 mt-8 py-12">
              <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-auto">
                <Feature
                  ico="fast"
                  title="Fast & Reliable Conversions"
                  content="Convert HTML to PDF in seconds with consistent, high-quality results every time."
                />
                <Feature
                  ico="flexible"
                  title="Flexible Input Options"
                  content="Upload HTML files or paste raw text-choose the method that fits your workflow."
                />
                <Feature
                  ico="easy"
                  title="Easy Automation Integration"
                  content="Connect with Zapier, Make, N8N, and Workato for automated PDF generation."
                />
                <Feature
                  ico="secure"
                  title="Secure & Private Processing"
                  content="We process your data securely without storing it-privacy is always a priority."
                />
                <Feature
                  ico="scalable"
                  title="Scalable for Any Business"
                  content="Perfect for individuals or enterprises-scale as our PDF generation needs grow."
                />
                <Feature
                  ico="simple"
                  title="Simple API Management"
                  content="Manage API keys easily and generate PDFs programmatically with clear documentation."
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white">
          <div className="content-container m-auto pt-8 pb-12">
            <div className="text-[42px] font-bold text-center py-4">How it works</div>
            <div className="max-w-[1170px] m-auto pt-8 flex pl-8 md:pl-0 md:block gap-4 md:gap-1 justify-center items-center">
              <div className="w-[8px] h-[326px] md:my-6 flex items-center md:w-1128/1200 md:h-[8px] border-solid border-4 border-[#003366] relative rounded-full">
                <div className="size-[32px] bg-[#0076CE] rounded-full border-1 border-white absolute top-[-16px] left-[-16px] md:left-[-8px]"></div>
                <div className="size-[32px] bg-[#0076CE] rounded-full border-1 border-white absolute top-0.95/2 md:top-[-16px] left-[-16px] md:left-1/2"></div>
                <div className="size-[32px] bg-[#0076CE] rounded-full border-1 border-white absolute top-95/100 md:top-[-16px] left-[-16px] md:left-98/100"></div>
              </div>
              <div className="grid grid-row md:flex justify-between">
                <div className="w-full h-[163px] opt-step ml-8 md:ml-0 md:w-[278px] content-center relative">
                  <div
                    style={{ fontFamily: 'Gilory' }}
                    className="absolute text-9xl text-[#E7E7E7] font-bold top-[17px] right-[10px] z-1"
                  >
                    1
                  </div>
                  <div className="step-name relative z-2">Connect Your App</div>
                  <div className="step-content relative z-2">Zapier, Make, N8N, Workato, or API</div>
                </div>
                <div className="w-full h-[163px] opt-step ml-8 md:ml-0 md:w-[278px] content-center relative">
                  <div
                    style={{ fontFamily: 'Gilory' }}
                    className="absolute text-9xl text-[#E7E7E7] font-bold top-[17px] right-[10px] z-1"
                  >
                    2
                  </div>
                  <div className="step-name relative z-2">Configure PDF Settings</div>
                  <div className="step-content relative z-2">Customize layout and data</div>
                </div>
                <div className="w-full h-[163px] opt-step ml-8 md:ml-0 md:w-[278px] content-center relative">
                  <div
                    style={{ fontFamily: 'Gilory' }}
                    className="absolute text-9xl text-[#E7E7E7] font-bold top-[17px] right-[10px] z-1"
                  >
                    3
                  </div>
                  <div className="step-name relative z-2">Automate & Generate</div>
                  <div className="step-content relative z-2">Receive PDFs instantly</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="integrations bg-[#F2F4F8]">
          <div className="content-container m-auto gap-3 py-[48px]">
            <div className="integration-help">
              <div className="text-[#001D6C] text-[20px] font-extrabold text-center tracking-[1px]">Integrations</div>
              <div className="text-[42px] font-bold text-[#21272A] text-center">Native Integrations Section</div>
              <div className="max-w-[768px] text-center m-auto text-[20px] font-medium pt-4">
                Connect your tools, connect your teams. With over 200 apps already available in our directly, your
                team&apos;s favorite tools are just a click away.
              </div>
            </div>
            <div className="">
              <div className="flex gap-4 m-auto justify-center py-[40px]">
                <Image src="/assets/integrations/zapier.png" width={80} height={80} alt="Zapier Banner" />
                <Image src="/assets/integrations/make.png" width={178} height={80} alt="Make Banner" />
                <Image src="/assets/integrations/n8n.png" width={250} height={80} alt="N8N Banner" />
                <Image src="/assets/integrations/w.png" width={80} height={80} alt="W Banner" />
              </div>
            </div>
            <div className="pb-8 flex justify-center">
              <Button color="blue" href="/integrations" className="text-white py-2 px-3">
                All integrations
              </Button>
            </div>
          </div>
        </section>
        <section className="subscription bg-white">
          <div className="content-container m-auto gap-3 py-[48px]">
            <div className="integration-help">
              <div className="text-[#001D6C] text-[20px] font-extrabold text-center tracking-[1px]">PRICING</div>
              <div className="text-[42px] font-bold text-[#21272A] text-center">Flexible Plans for Every Need</div>
              <div className="max-w-[768px] text-center m-auto text-[20px] font-medium pt-4">
                Choose a plan that fits your usage, or start with a free trial.
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 m-auto pt-8">
              <div>Yearly</div>
              <ToggleButton></ToggleButton>
              <div>Monthly</div>
            </div>
            <div className="content-container mt-12">
              <Subscription></Subscription>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="content-container m-auto gap-3 py-[48px]">
            <div className="integration-help">
              <div className="text-[#001D6C] text-[20px] font-extrabold text-center tracking-[1px]">TESTIMONIALS</div>
              <div className="text-[42px] font-[900] text-[#21272A] text-center">Loved by Business Worldwide</div>
            </div>
          </div>
          <div className="content-container m-auto my-8 pb-8">
            <Testimonials></Testimonials>
          </div>
        </section>
        <section className="automate bg-white">
          <div className="content-container m-auto py-[80px] gap-[48px] text-center">
            <div className="title font-bold text-[42px]">Ready to Automate PDF Generation?</div>
            <div className="text-[19px] leading-[140%] my-8">
              Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in eros scelerisque sed.
              Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis, pulvinar.
              Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
            </div>
            <div className="flex justify-center gap-6 mt-12">
              <Button color="blue" href="/" className="text-white lg:!max-w-none p-4">
                <div className="font-medium text-xl px-4">Start Your Free Trial Today</div>
              </Button>
              <Button
                color="transparent"
                href="/"
                className="border-1 lg:!max-w-none border-[#0076CE] text-[#0076CE] p-4"
              >
                <div className="px-4">Explore Pricing Options</div>
              </Button>
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
      </main>
      <Footer />
    </div>
  );
}
