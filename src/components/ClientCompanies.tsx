
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ClientCompanies = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12 text-primary">OUR CLIENT COMPANIES</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <CarouselItem key={item} className="basis-1/4 md:basis-1/5 pl-6">
                <div className="flex items-center justify-center h-16">
                  <img 
                    src={`https://via.placeholder.com/150x80?text=Company${item}`}
                    alt={`Client Company ${item}`}
                    className="max-h-12 grayscale opacity-70 hover:opacity-100 transition-opacity"
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

export default ClientCompanies;
