
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gray-100 h-screen">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="/lovable-uploads/d00a44b8-ab54-42de-94bf-d229948f1acd.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom h-full flex items-center justify-between">
        <div className="max-w-2xl text-white pt-20">
          <h1 className="text-5xl lg:text-[3.5rem] font-light mb-6 leading-tight tracking-wide">
            Global Leader in<br />
            Fast Citizenship<br />
            and Residency Programs
          </h1>
          <div className="mt-12">
            <h2 className="text-4xl font-light italic" style={{ fontFamily: 'Great Vibes, cursive' }}>
              Your Future First
            </h2>
          </div>
        </div>
        
        {/* Floating Passports Grid */}
        <div className="hidden lg:block absolute right-[5%] top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-4 gap-4 max-w-[800px]">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="w-[150px] h-[100px] shadow-lg transition-transform hover:scale-105 duration-300">
                <img 
                  src={`/passport-${index + 1}.jpg`}
                  alt={`Passport ${index + 1}`}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-0">
        <Button variant="ghost" className="bg-[#1A1F2C]/90 text-white hover:bg-[#1A1F2C] w-16 h-16 rounded-none">
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#1A1F2C]/90 text-white hover:bg-[#1A1F2C] w-16 h-16 rounded-none">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#1A1F2C]/90 text-white hover:bg-[#1A1F2C] w-16 h-16 rounded-none">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#1A1F2C]/90 text-white hover:bg-[#1A1F2C] w-16 h-16 rounded-none">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
