import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

          <a href="/" className="flex items-center">
            <img
              src="/fcl1.png" // Path to your logo image
              alt="Pathway Citizenship Logo"
              className="h-10 w-auto" // Adjust size here
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold uppercase leading-none">PATHWAY</span>
              <span className="text-lg font-bold uppercase text-gray-500 leading-none">CITIZENSHIP</span>
            </div>
          </a>
          {/* <a href="./public/fcl1.png" className="flex items-center">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 font-bold text-sm mr-2">
              PC
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-bold uppercase leading-none">PATHWAY</span>
              <span className="text-lg font-bold uppercase text-gray-500 leading-none">CITIZENSHIP</span>
            </div>
          </a> */}

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <Button 
              variant="ghost" 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden lg:flex items-center lg:space-x-4">
            <a href="#about" className="uppercase text-gray-900 hover:text-gray-600 px-0.5 py-0 text-sm font-medium">
              ABOUT
            </a>
            <a href="#programs" className="uppercase text-gray-900 hover:text-gray-600 px-0.5 py-0 text-sm font-medium">
              OUR PROGRAMS
            </a>
            <a href="#compare" className="uppercase text-gray-900 hover:text-gray-600 px-0.5 py-0 text-sm font-medium">
              COMPARE
            </a>
            <a href="#news" className="uppercase text-gray-900 hover:text-gray-600 px-0.5 py-0 text-sm font-medium">
              NEWS
            </a>
            <a href="#faqs" className="uppercase text-gray-900 hover:text-gray-600 px-0.5 py-0 text-sm font-medium">
              FAQS
            </a>
            <a href="#contact" className="uppercase text-gray-900 hover:text-gray-600 px-0.5 py-0 text-sm font-medium">
              CONTACT US
            </a>
            <a href="#eligibility" className="uppercase bg-gray-900 text-white hover:bg-gray-700 px-2 py-0.5 rounded text-sm font-medium">
              CHECK ELIGIBILITY
            </a>
            {/* <span className="uppercase text-gray-900 text-sm font-medium">ENGLISH</span> */}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-2">
            <a href="#about" className="block px-0.5 py-0 uppercase text-gray-900 hover:bg-gray-100 text-sm font-medium">
              ABOUT
            </a>
            <a href="#programs" className="block px-0.5 py-0 uppercase text-gray-900 hover:bg-gray-100 text-sm font-medium">
              OUR PROGRAMS
            </a>
            <a href="#compare" className="block px-0.5 py-0 uppercase text-gray-900 hover:bg-gray-100 text-sm font-medium">
              COMPARE
            </a>
            <a href="#news" className="block px-0.5 py-0 uppercase text-gray-900 hover:bg-gray-100 text-sm font-medium">
              NEWS
            </a>
            <a href="#faqs" className="block px-0.5 py-0 uppercase text-gray-900 hover:bg-gray-100 text-sm font-medium">
              FAQS
            </a>
            <a href="#contact" className="block px-0.5 py-0 uppercase text-gray-900 hover:bg-gray-100 text-sm font-medium">
              CONTACT US
            </a>
            <a href="#eligibility" className="block px-2 py-0.5 uppercase bg-gray-900 text-white hover:bg-gray-700 rounded text-sm font-medium mt-2">
              CHECK ELIGIBILITY
            </a>
            <div className="pt-2">
              <span className="block px-0.5 py-0 uppercase text-gray-900 text-sm font-medium">ENGLISH</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;