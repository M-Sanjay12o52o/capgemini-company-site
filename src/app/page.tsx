import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="about" className="h-screen " style={{ backgroundImage: "url('/mainbackground.jpg')" }}>
        <div className=" p-8 pt-56 pl-28 w-96 h-52 ">
          <h1 className="font-bold text-5xl text-white">
            CONNECTED PRODUCTS
          </h1>
          <br />
          <p className="text-white  p-4 text-xl">Enhancing consumers lives with technology</p>
        </div>
      </section >
      <section id="services" className="h-screen  flex justify-center items-center">
        <div className="flex">
          <img src="/bannerone.webp" alt="Banner One" className="mx-4" style={{ maxWidth: '300px' }} />
          <img src="/banner2.webp" alt="Banner Two" className="mx-4" style={{ maxWidth: '300px' }} />
          <img src="/banner3.webp" alt="Banner Three" className="mx-4" style={{ maxWidth: '300px' }} />
        </div>
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
      <section id="contact" className="h-screen ">
        <Footer />
      </section>
    </div >
  );
}
