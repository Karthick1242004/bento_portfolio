import { ArrowRight } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  image: string;
}

export default function TestimonialCard({ quote, author, image }: TestimonialCardProps) {
  return (
    <div className="bg-neutral-900 rounded-3xl overflow-hidden">
      <img src={image} alt="Testimonial background" className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-2xl mb-1">"</div>
        <p className="text-neutral-300 mb-6">{quote}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={author.image} alt={author.name} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-medium">{author.name}</p>
              <p className="text-sm text-neutral-400">{author.title}</p>
            </div>
          </div>
          <ArrowRight className="text-neutral-400" />
        </div>
      </div>
    </div>
  );
}