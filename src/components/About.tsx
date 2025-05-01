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
        className="absolute top-0 left-0 w-full max-w-8xl opacity-5 pointer-events-none select-none z-0"
        style={{ left: '10%', top: '4rem' }}
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
      <div className="container-custom relative z-10 flex flex-col items-start">
        <div className="w-full max-w-xl text-left pl-16">
          <h2
            className="heading-secondary text-primary font-2xl uppercase mb-4 text-left whitespace-pre-line tracking-widest"
            style={{ letterSpacing: '0.12em' }}
          >
            {`ABOUT\nPATHWAY\nCITIZENSHIP`}
          </h2>
          <p className="text-gray-700 mb-6 text-sm md:text-base max-w-xl text-left">
            Pathway citizenship, a pioneer advisory firm, specializes in fast investor programs for residence and citizenship worldwide. Annually, it assists hundreds of individuals and families globally in securing a second citizenship by investment. Accredited by multiple governments, it holds strong credentials to process citizenships.
          </p>
        </div>
        {/* Crests Row */}
        <div className="flex justify-start gap-8 mb-4 w-full pl-16">
          {crests.map((crest, index) => (
            <img
              key={index}
              src={crest.src}
              alt={crest.alt}
              className="h-16 w-auto object-contain grayscale"
            />
          ))}
        </div>
        {/* Subtext */}
        <div className="w-full text-left mt-1 pl-16">
          <span className="uppercase tracking-widest text-sm font-medium text-black">
            MULTIPLE GOVERNMENTS AUTHORIZED FIRM
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;