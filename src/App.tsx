import { useState, useEffect, useRef } from 'react';
import { Box, Code, Database } from 'lucide-react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Loader from './components/Loader';
import TestimonialCard from './components/TestimonialCard';
import { usePortfolioData } from './hooks/usePortfolioData';

interface Service {
  icon: 'Box' | 'Code' | 'Database';
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  image: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const { data, loading: dataLoading, error } = usePortfolioData();
  const heroRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const iconMap = {
    Box: Box,
    Code: Code,
    Database: Database
  };

  if (loading || dataLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        heroRef={heroRef}
        testimonialsRef={testimonialsRef}
        contactRef={contactRef}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hero Section */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <img
                src={data.hero.profileImage}
                alt="Profile"
                className="w-20 h-20 rounded-full mb-6"
              />
              <h1 className="text-4xl font-bold mb-4">
                My name is {data.hero.name}, I'm a {data.hero.title}
              </h1>
              <p className="text-neutral-400 mb-8">
                {data.hero.description}
              </p>
              <SocialLinks />
            </div>
          </div>

          <div className="bg-neutral-900 rounded-3xl overflow-hidden">
            <img
              src={data.hero.featuredImage}
              alt="Featured work"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Service Cards */}
          {data.services.map((service: Service, index: number) => {
            return (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>

        {/* Testimonials Section */}
        <div ref={testimonialsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {data.testimonials.map((testimonial: Testimonial, index: number) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              image={testimonial.image}
            />
          ))}
        </div>
      </main>
      <footer ref={contactRef}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
