
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recipe } from '@/types/Recipe'; 

interface RecipeSidebarProps {
  recipe: Recipe;
  otherRecipes: [string, Recipe][];
}

const RecipeSidebar: React.FC<RecipeSidebarProps> = ({ recipe, otherRecipes }) => {
  const location = useLocation();
  
  // Determine the recipe type and base path
  const getRecipeBasePath = () => {
    if (location.pathname.includes('/veg/')) {
      return '/veg';
    } else if (location.pathname.includes('/sweets/')) {
      return '/sweets';
    } else if (location.pathname.includes('/nonveg/')) {
      return '/nonveg';
    }
    return '/veg';
  };

  const basePath = getRecipeBasePath();

  return (
    <div className="space-y-6">
      {/* Nutrition Info */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Nutrition (Per Serving)</h3>
        <div className="space-y-2">
          {Object.entries(recipe.nutrition).map(([key, value]) => (
            <div key={key} className="flex justify-between">
              <span className="text-gray-400 capitalize text-sm">{key}</span>
              <span className="text-white font-medium text-sm">{value.toString()}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Recipes */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5">
        <h3 className="text-lg font-semibold text-white mb-3">Other Recipes</h3>
        <div className="space-y-3">
          {otherRecipes.map(([key, otherRecipe]) => (
            <Link
              key={key}
              to={`${basePath}/${key}`}
              className="block group"
            >
              <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 transition-colors">
                <img
                  src={otherRecipe.image}
                  alt={otherRecipe.name}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-white font-medium group-hover:text-brand-primary text-sm">
                    {otherRecipe.name}
                  </h4>
                  <p className="text-xs text-gray-400">{otherRecipe.totalTime}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeSidebar;
