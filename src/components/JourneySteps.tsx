import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const steps = [
  {
    title: "WE ADVISE ON THE BEST PROGRAM FOR YOU",
    detail: "One of our experienced Consultants will assess your personal requirements and help you to carefully select the most suitable residence or citizenship by investment program for you and your family. This initial consultation is free of charge."
  },
  {
    title: "WE ONBOARD YOU AS A PATHWAY CITIZENSHIP CLIENT",
    detail: "We guide you through the onboarding process, ensuring all paperwork is in order and you’re fully prepared to start your journey with us."
  },
  {
    title: "WE SUPPORT YOU WITH THE APPLICATION PROCESS",
    detail: "Our team provides end-to-end support, managing your application and liaising with government authorities to ensure a smooth process."
  },
  {
    title: "YOUR NEW RESIDENCY OR CITIZENSHIP IS APPROVED",
    detail: "Congratulations! We assist with the final steps to receive your new residency or citizenship documentation."
  },
  {
    title: "WE OFFER YOU SUPPORT FOR LIFE",
    detail: "Our support continues after approval, offering guidance on relocation, tax planning, and more for a lifetime."
  }
];

const JourneySteps = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Title */}
        <h2 className="text-3xl md:text-3xl font-montserrat font-normal tracking-[0.25em] text-primary text-center uppercase mb-12">YOUR JOURNEY WITH PATHWAY CITIZENSHIP</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Image */}
          <div className="flex justify-center h-full">
            <img src="/public/r1.jpg" alt="Journey Passport" className="w-full max-w-lg rounded shadow-lg object-cover" style={{ height: '400px', objectFit: 'cover' }} />
          </div>
          {/* Right: Steps */}
          <div className="w-full">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col py-4  border-b border-gray-300 last:border-b-0">
                <div className="flex items-center cursor-pointer" onClick={() => toggleDetails(idx)}>
                  <span className="text-3xl md:text-4xl font-bold text-gray-300 mr-6 font-montserrat" style={{minWidth: '2.5rem'}}>{idx + 1}.</span>
                  <span className="text-base md:text-lg font-bold text-primary tracking-wide uppercase flex-1 font-montserrat">{step.title}</span>
                  <ChevronDown className={`ml-4 text-gray-400 w-6 h-6 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                </div>
                {openIndex === idx && (
                  <p className="mt-4 text-gray-600 text-base leading-relaxed pl-8 pr-4">{step.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;