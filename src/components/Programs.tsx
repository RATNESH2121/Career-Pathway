import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProgramCard = ({ 
  title, 
  image, 
  icon,
  minInvestment, 
  processingTime,
  visaFreeTravel,
  familyDependents
}: { 
  title: string;
  image: string;
  icon: string;
  minInvestment: string;
  processingTime: string;
  visaFreeTravel: string;
  familyDependents: string;
}) => {
  return (
    <Card className="overflow-hidden bg-white group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10" />
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white">
            <img src={icon} alt={`${title} icon`} className="w-14 h-14" />
          </div>
        </div>
      </div>
      
      <CardContent className="pt-10 pb-6 px-6">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">{title}</h3>

<div className="space-y-4 text-sm">
  <div>
    <strong className="text-gray-800">Investment Amount</strong> - {minInvestment}
  </div>
  <div>
    <strong className="text-gray-800">Processing time</strong> - {processingTime}
  </div>
  <div>
    <strong className="text-gray-800">Visa free travel</strong> - {visaFreeTravel}
  </div>
  <div>
    <strong className="text-gray-800">Family dependents</strong> - {familyDependents}
  </div>
  <div>
    <strong className="text-gray-800">Fee</strong> - TBD
  </div>
</div>
        {/* <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-primary text-center mb-6 text-sm">{minInvestment}</p>
        
        <div className="space-y-4 text-sm">
          <div>
            <strong className="text-primary">Processing time</strong> - {processingTime}
          </div>
          <div>
            <strong className="text-primary">Visa free travel</strong> - {visaFreeTravel}
          </div>
          <div>
            <strong className="text-primary">Family dependents</strong> - {familyDependents}
          </div>
        </div> */}
        
        <div className="mt-6 text-center">
          <Button 
            variant="secondary" 
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700"
          >
            LEARN MORE
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "TURKEY",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      icon: "/icons/turkey.png",
      minInvestment: "Minimum Investment USD 400,000",
      processingTime: "The average processing time to obtain Turkey citizenship is 2-5 months.",
      visaFreeTravel: "Turkey passport holders have visa-free entry to 111 countries, including Japan, South Korea, and Singapore.",
      familyDependents: "Spouses and Children under 18 years old."
    },

    {
      title: "DOMINICA",
      image: "/public/pr1.jpg", // Local path to the main image
      icon: "/icons/dominica-icon.png", // Local path to the icon
      minInvestment: "Minimum contribution USD 200,000",
      processingTime: "The average processing time to obtain Dominica citizenship is 4 months.",
      visaFreeTravel: "Instant visa-free to 142 countries, including the Schengen States, Singapore, Hong Kong, and China",
      familyDependents: "Spouse, children up to 30 years old, parents/grandparents above the age of 65 years."
    },
    // {
    //   title: "DOMINICA",
    //   image: "https://images.unsplash.com/photo-1562171910-e196b111c8bf",
    //   icon: "/icons/dominica.png",
    //   minInvestment: "Minimum contribution USD 200,000",
    //   processingTime: "The average processing time to obtain Dominica citizenship is 4 months.",
    //   visaFreeTravel: "Instant visa-free to 142 countries, including the Schengen States, Singapore, Hong Kong, and China",
    //   familyDependents: "Spouse, children up to 30 years old, parents/grandparents above the age of 65 years."
    // },
    {
      title: "SAINT LUCIA",
      image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc",
      icon: "/icons/saint-lucia.png",
      minInvestment: "Minimum contribution USD 240,000",
      processingTime: "The average processing time to obtain Saint Lucia citizenship is 3 - 4 months.",
      visaFreeTravel: "Instant visa-free travel to 146 countries, including the Schengen countries, United Kingdom, Singapore, and Hong Kong.",
      familyDependents: "Spouses, Children up to 30 years old, elderly parents over the age of 55 years, and siblings under 18 years"
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container-custom">
        {/* OUR PROGRAMS Heading */}
        <div className="relative text-center mb-12">
          {/* Dotted Pattern */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 -z-10"
            width="700"
            height="120"
            fill="none"
            viewBox="0 0 700 120"
            aria-hidden="true"
          >
            <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="3" fill="#000" />
            </pattern>
            <rect width="700" height="120" fill="url(#dots)" opacity="0.05" />
          </svg>
          <div className="flex items-center justify-center gap-4">
       <hr className="flex-1 border-t-2 border-gray-300" />
  <h2 className="text-4xl md:text-5xl font-bold uppercase text-gray-800 tracking-widest" style={{ letterSpacing: '0.2em' }}>
    OUR PROGRAMS
  </h2>
  <hr className="flex-1 border-t-2 border-gray-300" />
</div>
          <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto text-sm md:text-base line-clamp-3">
            Pathway citizenship has a leading position in the niche industry of fast citizenship and residency by investment. These programs do not require living in the country to obtain the citizenship or residency and they allow dual citizenship and nationality. No specific qualifications are expected from applicants other having a clean criminal record and making an investment.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg">
            CITIZENSHIP PROGRAMS
          </Button>
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-12 py-6 text-lg">
            RESIDENCY PROGRAMS
          </Button>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        {/* View All Programs Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-12 py-6 text-lg">
            VIEW ALL PROGRAMS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;