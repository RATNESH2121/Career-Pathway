import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const ProgramCard = ({ 
  title, 
  image, 
  minInvestment, 
  processingTime,
  visaFreeTravel,
  familyDependents,
  stampWidth = "150px",
  stampHeight = "150px"
}: { 
  title: string;
  image: string;
  minInvestment: string;
  processingTime: string;
  visaFreeTravel: string;
  familyDependents: string;
  stampWidth?: string;
  stampHeight?: string;
}) => {
  const fallbackImage = "https://via.placeholder.com/400x200?text=Program+Image";

  return (
    <div className="relative" role="region" aria-label={`Program card for ${title}`}>
      <Card className="overflow-hidden bg-white rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image || fallbackImage} 
            alt={`${title} program`} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => (e.currentTarget.src = fallbackImage)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
        </div>
        
        <CardContent className="pt-6 pb-6 px-6 relative">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-4 tracking-tight">{title}</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex items-start">
              <strong className="text-gray-900 min-w-[110px] font-medium">Investment</strong>
              <span className="flex-1">{minInvestment}</span>
            </div>
            <div className="flex items-start">
              <strong className="text-gray-900 min-w-[110px] font-medium">Processing</strong>
              <span className="flex-1">{processingTime}</span>
            </div>
            <div className="flex items-start">
              <strong className="text-gray-900 min-w-[110px] font-medium">Visa-Free</strong>
              <span className="flex-1">{visaFreeTravel}</span>
            </div>
            <div className="flex items-start">
              <strong className="text-gray-900 min-w-[110px] font-medium">Dependents</strong>
              <span className="flex-1">{familyDependents}</span>
            </div>
            <div className="flex items-start">
              <strong className="text-gray-900 min-w-[110px] font-medium">Fee</strong>
              <span className="flex-1">TBD</span>
            </div>
          </div>
          {/* Money Back Guarantee Stamp */}
          <div className="absolute bottom-8 right-4 transform rotate-[-15deg] z-10">
            <img 
              src="/m1.png"
              alt="100% Money Back Guarantee"
              style={{ 
                width: '180px', 
                height: 'auto', 
                opacity: 0.6,
                filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
              }}
            />
          </div>

          <div className="text-center mt-6">
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
              aria-label={`Learn more about ${title} program`}
            >
              LEARN MORE
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "TURKEY",
      image: "./image.jpg",
      minInvestment: "Minimum Investment USD 400,000",
      processingTime: "The average processing time to obtain Turkey citizenship is 2-5 months.",
      visaFreeTravel: "Turkey passport holders have visa-free entry to 111 countries, including Japan, South Korea, and Singapore.",
      familyDependents: "Spouses and Children under 18 years old."
    },
    {
      title: "DOMINICA",
      image: "/image3.jpg",
      minInvestment: "Minimum contribution USD 200,000",
      processingTime: "The average processing time to obtain Dominica citizenship is 4 months.",
      visaFreeTravel: "Instant visa-free to 142 countries, including the Schengen States, Singapore, Hong Kong, and China",
      familyDependents: "Spouse, children up to 30 years old, parents/grandparents above the age of 65 years."
    },
    {
      title: "SAINT LUCIA",
      image: "/image4.jpg",
      minInvestment: "Minimum contribution USD 240,000",
      processingTime: "The average processing time to obtain Saint Lucia citizenship is 3 - 4 months.",
      visaFreeTravel: "Instant visa-free travel to 146 countries, including the Schengen countries, United Kingdom, Singapore, and Hong Kong.",
      familyDependents: "Spouses, Children up to 30 years old, elderly parents over 55 years, and siblings under 18 years"
    }
  ];

  return (
    <section id="programs" className="py-16 lg:py-24 bg-gray-50" aria-label="Our Programs Section">
      <div className="container-custom px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* OUR PROGRAMS Heading */}
        <div className="relative text-center mb-12">
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 -z-10"
            width="600"
            height="100"
            fill="none"
            viewBox="0 0 600 100"
            aria-hidden="true"
          >
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" fill="#000" />
            </pattern>
            <rect width="600" height="100" fill="url(#dots)" opacity="0.05" />
          </svg>
          <div className="flex items-center justify-center gap-4">
            <hr className="flex-1 border-t-2 border-gray-900/20" />
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase text-gray-900 tracking-widest" style={{ letterSpacing: '0.25em', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              OUR PROGRAMS
            </h2>
            <hr className="flex-1 border-t-2 border-gray-900/20" />
          </div>
          <p className="text-gray-800 text-center mt-4 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          Pathway Citizenship holds a top position in the specialized field of fast-track citizenship and residency through investment. These programs offer the benefit of gaining citizenship or residency without the need to live in the country and support dual nationality. Applicants are only required to have a clean criminal record and make the necessary investment—no other qualifications are needed.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-lg w-full sm:w-auto"
            aria-label="View Citizenship Programs"
          >
            CITIZENSHIP PROGRAMS
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-lg w-full sm:w-auto"
            aria-label="View Residency Programs"
          >
            RESIDENCY PROGRAMS
          </Button>
        </div>

        {/* Carousel */}
        <Carousel 
          className="w-full max-w-3xl mx-auto"
          opts={{
            align: "center",
            loop: true,
            dragFree: false,
          }}
        >
          <CarouselContent className="-ml-4">
            {programs.map((program, index) => (
              <CarouselItem key={index} className="pl-4 basis-full">
                <div className="p-4">
                  <ProgramCard 
                    {...program} 
                    stampWidth="150px"
                    stampHeight="150px"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="bg-primary/80 text-white hover:bg-primary w-12 h-12 rounded-full"
            aria-label="Previous program"
          />
          <CarouselNext 
            className="bg-primary/80 text-white hover:bg-primary w-12 h-12 rounded-full"
            aria-label="Next program"
          />
        </Carousel>

        {/* View All Programs Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-lg"
            aria-label="View all programs"
          >
            VIEW ALL PROGRAMS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;