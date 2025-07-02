
import React from 'react';
import ModernNavigation from '../components/ModernNavigation';
import HeroSection from '../components/HeroSection';
import FeaturedSection from '../components/FeaturedSection';
import CreativeShowcase from '../components/CreativeShowcase';
import InteractiveGallery from '../components/InteractiveGallery';
import ModernFooter from '../components/ModernFooter';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <ModernNavigation />
      
      {/* Food Section */}
      <section id="zaaika" className="relative">
        <HeroSection
          title="zayeka"
          subtitle="Experience culinary artistry through innovative recipes and gastronomic adventures that redefine your relationship with food."
          imageSrc="index-cb-crop.jpg"
          imageAlt="Gourmet culinary creation"
          section="food"
          actionText="Explore Recipes"
          actionLink="/veg"
        />
        
        <FeaturedSection
          title="Food World"
          subtitle="Discover extraordinary flavors"
          items={[
            {
              title: "Plant-Based Artistry",
              description: "Revolutionary vegetarian cuisine that transforms simple ingredients into culinary masterpieces",
              imageSrc: "index-V-1c.jpg",
              category: "veg",
              link: "/veg"
            },
            {
              title: "Sweet Indulgence",
              description: "Decadent desserts and confections that blur the line between food and art",
              imageSrc: "index-S-1c.jpg",
              category: "sweets",
              link: "/sweets"
            },
            {
              title: "Protein Excellence",
              description: "Expertly crafted meat dishes that showcase technique, flavor, and presentation",
              imageSrc: "index-NV-1c.jpg",
              category: "nonveg",
              link: "/nonveg"
            }
          ]}
        />
        
        <CreativeShowcase
          title="Signature Creation"
          itemName="Gur ka Thekua"
          description="An ancient recipe reimagined with modern techniques, combining traditional jaggery sweetness with contemporary presentation artistry."
          imageSrc="index-Thekuaa-crop.jpg"
          imageAlt="Artisanal Jaggery Thekua"
          actionText="View Recipe"
          actionLink="/veg/jaggery-thekua"
        />
      </section>

      {/* Art Section */}
      <section id="chitrakala" className="relative">
        <HeroSection
          title="chitraKala"
          subtitle="Immerse yourself in a realm where colors dance, emotions flow, and imagination takes tangible form through exquisite artistry."
          imageSrc="index-painting-crop.jpg"
          imageAlt="Contemporary art masterpiece"
          section="art"
          actionText="Explore Gallery"
          actionLink="/gallery/watercolor"
        />
        
        <InteractiveGallery
          title="Artistic Dimensions"
          subtitle="Explore visual narratives"
          items={[
            {
              title: "Fluid Watercolors",
              description: "Ethereal compositions where pigments flow like liquid dreams across pristine canvases",
              imageSrc: "index-watercolor-1c.jpeg",
              category: "watercolor",
              link: "/gallery/watercolor"
            },
            {
              title: "Graphite Mastery",
              description: "Monochromatic poetry expressed through the subtle gradations of pencil on paper",
              imageSrc: "index-pencil-1c.jpg",
              category: "pencil",
              link: "/gallery/pencil"
            }
          ]}
        />
        
        <CreativeShowcase
          title="Featured Artwork"
          itemName="Ethereal Landscapes"
          description="A breathtaking exploration of natural beauty, where reality and imagination converge to create scenes that transcend the ordinary."
          imageSrc="index-paint3.jpg"
          imageAlt="Stunning landscape painting"
          actionText="View Artwork"
          actionLink="/gallery/watercolor"
        />
      </section>

      <ModernFooter />
    </div>
  );
};

export default Index;
