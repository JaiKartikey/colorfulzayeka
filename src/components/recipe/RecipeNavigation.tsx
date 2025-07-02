
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, BookmarkPlus } from 'lucide-react';

interface RecipeNavigationProps {
  isFavorited: boolean;
  setIsFavorited: (favorited: boolean) => void;
}

const RecipeNavigation: React.FC<RecipeNavigationProps> = ({ 
  isFavorited, 
  setIsFavorited 
}) => {
  const location = useLocation();
  
  // Determine the back link based on current path
  const getBackLink = () => {
    if (location.pathname.includes('/veg/')) {
      return { path: '/veg', label: 'Back to Veg Recipes' };
    } else if (location.pathname.includes('/sweets/')) {
      return { path: '/sweets', label: 'Back to Sweet Recipes' };
    } else if (location.pathname.includes('/nonveg/')) {
      return { path: '/nonveg', label: 'Back to Non-Veg Recipes' };
    }
    return { path: '/', label: 'Back to Home' };
  };

  const backLink = getBackLink();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-5 lg:px-7">
        <div className="flex items-center justify-between h-16">
          <Link to={backLink.path} className="flex items-center group">
            <ArrowLeft className="h-5 w-5 text-white/60 group-hover:text-white mr-2 transition-colors" />
            <span className="text-white font-medium text-sm">{backLink.label}</span>
          </Link>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsFavorited(!isFavorited)}
              className={`p-2 rounded-full transition-colors ${
                isFavorited ? 'bg-red-500 text-white' : 'bg-white/10 text-white/60 hover:text-white'
              }`}
            >
              <Heart className="h-4 w-4" fill={isFavorited ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 rounded-full bg-white/10 text-white/60 hover:text-white transition-colors">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="p-2 rounded-full bg-white/10 text-white/60 hover:text-white transition-colors">
              <BookmarkPlus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RecipeNavigation;
