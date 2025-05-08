import { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CountriesCount from "@/components/CountriesCount";
import NewsLogos from "@/components/NewsLogos";
import Programs from "@/components/Programs";
import ClientCompanies from "@/components/ClientCompanies";
import SecondPassport from "@/components/SecondPassport";
import JourneySteps from "@/components/JourneySteps";
import LatestNews from "@/components/LatestNews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  // Replace with Aryan's actual WhatsApp number (e.g., '+971123456789')
  const whatsappNumber = '+918002599534';
  const whatsappMessage = encodeURIComponent(
    'Hello, I’d like to learn more about Pathway Citizenship programs!'
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    // Create the Tawk.to script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://embed.tawk.to/6815f46c2a5b77190ef24a05/1iqas5ika';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the document body
    document.body.appendChild(script);

    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    
    // Adjust Tawk.to position (below WhatsApp)
    window.Tawk_API.customStyle = {
      visibility: {
        desktop: {
          position: 'br',
          xOffset: 40, // Same as WhatsApp's right position
          yOffset: 90 // Below WhatsApp (20px + 60px button height + 10px gap)
        },
        mobile: {
          position: 'br',
          xOffset: 20, // Same as WhatsApp's right position
          yOffset: 90
        }
      }
    };

    // Add custom CSS for Tawk.to size and WhatsApp button
    const style = document.createElement('style');
    style.textContent = `
      #tawkchat-container.tawk-container {
        transform: scale(1.2);
        transform-origin: bottom right;
      }
      @media (max-width: 768px) {
        #tawkchat-container.tawk-container {
          transform: scale(1.1);
        }
      }
      .whatsapp-button {
        position: fixed;
        bottom: 20px;
        right: 40px;
        z-index: 1000;
        transition: transform 0.3s ease;
      }
      .whatsapp-button:hover {
        transform: scale(1.1);
      }
      @media (max-width: 768px) {
        .whatsapp-button {
          bottom: 20px;
          right: 20px;
        }
      }
    `;
    document.head.appendChild(style);

    // Log when widget loads
    window.Tawk_API.onLoad = function () {
      console.log('Tawk.to widget loaded');
    };

    // Cleanup: Remove script and style when component unmounts
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative z-10">
      <Navbar />
      <Hero />
      <About />
      {/* <CountriesCount /> */}
      {/* <NewsLogos /> */}
      <Programs />
      {/* <ClientCompanies /> */}
      {/* <SecondPassport /> */}
      <JourneySteps />
      {/* <LatestNews /> */}
      <Newsletter />
      <Footer />
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contact us on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-12 h-12 md:w-14 md:h-14"
        />
      </a>
    </div>
  );
};

export default Index;