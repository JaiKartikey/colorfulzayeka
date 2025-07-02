
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CreativeShowcaseProps {
  title: string;
  itemName: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actionText?: string;
  actionLink?: string;
}

const CreativeShowcase: React.FC<CreativeShowcaseProps> = ({
  title,
  itemName,
  description,
  imageSrc,
  imageAlt,
  actionText,
  actionLink
}) => {
  return (
    <div className="py-24 px-5 lg:px-7">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-brand-primary/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -right-5 w-14 h-14 bg-brand-accent/30 rounded-full blur-xl"></div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-brand-primary mb-2">
                {title}
              </h2>
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-5">
                {itemName}
              </h3>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {description}
            </p>
            
            {actionText && actionLink && (
              <div className="flex space-x-3">
                <Link to={actionLink}>
                  <Button className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-7 py-3 text-base font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                    {actionText}
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-brand-primary text-brand-primary px-7 py-3 text-base font-semibold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeShowcase;
