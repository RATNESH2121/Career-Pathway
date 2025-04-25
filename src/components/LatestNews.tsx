
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsCard = ({ title, category, date, image }: { title: string; category: string; date: string; image: string }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="p-4">
        <div className="text-xs text-blue-600 uppercase mb-1">{category}</div>
        <h3 className="font-semibold text-base line-clamp-2">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-xs text-gray-500">{date}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" className="text-xs px-4 py-1 h-auto">Read More</Button>
      </CardFooter>
    </Card>
  );
};

const LatestNews = () => {
  const newsItems = [
    {
      title: "The Caribbean: A Top Destination for Citizenship by Investment",
      category: "Citizenship",
      date: "March 15, 2023",
      image: "https://via.placeholder.com/400x300?text=Caribbean"
    },
    {
      title: "RCBI Programs Attract Record Numbers of Global Investors",
      category: "Investment",
      date: "April 2, 2023",
      image: "https://via.placeholder.com/400x300?text=RCBI"
    },
    {
      title: "Why and When Americans Seek Second Citizenship Options",
      category: "Analysis",
      date: "May 18, 2023",
      image: "https://via.placeholder.com/400x300?text=Americans"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="heading-secondary text-center mb-12 text-primary">LATEST NEWS</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
