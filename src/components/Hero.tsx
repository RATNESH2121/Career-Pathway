
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gray-100 h-screen">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="/lovable-uploads/d00a44b8-ab54-42de-94bf-d229948f1acd.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom h-full flex items-center">
        <div className="max-w-2xl text-white pt-20">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 leading-tight">
            Global Leader in<br />
            Fast Citizenship<br />
            and Residency Programs
          </h1>
          <div className="mt-8">
            <h2 className="text-4xl font-light italic" style={{ fontFamily: 'Great Vibes, cursive' }}>
              Your Future First
            </h2>
          </div>
        </div>
        
        {/* Floating Passports Grid */}
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-3 gap-6">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="w-32 h-44 shadow-lg transition-transform hover:scale-105 duration-300">
                <img 
                  src={`/passport-${index + 1}.jpg`}
                  alt={`Passport ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2 bg-primary/90 p-2">
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <span className="writing-mode-vertical">ENQUIRE</span>
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <span className="writing-mode-vertical">CALL</span>
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <span className="writing-mode-vertical">WHATSAPP</span>
        </Button>
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <span className="writing-mode-vertical">TELEGRAM</span>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
