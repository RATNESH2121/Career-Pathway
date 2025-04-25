
const BenefitCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="p-6 text-center">
      <h3 className="text-lg font-semibold mb-3 text-primary">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const SecondPassport = () => {
  const benefits = [
    {
      title: "GLOBAL MOBILITY",
      description: "Travel visa-free to over 140 countries with a second passport, opening doors to international business and personal opportunities."
    },
    {
      title: "WEALTH CARE",
      description: "Protect your assets and create tax optimization strategies with citizenship in a stable, well-regulated jurisdiction."
    },
    {
      title: "QUALITY HEALTHCARE",
      description: "Access world-class medical facilities and healthcare systems for you and your family with your new citizenship."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-4 text-primary">WHY A SECOND PASSPORT</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-sm">
          The advantages of having a second passport go far beyond just travel convenience. It provides security, stability, and opens doors to global opportunities for you and your family. A second passport is a crucial asset in today's uncertain world.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondPassport;
