import React, { useState, useEffect } from 'react';

const CountriesCount = () => {
  const [count, setCount] = useState(20); // Start at 20

  // Animation effect with requestAnimationFrame for smooth counting
  useEffect(() => {
    let start = null;
    const target = 85;
    const duration = 1000; // 1 second for a faster animation

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1); // Progress from 0 to 1
      const newCount = 20 + (target - 20) * progress; // Linear interpolation
      setCount(Math.round(newCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId); // Cleanup on unmount
  }, []);

  return (
    <section className="py-12 bg-primary text-white">
      <div className="container-custom text-center">
        <div className="flex flex-col items-center">
          {/* Flex row with increased number size to maintain layout */}
          <div className="flex items-center justify-center space-x-8">
            <div className="text-9xl font-bold">+{Math.round(count)}</div>
            <div className="uppercase text-xl font-semibold tracking-widest">
              Countries<br />Worldwide
            </div>
          </div>
          <p className="max-w-lg mx-auto mt-6 text-sm text-gray-300">
            Pathway Citizenship has successfully processed applications for thousands of families and individuals from around the globe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountriesCount;