
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  section: string;
  actionText?: string;
  actionLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  section,
  actionText,
  actionLink
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 lg:px-7 pt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent animate-fade-in">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in delay-300">
            {subtitle}
          </p>
          
          {actionText && actionLink && (
            <div className="animate-fade-in delay-500">
              <Link to={actionLink}>
                <Button className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-7 py-3 text-base font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {actionText}
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        <div className="relative animate-fade-in delay-700">
          <div className="relative w-full max-w-md mx-auto">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-brand-primary/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
