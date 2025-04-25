
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
import AmbassadorProgram from "@/components/AmbassadorProgram";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <About />
      <CountriesCount />
      <NewsLogos />
      <Programs />
      <ClientCompanies />
      <SecondPassport />
      <JourneySteps />
      <LatestNews />
      <AmbassadorProgram />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
