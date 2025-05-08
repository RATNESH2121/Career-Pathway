import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section 
      className="py-12 bg-gray-100 bg-cover bg-center relative" 
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1516321165247-7aae89e26d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
      }}
      
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-secondary mb-6 text-white">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p className="mb-6 text-sm text-gray-200">
            Stay updated with the latest citizenship and residency program changes and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white text-gray-800"
            />
            <Button className="bg-secondary hover:bg-secondary/90 text-white uppercase tracking-wide">
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;