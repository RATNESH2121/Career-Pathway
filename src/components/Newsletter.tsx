
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-secondary mb-6 text-primary">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <p className="mb-6 text-sm text-gray-600">
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
