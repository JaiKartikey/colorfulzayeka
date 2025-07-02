
import React from 'react';
import { Clock, Users, ChefHat, Star } from 'lucide-react';
import { Recipe } from '@/types/Recipe'; // adjust path according to your setup


interface RecipeHeroProps {
  recipe: Recipe;
}

const RecipeHero: React.FC<RecipeHeroProps> = ({ recipe }) => {
  return (
    <div className="pt-24 pb-10 px-5 lg:px-7">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(recipe.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-white text-sm font-medium">{recipe.rating}</span>
              <span className="text-gray-400 text-sm">({recipe.reviews} reviews)</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white font-playfair">
              {recipe.name}
            </h1>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {recipe.description}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                <Clock className="h-5 w-5 text-brand-primary mx-auto mb-2" />
                <div className="text-xs text-gray-400">Prep Time</div>
                <div className="text-white font-semibold text-sm">{recipe.prepTime}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                <ChefHat className="h-5 w-5 text-brand-primary mx-auto mb-2" />
                <div className="text-xs text-gray-400">Cook Time</div>
                <div className="text-white font-semibold text-sm">{recipe.cookTime}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                <Users className="h-5 w-5 text-brand-primary mx-auto mb-2" />
                <div className="text-xs text-gray-400">Serves</div>
                <div className="text-white font-semibold text-sm">{recipe.serves}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-center">
                <div className="text-xs text-gray-400">Difficulty</div>
                <div className="text-white font-semibold text-sm">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="absolute -top-5 -right-5 w-20 h-20 bg-brand-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-brand-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeHero;
