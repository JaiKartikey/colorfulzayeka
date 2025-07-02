
import React, { useState } from 'react';
import { ArrowLeft, Search, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const watercolorArtworks = [
  {
    id: 1,
    title: "Ethereal Sunset",
    description: "A breathtaking watercolor capturing the golden hour with fluid brushstrokes",
    image: "index-watercolor-1c.jpeg",
    artist: "Colorful Zaaika",
    year: "2024",
    technique: "Wet-on-wet watercolor",
    size: "16x20 inches"
  },
  {
    id: 2,
    title: "Mountain Mist",
    description: "Delicate layers of watercolor create a dreamy mountain landscape",
    image: "index-paint3.jpg",
    artist: "Colorful Zaaika",
    year: "2024",
    technique: "Layered glazing",
    size: "12x16 inches"
  },
  {
    id: 3,
    title: "Ocean Waves",
    description: "Dynamic watercolor study of ocean waves in motion",
    image: "index-painting-crop.jpg",
    artist: "Colorful Zaaika",
    year: "2024",
    technique: "Wet-on-dry technique",
    size: "14x18 inches"
  }
];

const WatercolorGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArtworks, setFilteredArtworks] = useState(watercolorArtworks);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredArtworks(watercolorArtworks);
      return;
    }

    const filtered = watercolorArtworks.filter(artwork =>
      artwork.title.toLowerCase().includes(query.toLowerCase()) ||
      artwork.description.toLowerCase().includes(query.toLowerCase()) ||
      artwork.technique.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredArtworks(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-5 lg:px-7">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center group">
              <ArrowLeft className="h-5 w-5 text-white/60 group-hover:text-white mr-2 transition-colors" />
              <img
                className="h-9 w-auto transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg"
                src="index-cz-transparent.png"
                alt="Colorful Zaaika"
              />
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/gallery/pencil" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">Pencil Art</Link>
              <Link to="/veg" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">Recipes</Link>
              <a href="#" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-5 lg:px-7">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent mb-5 animate-fade-in">
            watercolor-dreams
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 mb-6">
            "Where pigments flow like liquid poetry and every brushstroke tells a story of color and emotion"
          </p>
          
          {/* Search Bar */}
          <div className="max-w-sm mx-auto mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search artworks..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                className="bg-white/10 border-white/20 text-white placeholder-white/60 pr-10 text-base py-2"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-16 px-5 lg:px-7">
        <div className="max-w-6xl mx-auto">
          {filteredArtworks.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-3">No artworks found</h3>
              <p className="text-gray-400 mb-6">Try searching for something else</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setFilteredArtworks(watercolorArtworks);
                }}
                className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-5 py-2 text-sm rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Show All Artworks
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArtworks.map((artwork) => (
                <div key={artwork.id} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={artwork.image}
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 font-playfair">
                        {artwork.title}
                      </h3>
                      <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                        {artwork.description}
                      </p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Technique:</span>
                          <span className="text-brand-primary">{artwork.technique}</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Size:</span>
                          <span className="text-brand-primary">{artwork.size}</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Year:</span>
                          <span className="text-brand-primary">{artwork.year}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button className="flex-1 bg-gradient-to-r from-brand-primary to-brand-accent text-white px-4 py-2 text-xs rounded-full font-semibold hover:scale-105 transition-all duration-300">
                          View Details
                        </Button>
                        <Button variant="outline" size="sm" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white p-2 rounded-full">
                          <Heart className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm" className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white p-2 rounded-full">
                          <Share2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Artist Statement */}
      <div className="py-16 px-5 lg:px-7">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-playfair">Artist Statement</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Watercolor painting is the art of controlled spontaneity. Each brushstroke carries the essence of the moment, 
            and every color blend tells a unique story. My watercolor works explore the delicate balance between intention 
            and accident, where the medium itself becomes a collaborator in the creative process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WatercolorGallery;
