import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <div>
      <section id="about" className="h-screen bg-blue-700" style={{ backgroundImage: "url('/mainbackground.jpg')" }}>
        <div className=" p-8 pt-56 pl-28 w-96 h-52 ">
          <h1 className="font-bold text-5xl text-white">
            CONNECTED PRODUCTS
          </h1>
          <br />
          <p className="text-white bg-blue-600 p-4 text-xl">Enhancing consumers' lives with technology</p>
        </div>
      </section >
      <section id="services" className="h-screen bg-green-500">
        two
      </section>
      <section id="products" className="h-screen bg-yellow-400">
        <Carousel>
          <CarouselContent>
            <CarouselPrevious />
            <CarouselItem className="bg-lime-700 w-full h-screen">one</CarouselItem>
            <CarouselItem className="bg-gray-700 w-full h-screen">two</CarouselItem>
            <CarouselItem className="bg-orange-500 w-full h-screen">three</CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
          <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
        </Carousel>
      </section>
      <section id="contact" className="h-screen bg-red-600">
        <Footer />
      </section>
    </div >
  );
}
