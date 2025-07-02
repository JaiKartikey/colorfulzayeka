
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ModernNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim().replace(/\s+/g, '-');
      
      const recipeMap: { [key: string]: string } = {
        'paneer-tikka': '/veg/paneer-tikka',
        'besan-ki-sabji': '/veg/besan-ki-sabji',
        'tehri': '/veg/tehri',
        'dal-pitthi': '/veg/dal-pitthi',
        'litti-chokha': '/veg/litti-chokha',
        'jaggery-thekua': '/veg/jaggery-thekua',
        'gulab-jamun': '/sweets/gulab-jamun',
        'rasgulla': '/sweets/rasgulla',
        'kheer': '/sweets/kheer',
        'chicken-curry': '/nonveg/chicken-curry',
        'mutton-biryani': '/nonveg/mutton-biryani',
        'fish-fry': '/nonveg/fish-fry'
      };
      
      if (recipeMap[query]) {
        navigate(recipeMap[query]);
      } else {
        navigate(`/veg?search=${encodeURIComponent(searchQuery)}`);
      }
      
      setSearchQuery('');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 lg:px-7">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center group">
            <img
              className="h-9 w-auto transition-all duration-300 group-hover:scale-110 filter drop-shadow-lg"
              src="index-cz-transparent.png"
              alt="Colorful Zaaika"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/veg" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">
              Veg Recipes
            </Link>
            <Link to="/sweets" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">
              Sweets
            </Link>
            <Link to="/nonveg" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">
              Non-Veg
            </Link>
            <Link to="/gallery/watercolor" className="text-white/80 hover:text-brand-primary text-sm font-medium transition-colors">
              Art Gallery
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-white/60 pr-10 focus:bg-white/20 text-sm h-8 w-48"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/10 p-1 h-auto"
              >
                <Search className="h-3 w-3 text-white/60" />
              </Button>
            </div>
          </form>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-5">
            <div className="space-y-3">
              <Link
                to="/veg"
                className="block text-white/80 hover:text-brand-primary text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Veg Recipes
              </Link>
              <Link
                to="/sweets"
                className="block text-white/80 hover:text-brand-primary text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sweets
              </Link>
              <Link
                to="/nonveg"
                className="block text-white/80 hover:text-brand-primary text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Non-Veg
              </Link>
              <Link
                to="/gallery/watercolor"
                className="block text-white/80 hover:text-brand-primary text-sm font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Art Gallery
              </Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="pt-3">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search recipes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/60 pr-10 focus:bg-white/20 text-sm"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white/10 p-1 h-auto"
                  >
                    <Search className="h-3 w-3 text-white/60" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ModernNavigation;
