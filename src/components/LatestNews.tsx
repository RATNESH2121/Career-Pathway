import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsCard = ({ title, category, date, image }: { title: string; category: string; date: string; image: string }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-56 overflow-hidden mb-6">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col">
        <h3 className="text-2xl font-medium text-primary mb-4 text-left leading-snug font-montserrat">{title}</h3>
        <div className="mb-2">
          <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded mb-2 font-montserrat">{category}</span>
        </div>
        <div className="text-sm text-gray-700 mb-6 text-left font-montserrat">{date} - Citizenship Invest</div>
        <div className="mt-auto">
          <button className="w-full border border-primary text-primary py-3 px-6 rounded text-base font-montserrat hover:bg-primary hover:text-white transition text-left">READ MORE</button>
        </div>
        <hr className="mt-8 border-t border-gray-300" />
      </div>
    </div>
  );
};

const LatestNews = () => {
  const newsItems = [
    {
      title: "The Caribbean: A Top Retirement Destination for Americans & Europeans",
      category: "Citizenship News",
      date: "23rd Apr 2025",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Indian investors double down on EB-5 amid U.S. political shifts",
      category: "Citizenship News",
      date: "23rd Apr 2025",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Why Are Latin America's Wealthy Investors Seeking Residency by Investment?",
      category: "Citizenship News",
      date: "16th Apr 2025",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Title with lines */}
        <div className="flex items-center justify-center mb-16">
          <div className="hidden md:block flex-1 h-px bg-gray-300 mr-8" />
          <h2 className="text-5xl md:text-6xl font-montserrat font-normal tracking-[0.25em] text-primary text-center uppercase">LATEST NEWS</h2>
          <div className="hidden md:block flex-1 h-px bg-gray-300 ml-8" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
