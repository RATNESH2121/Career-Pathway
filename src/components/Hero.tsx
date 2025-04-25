
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Luxury Building"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom min-h-screen flex items-center">
        <div className="max-w-2xl text-white pt-20">
          <h1 className="heading-primary mb-6 animate-fade-in">
            Your Gateway to Global Citizenship
          </h1>
          <p className="text-lg mb-8 animate-fade-in opacity-90">
            Secure your future with citizenship and residency by investment programs. Expert guidance through every step of your journey.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button className="bg-secondary hover:bg-secondary/90 text-lg py-6 px-8">
              Explore Programs
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
