"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative py-6 sm:py-8 lg:py-12 bg-[#183B4E]">
      {/* Content */}
      <div className="relative z-20 container-custom flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16">
        <div className="max-w-2xl text-white mb-6 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-light mb-4 sm:mb-6 leading-tight tracking-wide text-left">
            Pathway to your new Home!
          </h1>
          <div className="mt-8 sm:mt-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-left text-white leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Trusted Citizenship Partner
            </h2>
          </div>
        </div>
        {/* Passport Grid */}
        <div className="hidden lg:flex items-center justify-center h-full">
          <div className="grid gap-3 sm:gap-4 mt-4">
            {/* Top Row: 5 Passports */}
            <div className="flex justify-center space-x-3 sm:space-x-4 pt-16 sm:pt-20">
              <img
                src="./p1.jpg"
                alt="Passport 1"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(5deg)",
                }}
              />
              <img
                src="./p2.jpg"
                alt="Passport 2"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                }}
              />
              <img
                src="./p33.jpg"
                alt="Passport 3"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(5deg)",
                }}
              />
              <img
                src="./p4.jpg"
                alt="Passport 4"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                }}
              />
              <img
                src="./p51.jpg"
                alt="Passport 5"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(5deg)",
                }}
              />
            </div>
            {/* Middle Row: 4 Passports */}
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <img
                src="./p6.jpg"
                alt="Passport 6"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                }}
              />
              <img
                src="./p7.jpg"
                alt="Passport 7"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(5deg)",
                }}
              />
              <img
                src="./p9.jpg"
                alt="Passport 8"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                }}
              />
              <img
                src="./p10.jpg"
                alt="Passport 9"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(5deg)",
                }}
              />
            </div>
            {/* Bottom Row: 3 Passports */}
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <img
                src="./p2.jpg"
                alt="Passport 10"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                }}
              />
              <img
                src="./p2.jpg"
                alt="Passport 11"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(5deg)",
                }}
              />
              <img
                src="./p2.jpg"
                alt="Passport 12"
                className="w-16 sm:w-20 h-24 sm:h-28 object-cover rounded transform hover:scale-105 transition-all duration-300"
                style={{
                  boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.4), 2px 2px 5px rgba(0, 0, 0, 0.2)",
                  transform: "perspective(1000px) rotateY(-5deg)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col">
        <Button variant="ghost" className="bg-[#4A235A] text-white hover:bg-[#4A235A]/90 w-12 sm:w-16 h-12 sm:h-16 rounded-none flex items-center justify-center">
          <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#4A235A] text-white hover:bg-[#4A235A]/90 w-12 sm:w-16 h-12 sm:h-16 rounded-none flex items-center justify-center">
          <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#4A235A] text-white hover:bg-[#4A235A]/90 w-12 sm:w-16 h-12 sm:h-16 rounded-none flex items-center justify-center">
          <MessageSquare className="h-4 sm:h-5 w-4 sm:w-5" />
        </Button>
        <Button variant="ghost" className="bg-[#4A235A] text-white hover:bg-[#4A235A]/90 w-12 sm:w-16 h-12 sm:h-16 rounded-none flex items-center justify-center">
          <Send className="h-4 sm:h-5 w-4 sm:w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Hero;