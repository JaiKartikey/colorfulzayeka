
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface FeaturedItem {
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  link?: string;
}

interface FeaturedSectionProps {
  title: string;
  subtitle: string;
  items: FeaturedItem[];
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ title, subtitle, items }) => {
  return (
    <div className="py-24 px-5 lg:px-7">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-5">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="group relative">
              <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 font-playfair">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-5 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  
                  {item.link && (
                    <Link to={item.link}>
                      <Button className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-5 py-2 text-sm rounded-full font-semibold hover:scale-105 transition-all duration-300">
                        Explore Now
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
