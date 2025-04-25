
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-gray-100 h-[600px]">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Luxury Building"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-custom h-full flex items-center">
        <div className="max-w-xl text-white pt-20">
          <h1 className="text-4xl lg:text-5xl font-light mb-4">
            Global Leader in<br />
            Fast Citizenship<br />
            and Residency Programs
          </h1>
          <div className="mt-6">
            <img 
              src="https://www.citizenshipinvest.com/storage/logo-tagline.png" 
              alt="Signature"
              className="h-20" 
            />
          </div>
        </div>
        
        {/* Passports Display on Right Side */}
        <div className="hidden lg:block absolute right-10 top-1/2 transform -translate-y-1/2 z-30">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="w-24 h-32 bg-blue-800 shadow-lg rounded-sm opacity-90 border-2 border-white/30">
                <img 
                  src={`https://via.placeholder.com/100x140?text=Passport${index+1}`}
                  alt={`Passport ${index+1}`}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
