import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section id="about" className="h-screen " style={{ backgroundImage: "url('/mainbackground.jpg')" }}>
        <div className="relative bg-blue-500 bg-opacity-50 w-1/2 h-96 top-28 left-8">
          <div className="m-12">
            <h1 className="text-white font-medium text-6xl p-8 transition-colors duration-500  hover:bg-cyan-500  bg-gradient-to-r ">
              CONNECTED PRODUCTS
            </h1>
          </div>
          <br />
          <div>
            <h2 className="text-white size-64 p-4 pl-8 text-2xl font-bold">
              Enhancing consumers' lives with technology
            </h2>
          </div>
        </div>
      </section >
      <section id="services" className="h-screen  flex justify-start items-center">
        <div className="overflow-hidden relative inline-block cursor-pointer shadow-lg">
          <Image src="/bannerone.webp" alt="Banner One" className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width={600} height={200} />
        </div>
        <div className="w-auto p-16 bg-white shadow-lg rounded-lg">
          <h1 className="font-sans text-2xl">Business, meet tech.</h1>
          <br />
          <p className="font-sans">World Economic Forum Annual Meeting in Davos</p>
          <br />
          <button className="flex p-2 items-center font-sans border-black border-2 w-40 rounded-3xl">
            <span className="mr-2">Read more</span>
            <ArrowRight />
          </button>
        </div>
      </section>
      <section id="services" className="h-screen  flex justify-center items-center">
        <Image src="/banner2.webp" alt="Banner Two" className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width={600} height={200} />
        <div className="w-auto p-16 bg-white shadow-2xl rounded-lg">
          <p className="font-sans">Capgemini Research Institute</p>
          <br />
          <h1 className="font-sans text-2xl">Climate tech research</h1>
          <br />
          <Link className="" href={"/"}>
            <p className="text-sm font-sans text-cyan-500">CAPGEMINI RESEARCH INSTITUTE</p>
          </Link>
        </div>
      </section>
      <section id="services" className="h-screen  flex justify-end items-center">
        <div className="w-auto h-96 p-16 bg-blue-600 shadow-2xl rounded-lg">
          <p className="font-sans">--- Capgemini Research Institute</p>
          <br />
          <h1 className="font-sans text-2xl">CMO playbook Gen AI</h1>
          <br />
          <Link className="bottom-3" href={"/"}>
            <p className="text-sm font-sans text-cyan-500">CAPGEMINI RESEARCH INSTITUTE</p>
          </Link>
        </div>
        <div className="w-auto p-16 bg-white shadow-2xl rounded-lg">
          <p className="font-sans">--- Report</p>
          <br />
          <h1 className="font-sans text-2xl">Creative and generative AI</h1>
          <br />
          <Link className="" href={"/"}>
            <p className="text-sm font-sans text-cyan-500">CAPGEMINI RESEARCH INSTITUTE</p>
          </Link>
        </div>
        <Image src="/banner3.webp" alt="Banner Three" className="mx-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" width={600} height={200} />
      </section>
      <section id="products" className="h-screen ">
        <Carousel>
          <CarouselContent>
            <CarouselPrevious />
            <CarouselItem className=" w-full h-screen relative overflow-hidden">
              <Image src={"/Sanofi-client-story-web-banner.webp"} width={1500} height={500} alt="lab" />
              <div className="absolute bottom-20 left-32 w-96 h-96 bg-white p-6">
                <h1 className="text-lg font-semibold">
                  Acceleating medicine R&D cycles
                </h1>
                <br />
                <p>
                  Capgemini and Sanofi set a new industry standard by accelerating clinical trials with the Act4Patients program
                </p>
                <button className="rounded-xl border-black border-2 bg-white w-64 h-12 mt-32 ml-16 flex items-center justify-center">
                  <span className="mr-2">Read more</span>
                  <ArrowRight />
                </button>
              </div>
            </CarouselItem>
            <CarouselItem className=" w-full h-screen relative overflow-hidden">
              <Image className="pl-20 pr-20" src={"/Barts-client-story-web-banner.jpg"} width={1800} height={900} alt="nurse" />
              <div className="absolute bottom-20 left-32 w-96 h-96 bg-white p-6">
                <h1 className="text-lg font-semibold">
                  Barts Health achieves stability and security with public cloud
                </h1>
                <br />
                <button className="rounded-xl border-black border-2 bg-white w-64 h-12 mt-32 ml-16 flex items-center justify-center">
                  <span className="mr-2">Read more</span>
                  <ArrowRight />
                </button>
              </div>
            </CarouselItem>
            <CarouselItem className=" w-full h-screen relative overflow-hidden">
              <Image src={"/Workathlete_key_visual.webp"} width={1500} height={500} alt="athlete" />
              <div className="absolute bottom-20 left-32 w-96 h-96 bg-white p-6">
                <h1 className="text-lg font-semibold">
                  Digital technology helps Workathlete better serve workers
                </h1>
                <p>
                  In partnership with Capgemini, workathlete revamps its worker health program with a new application, consolidated processes, and smart devices
                </p>
                <br />
                <button className="rounded-xl border-black border-2 bg-white w-64 h-12 mt-12 ml-16 flex items-center justify-center">
                  <span className="mr-2">Read more</span>
                  <ArrowRight />
                </button>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div>
            <CarouselPrevious className="absolute w-16 h-16 bg-blue-300 top-full left-1/2 transform -translate-y-1/2 -translate-x-1/2" size={"icon"} />
            <CarouselNext className="absolute w-16 h-16 bg-blue-300 top-full left-1/2 transform -translate-y-1/2 translate-x-1/2" size={"icon"} />
          </div>
        </Carousel>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section id="report" className="h-screen ">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="w-full h-screen relative overflow-hidden">
              <div className="flex">
                <div className="w-1/2">
                  <Image src={"/sectionthree.webp"} width={1500} height={500} alt="Slide 1" />
                </div>
                <div className="w-1/2 bg-purple-950">
                  <h1 className="font-semibold text-white text-6xl p-4">Integrated Annual Report 2022</h1>
                  <br />
                  <button className="bottom-3 ml-12 mt-12 rounded-lg border-2 border-white w-44 h-12 text-white">Read more</button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full h-screen relative overflow-hidden">
              <div className="flex">
                <div className="w-1/2">
                  <Image src={"/sectionthreetwo.webp"} width={1500} height={500} alt="Slide 1" />
                </div>
                <div className="w-1/2 bg-purple-950">
                  <h1 className="font-semibold text-white text-6xl p-4">OUR PASSION FOR SPORT</h1>
                  <br />
                  <p className="text-white p-8 font-sans">
                    Bringing expertise and passion for innovation and technology to World Rugby, the Ryder Cup and motorsport.
                  </p>
                  <button className="bottom-3 ml-12 mt-12 rounded-lg border-2 border-white w-44 h-12 text-white">Discover more</button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full h-screen relative overflow-hidden">
              <div className="flex">
                <div className="w-1/2">
                  <Image src={"/sectionthreethree.jpg"} width={500} height={500} alt="Slide 3" layout="responsive" objectFit="cover" />
                </div>
                <div className="w-1/2 bg-purple-950">
                  <h1 className="font-semibold text-white text-6xl p-4">
                    Capgemini Invent
                  </h1>
                  <br />
                  <p className="m-4 text-white text-l">Our powerhouse of innovation, design and transformation.</p>
                  <Image className="m-4 mt-4" src={'/logo-invent-white.svg'} width={250} height={250} alt="logo-invent-white" />
                  <button className="bottom-3 ml-12 mt-12 rounded-lg border-2 border-white w-44 h-12 text-white">Read more</button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full h-screen relative overflow-hidden">
              <div className="flex">
                <div className="w-1/2">
                  <Image src={"/sectionthreefour.jpg"} width={1500} height={500} alt="Slide 2" />
                </div>
                <div className="w-1/2 bg-purple-950">
                  <h1 className="font-semibold text-white text-6xl p-4">
                    Capgemini Engineering
                  </h1>
                  <br />
                  <p className="m-4 text-white text-l">Helping the world&apos;s largest innovators engineer the products and services of tomorrow</p>
                  <Image className="m-4 mt-4" src={'/CapgeminiEngineering.svg'} width={250} height={250} alt="logo-invent-white" />
                  <button className="bottom-3 ml-12 mt-12 rounded-lg border-2 border-white w-44 h-12 text-white">Find out more</button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="w-full h-screen relative overflow-hidden">
              <div className="flex">
                <div className="w-1/2">
                  <Image src={"/sectointhreefive.webp"} width={1500} height={500} alt="Slide 1" />
                </div>
                <div className="w-1/2 bg-purple-950">
                  <h1 className="font-semibold text-white text-6xl p-4">Capgemini Research Institute</h1>
                  <br />
                  <p className="m-4 text-white text-l">Our number 1 global think-tank</p>
                  <button className="bottom-3 ml-12 mt-12 rounded-lg border-2 border-white w-44 h-12 text-white">Read more</button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div>
            <CarouselPrevious className="absolute w-16 h-16 bg-blue-300 top-full left-1/2 transform -translate-y-1/2 -translate-x-1/2" size={"icon"} />
            <CarouselNext className="absolute w-16 h-16 bg-blue-300 top-full left-1/2 transform -translate-y-1/2 translate-x-1/2" size={"icon"} />
          </div>
        </Carousel>
      </section>
    </div >
  );
}
