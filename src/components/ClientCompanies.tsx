import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ClientCompanies = () => {
  // Array of logo objects with URL and size
  const companyLogos = [
    { url: "/public/cc1 bg.png", size: "max-h-20" }, // Reduced from max-h-20
    { url: "/public/cl1.png", size: "max-h-20" },
    { url: "/public/cll2.png", size: "max-h-16" },
    { url: "/public/cl3.png", size: "max-h-14" },
    { url: "/public/cc1 bg.png", size: "max-h-10" },
  ];

  // Container size for all logos (consistent height for alignment)
  const logoContainerSize = "h-16"; // Reduced from h-24

  return (
    <section className="py-8 bg-primary w-full">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-8 text-white">OUR CLIENT COMPANIES</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-2">
            {companyLogos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/4 md:basis-1/5 pl-6">
                <div className={`flex items-center justify-center ${logoContainerSize}`}>
                  <img
                    src={logo.url}
                    alt={`Client Company ${index + 1}`}
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

export default ClientCompanies;