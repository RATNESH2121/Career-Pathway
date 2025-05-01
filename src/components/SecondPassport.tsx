"use client";

import * as React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BenefitCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <div className="p-6 text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-3 text-blue-900 uppercase">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

const SecondPassport = () => {
  // Expanded benefits array to allow carousel cycling
  const allBenefits = [
    {
      title: "EDUCATION",
      description: "Empowering children through first-class education is a key driver to those acquiring a second citizenship or residency.",
      icon: (
        <svg className="h-12 w-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16v10H4V7zm8 13a2 2 0 100-4 2 2 0 000 4z"></path>
        </svg>
      ),
    },
    {
      title: "RELIABLE GOVERNMENTS",
      description: "Belonging to a country with a stable political system where sensible decisions are made by leaders to protect their citizens is key.",
      icon: (
        <svg className="h-12 w-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m-6 0h12"></path>
        </svg>
      ),
    },
    {
      title: "QUALITY OF LIFE",
      description: "Feeling welcomed by a community and a stable environment with a high quality of life is priceless.",
      icon: (
        <svg className="h-12 w-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0113.263 21H9.5a2 2 0 01-1.789-2.894l3.5-7A2 2 0 0114 10z"></path>
        </svg>
      ),
    },
    {
      title: "GLOBAL MOBILITY",
      description: "Travel visa-free to over 140 countries with a second passport, opening doors to international business and personal opportunities.",
      icon: (
        <svg className="h-12 w-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M12 3v18"></path>
        </svg>
      ),
    },
    {
      title: "WEALTH CARE",
      description: "Protect your assets and create tax optimization strategies with citizenship in a stable, well-regulated jurisdiction.",
      icon: (
        <svg className="h-12 w-12 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"></path>
        </svg>
      ),
    },
  ];

  // State for carousel index
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show 3 cards at a time

  // Calculate the benefits to display
  const displayedBenefits = allBenefits.slice(currentIndex, currentIndex + itemsPerPage);
  if (displayedBenefits.length < itemsPerPage) {
    const remaining = itemsPerPage - displayedBenefits.length;
    displayedBenefits.push(...allBenefits.slice(0, remaining));
  }

  // Handlers for carousel navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? allBenefits.length - itemsPerPage : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= allBenefits.length ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        {/* Heading with Horizontal Lines */}
        <div className="relative flex items-center justify-center mb-4">
          <div className="w-16 h-px bg-blue-900 mr-4"></div>
          <div className="flex flex-col items-center">
            <h2 className="heading-secondary text-center text-blue-900 uppercase text-5xl">WHY A SECOND </h2>
            <h2 className="heading-secondary text-center text-blue-900 uppercase text-5xl">PASSPORT</h2>
          </div>
          <div className="w-16 h-px bg-blue-900 ml-4"></div>
        </div>

        {/* Paragraph */}
        <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 text-sm">
          The advantages of holding a second passport or an alternative residency are significant to mitigate financial risks and secure your future. In this new world of deglobalization, a well-accepted second passport with visa-free access to relevant countries worldwide is essential.
        </p>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-4 relative">
          {displayedBenefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-8 transform -translate-y-1/2"
          >
            <ChevronLeft className="h-8 w-8 text-blue-900" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-8 transform -translate-y-1/2"
          >
            <ChevronRight className="h-8 w-8 text-blue-900" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(allBenefits.length / itemsPerPage) }).map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === Math.floor(currentIndex / itemsPerPage) ? "bg-gray-400" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondPassport;