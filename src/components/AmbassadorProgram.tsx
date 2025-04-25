
import { Button } from "@/components/ui/button";

const AmbassadorProgram = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
          alt="Business Professional"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container-custom relative z-20">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="heading-secondary mb-6">OUR AMBASSADOR'S PROGRAM</h2>
          <p className="mb-8 text-sm">
            Join our network of global ambassadors and earn competitive commissions while helping clients achieve their citizenship goals.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-white uppercase tracking-wide">
            BECOME OUR AMBASSADOR
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorProgram;
