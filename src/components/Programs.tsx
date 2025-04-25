
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90" />
        <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center border-4 border-white">
            <img src={icon} alt={`${title} icon`} className="w-10 h-10" />
          </div>
        </div>
      </div>
      
      <CardContent className="pt-10 pb-6 px-6">
        <h3 className="text-2xl font-semibold text-center mb-2">{title}</h3>
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
        </div>
        
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
      image: "https://images.unsplash.com/photo-1562171910-e196b111c8bf",
      icon: "/icons/dominica.png",
      minInvestment: "Minimum contribution USD 200,000",
      processingTime: "The average processing time to obtain Dominica citizenship is 4 months.",
      visaFreeTravel: "Instant visa-free to 142 countries, including the Schengen States, Singapore, Hong Kong, and China",
      familyDependents: "Spouse, children up to 30 years old, parents/grandparents above the age of 65 years."
    },
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
        <div className="flex justify-center gap-4 mb-12">
          <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg">
            CITIZENSHIP PROGRAMS
          </Button>
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-12 py-6 text-lg">
            RESIDENCY PROGRAMS
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
