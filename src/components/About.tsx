
const About = () => {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-secondary text-primary uppercase mb-4">
            ABOUT<br/>CITIZENSHIP<br/>INVEST
          </h2>
          <p className="text-gray-600 mb-8 text-sm">
            Citizenship Invest is one of the region's leading Government Approved Citizenship and Residency by Investment solutions provider. We offer reliable, simplified tailored service and advice to our clients worldwide. Our teams of experts are from all over the globe with more than 25+ years of combined experience. We are able to assist clients worldwide secure their future with second citizenship and permanent residency.
          </p>
          <div className="uppercase font-semibold text-gray-600 text-sm tracking-wider">
            MULTIPLE GOVERNMENTS AUTHORIZED FIRM
          </div>
        </div>
      </div>
      
      {/* Background Text Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 z-0">
        <div className="text-[300px] font-bold text-gray-800 absolute -left-20 top-0">CIT</div>
        <div className="text-[300px] font-bold text-gray-800 absolute right-0 top-0">IZE</div>
        <div className="text-[300px] font-bold text-gray-800 absolute -right-20 bottom-0">NSH</div>
      </div>
    </section>
  );
};

export default About;
