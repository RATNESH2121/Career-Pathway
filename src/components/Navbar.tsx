
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Phone, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="/" className="mr-8">
              <img 
                src="/lovable-uploads/ccd42351-bd67-4248-a711-195c65dd53e5.png" 
                alt="CitizenshipInvest Logo" 
                className="h-12"
              />
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#about" className="text-gray-700 hover:text-secondary transition-colors text-sm font-medium">ABOUT</a>
              <a href="#programs" className="text-gray-700 hover:text-secondary transition-colors text-sm font-medium">CITIZENSHIP</a>
              <a href="#residence" className="text-gray-700 hover:text-secondary transition-colors text-sm font-medium">RESIDENCE</a>
              <a href="#blog" className="text-gray-700 hover:text-secondary transition-colors text-sm font-medium">BLOG</a>
              <a href="#faqs" className="text-gray-700 hover:text-secondary transition-colors text-sm font-medium">FAQS</a>
              <a href="#contact" className="text-gray-700 hover:text-secondary transition-colors text-sm font-medium">CONTACT</a>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700 text-sm">
              <Phone className="mr-1 h-4 w-4" /> +971 4 430 1717
            </Button>
            <Button variant="ghost" className="text-gray-700">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="text-gray-700">
              EN <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
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
              <a href="#about" className="text-gray-700 hover:text-secondary transition-colors">ABOUT</a>
              <a href="#programs" className="text-gray-700 hover:text-secondary transition-colors">CITIZENSHIP</a>
              <a href="#residence" className="text-gray-700 hover:text-secondary transition-colors">RESIDENCE</a>
              <a href="#blog" className="text-gray-700 hover:text-secondary transition-colors">BLOG</a>
              <a href="#faqs" className="text-gray-700 hover:text-secondary transition-colors">FAQS</a>
              <a href="#contact" className="text-gray-700 hover:text-secondary transition-colors">CONTACT</a>
              <Button variant="ghost" className="justify-start text-gray-700">
                <Phone className="mr-1 h-4 w-4" /> +971 4 430 1717
              </Button>
              <Button variant="ghost" className="justify-start text-gray-700">
                EN <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
