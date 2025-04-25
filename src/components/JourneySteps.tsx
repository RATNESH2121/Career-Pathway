
const JourneyStep = ({ number, title }: { number: number; title: string }) => {
  return (
    <div className="flex items-start space-x-4 mb-8">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs">
        {number}
      </div>
      <p className="text-sm">{title}</p>
    </div>
  );
};

const JourneySteps = () => {
  const steps = [
    "WE DISCUSS YOUR CITIZENSHIP INVESTMENT",
    "WE PREPARE YOU FOR THE CITIZENSHIP PROCESS",
    "YOUR DUE DILIGENCE BY THE FOREIGN AUTHORITY",
    "WE SECURE YOUR PASSPORT FOR YOU"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12 text-primary">YOUR JOURNEY WITH CITIZENSHIP INVEST</h2>
        
        <div className="max-w-2xl mx-auto">
          {steps.map((step, index) => (
            <JourneyStep key={index} number={index + 1} title={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
