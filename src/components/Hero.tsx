
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-800"></div>

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
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2">
          <div className="grid grid-cols-4 gap-4 max-w-[800px]">
            <div className="w-[150px] h-[100px] shadow-lg transition-transform hover:scale-105">
              <img src="/lovable-uploads/241a28a6-c637-4bc5-8364-b4446f29d02b.png" alt="Passports Grid" className="w-full h-full object-contain" />
            </div>
            {/* Add more passport placeholders as needed */}
          </div>
        </div>
      </div>

      {/* Contact buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col">
        <Button variant="ghost" className="bg-[#4A235A] text-white hover:bg-[#4A235A]/90 w-16 h-16 rounded-none flex items-center justify-center">
          <Mail className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#4A235A] text-white hover:bg-[#4A235A]/90 w-16 h-16 rounded-none flex items-center justify-center">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#4A235A] text-white hover:bg-[#4A235A]/90 w-16 h-16 rounded-none flex items-center justify-center">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#4A235A] text-white hover:bg-[#4A235A]/90 w-16 h-16 rounded-none flex items-center justify-center">
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;
