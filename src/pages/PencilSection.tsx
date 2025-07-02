
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Edit, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const PencilSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const pencilArtworks = [
    {
      id: 1,
      name: "Photorealistic Portraits",
      description: "Hyperrealistic pencil portraits with intricate details",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technique: "Layered graphite with blending stumps",
      grades: ["9H", "6H", "2H", "HB", "2B", "4B", "6B", "8B"]
    },
    {
      id: 2,
      name: "Architectural Studies",
      description: "Detailed architectural drawings with perspective mastery",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technique: "Technical drawing with cross-hatching",
      grades: ["4H", "2H", "HB", "2B", "4B"]
    },
    {
      id: 3,
      name: "Nature Studies",
      description: "Botanical illustrations with scientific precision",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technique: "Fine line work with stippling",
      grades: ["6H", "4H", "2H", "HB", "B"]
    },
    {
      id: 4,
      name: "Abstract Compositions",
      description: "Experimental pencil work exploring texture and form",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technique: "Mixed media with charcoal accents",
      grades: ["2H", "HB", "2B", "4B", "6B", "8B"]
    },
    {
      id: 5,
      name: "Figure Studies",
      description: "Dynamic figure drawings capturing human form",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technique: "Gesture drawing with tonal modeling",
      grades: ["2H", "HB", "2B", "4B", "6B"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % pencilArtworks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + pencilArtworks.length) % pencilArtworks.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center group">
              <ArrowLeft className="h-6 w-6 text-white/60 group-hover:text-white mr-3 transition-colors" />
              <img
                className="h-12 w-auto transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg"
                src="/lovable-uploads/19cfe3be-1dee-4d9e-bc51-d72532ef3200.png"
                alt="Colorful Zaaika"
              />
            </Link>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white/80 hover:text-gray-400 font-medium transition-colors">Work</a>
              <a href="#" className="text-white/80 hover:text-gray-400 font-medium transition-colors">Contact</a>
              <a href="#" className="text-white/80 hover:text-gray-400 font-medium transition-colors">Log-In / Sign-Up</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent mb-6 animate-fade-in">
            chitraKala-pencil
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            "Mastering the art of monochrome, where every shade tells a story and precision meets passion in graphite poetry."
          </p>
          
          {/* Featured Image */}
          <div className="mt-16 relative">
            <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Pencil drawing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Edit className="h-6 w-6 text-gray-400" />
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white font-playfair">pencil</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artwork Slider */}
      <div className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-playfair">
            Our Pencil Art Collection
          </h2>
          
          <div className="relative">
            {/* Slider Container */}
            <div className="relative h-96 rounded-3xl overflow-hidden">
              {pencilArtworks.map((artwork, index) => (
                <div
                  key={artwork.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    backgroundImage: `url(${artwork.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-12">
                    <h3 className="text-4xl font-bold text-white mb-4 font-playfair">{artwork.name}</h3>
                    <p className="text-xl text-gray-200 mb-6">{artwork.description}</p>
                    <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                      View Artwork
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {pencilArtworks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gray-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Artwork Cards */}
      <div className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {pencilArtworks.slice(0, 3).map((artwork, index) => (
            <div key={artwork.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <h3 className="text-4xl md:text-5xl font-bold text-white font-playfair">
                  {artwork.name}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {artwork.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-gray-300">Technique</h4>
                  <p className="text-gray-400">{artwork.technique}</p>
                  
                  <h4 className="text-2xl font-semibold text-gray-300">Pencil Grades</h4>
                  <div className="flex flex-wrap gap-2">
                    {artwork.grades.map((grade, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50">
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                    View Details
                  </button>
                  <button className="border-2 border-gray-600 text-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-600 hover:text-white transition-all duration-300">
                    Save Artwork
                  </button>
                </div>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={artwork.image}
                    alt={artwork.name}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-600/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PencilSection;
