
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowLeft, Search } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { nonVegRecipes } from '../data/nonVegRecipes';

const NonVegSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState(Object.entries(nonVegRecipes));
  const [searchParams] = useSearchParams();

  const recipesArray = Object.entries(nonVegRecipes);

  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      handleSearch(searchFromUrl);
    }
  }, [searchParams]);

  const handleSearch = (query = searchQuery) => {
    if (!query.trim()) {
      setFilteredRecipes(recipesArray);
      return;
    }

    const filtered = recipesArray.filter(([key, recipe]) =>
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.description.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ingredient => 
        ingredient.item.toLowerCase().includes(query.toLowerCase())
      )
    );
    
    setFilteredRecipes(filtered);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % recipesArray.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + recipesArray.length) % recipesArray.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

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
              <Link to="/veg" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">Veg</Link>
              <Link to="/sweets" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">Sweets</Link>
              <a href="#" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-5 lg:px-7">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary bg-clip-text text-transparent mb-5 animate-fade-in">
            protein-excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 mb-6">
            "Savor the richness of perfectly crafted non-vegetarian delicacies – where tradition meets culinary excellence!"
          </p>
          
          {/* Search Bar */}
          <div className="max-w-sm mx-auto mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search recipes..."
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
          
          {/* Featured Image */}
          <div className="mt-12 relative">
            <div className="relative w-64 h-64 mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="index-NV-1c.jpg"
                alt="Non-vegetarian cuisine"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5 text-center">
                <h3 className="text-2xl font-bold text-white font-playfair">non-veg</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Slider */}
      <div className="py-16 px-5 lg:px-7">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 font-playfair">
            Our Non-Vegetarian Collection
          </h2>
          
          <div className="relative">
            {/* Slider Container */}
            <div className="relative h-80 rounded-3xl overflow-hidden">
              {recipesArray.map(([key, recipe], index) => (
                <div
                  key={key}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    backgroundImage: `url(${recipe.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-10">
                    <h3 className="text-3xl font-bold text-white mb-3 font-playfair">{recipe.name}</h3>
                    <p className="text-lg text-gray-200 mb-5">{recipe.description}</p>
                    <Link to={`/nonveg/${key}`}>
                      <Button className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-6 py-2 text-sm rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                        See Recipe
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {recipesArray.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-brand-primary' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Recipe Cards */}
      <div className="py-16 px-5 lg:px-7">
        <div className="max-w-6xl mx-auto space-y-24">
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-white mb-3">No recipes found</h3>
              <p className="text-gray-400 mb-6">Try searching for something else</p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setFilteredRecipes(recipesArray);
                }}
                className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-5 py-2 text-sm rounded-full font-semibold hover:scale-105 transition-transform duration-300"
              >
                Show All Recipes
              </Button>
            </div>
          ) : (
            filteredRecipes.map(([key, recipe], index) => (
              <div key={key} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-5 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-playfair">
                    {recipe.name}
                  </h3>
                  <p className="text-base text-gray-300 leading-relaxed">
                    {recipe.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-brand-primary">Ingredients</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {recipe.ingredients.map((ingredient, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                          <span className="text-gray-300 text-sm">{ingredient.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link to={`/nonveg/${key}`}>
                      <Button className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-5 py-2 text-sm rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                        Full Recipe
                      </Button>
                    </Link>
                    <Button className="border-2 border-brand-primary text-brand-primary px-5 py-2 text-sm rounded-full font-semibold hover:bg-brand-primary hover:text-white transition-all duration-300">
                      Save Recipe
                    </Button>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-brand-accent/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-brand-primary/20 rounded-full blur-xl"></div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NonVegSection;
