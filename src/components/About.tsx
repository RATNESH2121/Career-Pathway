"use client";

import * as React from "react";

const About = () => {
  const [logoSize, setLogoSize] = React.useState(40);
  // Array of crest images with unique src and alt text
  const crests = [
    { src: "/c2.jpg", alt: "Crest 1" },
    { src: "/c1.jpg", alt: "Crest 2" },
    { src: "/c2.jpg", alt: "Crest 3" },
    { src: "/c1.jpg", alt: "Crest 4" },
    { src: "/c2.jpg", alt: "Crest 5" },
  ];

  return (
    <section id="about" className="relative py-[70px] bg-white overflow-hidden">
      {/* World map background */}
      <img
        src="/public/w1.png"
        alt="World Map"
        className="absolute top-0 left-0 w-full max-w-6xl opacity-5 pointer-events-none select-none z-0 object-contain"
        style={{ left: '50%', top: '4rem', transform: 'translateX(-50%)' }}
      />
      {/* Large faded CI logo */}
      <div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-0"
        style={{ width: '60vw', minWidth: 600, maxWidth: 1200 }}
      >
        <img
          src="/public/l1.png"
          alt="CI Logo"
          className="w-full max-w-[1800px] pl-[90px] pr-[100px] opacity-10 select-none pointer-events-none"
        />
      </div>
      <div className="container-custom relative z-10 flex flex-col items-start px-4 sm:px-8 lg:px-16">
        <div className="w-full max-w-xl text-left">
          <h2
            className="heading-secondary text-primary font-2xl uppercase mb-4 text-left whitespace-pre-line tracking-widest font-bold"
            style={{ letterSpacing: '0.12em', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}
          >
            {`ABOUT\nPATHWAY\nCITIZENSHIP`}
          </h2>
          <p className="text-gray-800 mb-24 text-sm sm:text-base max-w-xl text-left font-medium">
          Pathway Citizenship helps people and families get second citizenship or residency through investment programs. We work with clients from around the world and make the process smooth and reliable. Trusted by several governments, we are known for our fast and professional service.
          </p>
        </div>
        {/* Crests Row */}
        <div className="flex flex-wrap justify-start gap-4 sm:gap-8 mb-4 w-full">
          {crests.map((crest, index) => (
            <img
              key={index}
              src={crest.src}
              alt={crest.alt}
              className="h-12 sm:h-16 w-auto object-contain grayscale"
            />
          ))}
        </div>
        {/* Subtext */}
        <div className="w-full text-left mt-1">
          <span className="uppercase tracking-widest text-sm font-medium text-black">
            MULTIPLE GOVERNMENTS AUTHORIZED FIRM
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;