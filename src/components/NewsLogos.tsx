
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const NewsLogos = () => {
  const logos = [
    { name: "Zawya", url: "https://via.placeholder.com/150x50?text=ZAWYA" },
    { name: "Forbes", url: "https://via.placeholder.com/150x50?text=FORBES" },
    { name: "Business", url: "https://via.placeholder.com/150x50?text=BUSINESS" },
    { name: "Daily News", url: "https://via.placeholder.com/150x50?text=DAILYNEWS" },
    { name: "FT", url: "https://via.placeholder.com/150x50?text=FT" }
  ];

  return (
    <section className="py-8 border-t border-b border-gray-200 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-4 text-gray-500 text-sm uppercase">
          CITIZENSHIP INVEST IN THE NEWS
        </div>
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
                  <img src={logo.url} alt={logo.name} className="max-h-8 grayscale opacity-70 hover:opacity-100 transition-opacity" />
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
