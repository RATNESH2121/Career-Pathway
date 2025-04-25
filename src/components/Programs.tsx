
import { Button } from "@/components/ui/button";

const ProgramCard = ({ title, description, category }: { title: string; description: string; category: string }) => {
  return (
    <div className="bg-white shadow-md p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-sm text-gray-600 mb-6">{description}</p>
      <div className="mt-auto">
        <div className="text-xs text-gray-500 mb-2">Program Type: <span className="font-semibold">{category}</span></div>
        <button className="text-xs border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors uppercase tracking-wide">Learn More</button>
      </div>
    </div>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "MALTA",
      description: "Malta offers one of the strongest passports in the world, providing visa-free access to 186 countries.",
      category: "Citizenship"
    },
    {
      title: "DOMINICA",
      description: "Obtain citizenship in as little as 3-4 months with one of the most affordable citizenship programs available.",
      category: "Citizenship"
    },
    {
      title: "SAINT LUCIA",
      description: "Become a citizen of Saint Lucia in less than 4 months with their streamlined citizenship by investment program.",
      category: "Citizenship"
    }
  ];

  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-4 text-primary">OUR PROGRAMS</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm">
          Citizenship Invest offers a range of citizenship by investment and residency programs designed to meet the specific needs of investors and their families seeking global mobility solutions. Our government-approved programs provide a streamlined path to citizenship or residency.
        </p>

        <div className="flex flex-wrap gap-8 justify-center mb-10">
          <Button className="bg-primary hover:bg-primary/90 text-white border border-primary px-8">
            CITIZENSHIP PROGRAMS
          </Button>
          <Button variant="outline" className="text-primary border-primary hover:bg-primary/5 px-8">
            RESIDENCY PROGRAMS
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-10">
            VIEW ALL PROGRAMS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
