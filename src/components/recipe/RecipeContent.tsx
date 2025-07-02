
import React from 'react';
import { Recipe } from '@/types/Recipe'; // adjust path according to your setup


interface RecipeContentProps {
  recipe: Recipe;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  servings: number;
  setServings: (servings: number) => void;
}

const RecipeContent: React.FC<RecipeContentProps> = ({
  recipe,
  activeTab,
  setActiveTab,
  servings,
  setServings
}) => {
  const adjustedIngredients = recipe.ingredients.map((ingredient) => ({
    ...ingredient,
    amount: ingredient.amount.includes('cup') || ingredient.amount.includes('tbsp') || ingredient.amount.includes('tsp')
      ? ingredient.amount
      : ingredient.amount.replace(/\d+/, (match: string) => Math.round((parseInt(match) * servings) / recipe.serves).toString())
  }));

  return (
    <div className="py-10 px-5 lg:px-7">
      <div className="max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-white/5 backdrop-blur-sm rounded-xl p-1">
          {['ingredients', 'instructions', 'tips'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-brand-primary text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="lg:col-span-2">
          {activeTab === 'ingredients' && (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white font-playfair">Ingredients</h2>
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm">Servings:</span>
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => setServings(Math.max(1, servings - 1))}
                      className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 text-sm"
                    >
                      -
                    </button>
                    <span className="w-7 text-center text-white font-semibold text-sm">{servings}</span>
                    <button
                      onClick={() => setServings(servings + 1)}
                      className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {adjustedIngredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 backdrop-blur-sm rounded-xl">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="text-white font-medium text-sm">{ingredient.item}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-brand-primary font-semibold text-sm">{ingredient.amount}</div>
                      {ingredient.note && (
                        <div className="text-xs text-gray-400">{ingredient.note}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-white font-playfair">Instructions</h2>
              <div className="space-y-5">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex space-x-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {instruction.step}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-white">{instruction.title}</h3>
                        <span className="text-xs text-gray-400">{instruction.time}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm">{instruction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tips' && (
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-white font-playfair">Chef's Tips</h2>
              <div className="space-y-3">
                {recipe.tips && recipe.tips.map((tip: string, index: number) => (
                  <div key={index} className="flex items-start space-x-2 p-3 bg-white/5 backdrop-blur-sm rounded-xl">
                    <div className="w-2 h-2 bg-brand-accent rounded-full mt-2"></div>
                    <p className="text-gray-300 leading-relaxed text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeContent;
