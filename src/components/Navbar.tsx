
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-montserrat font-bold text-primary">
              Citizenship<span className="text-secondary">Invest</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#programs" className="text-gray-700 hover:text-secondary transition-colors">Programs</a>
            <a href="#countries" className="text-gray-700 hover:text-secondary transition-colors">Countries</a>
            <a href="#about" className="text-gray-700 hover:text-secondary transition-colors">About Us</a>
            <a href="#contact" className="text-gray-700 hover:text-secondary transition-colors">Contact</a>
            <Button variant="ghost" className="text-gray-700">
              EN <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
            <Button className="bg-secondary hover:bg-secondary/90">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <a href="#programs" className="text-gray-700 hover:text-secondary transition-colors">Programs</a>
              <a href="#countries" className="text-gray-700 hover:text-secondary transition-colors">Countries</a>
              <a href="#about" className="text-gray-700 hover:text-secondary transition-colors">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-secondary transition-colors">Contact</a>
              <Button variant="ghost" className="justify-start text-gray-700">
                EN <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <Button className="bg-secondary hover:bg-secondary/90">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
