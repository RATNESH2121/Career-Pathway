import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const NewsLogos = () => {
  const logos = [
    { name: "Zawya", url: "./public/newsl2.png", size: "max-h-36" },
    { name: "Forbes", url: "./public/newsl1.png", size: "max-h-8" },
    { name: "Business", url: "./public/newssl55.png", size: "max-h-36" },
    { name: "Daily News", url: "./public/newsl7.png", size: "max-h-36" },
    { name: "FT", url: "./public/newsl8.png", size: "max-h-36" }
  ];

  return (
    <section className="py-8 border-t border-b border-gray-200 bg-gray-50">
      <div className="container-custom">
        {/* Title with lines */}
        <div className="flex items-center justify-center mb-4">
          <div className="hidden md:block flex-1 h-px bg-gray-300 mr-6" />
          <h2 className="text-1xl md:text-2xl font-semibold tracking-widest text-gray-700 text-center uppercase">
            CITIZENSHIP INVEST IN THE NEWS
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gray-300 ml-6" />
        </div>
  
        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-2">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/5 pl-6">
                <div className="flex items-center justify-center h-16">
                  <img 
                    src={logo.url} 
                    alt={logo.name} 
                    className={`${logo.size} grayscale opacity-70 hover:opacity-100 transition-opacity`} 
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
  
};

export default NewsLogos;
