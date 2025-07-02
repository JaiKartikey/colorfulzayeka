
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { nonVegRecipes } from '../data/nonVegRecipes';
import RecipeNavigation from '../components/recipe/RecipeNavigation';
import RecipeHero from '../components/recipe/RecipeHero';
import RecipeContent from '../components/recipe/RecipeContent';
import RecipeSidebar from '../components/recipe/RecipeSidebar';

const NonVegRecipePage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('ingredients');
  const [servings, setServings] = useState(4);
  const [isFavorited, setIsFavorited] = useState(false);

  const recipe = nonVegRecipes[slug as string];

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-3">Recipe Not Found</h1>
          <Link to="/nonveg" className="text-brand-primary hover:text-brand-accent text-sm">
            Back to Non-Veg Section
          </Link>
        </div>
      </div>
    );
  }

  const otherRecipes = Object.entries(nonVegRecipes)
    .filter(([key]) => key !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <RecipeNavigation 
        isFavorited={isFavorited}
        setIsFavorited={setIsFavorited}
      />
      
      <RecipeHero recipe={recipe} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-5 lg:px-7">
        <div className="lg:col-span-2">
          <RecipeContent
            recipe={recipe}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            servings={servings}
            setServings={setServings}
          />
        </div>
        
        <div className="lg:col-span-1">
          <RecipeSidebar 
            recipe={recipe}
            otherRecipes={otherRecipes}
          />
        </div>
      </div>
    </div>
  );
};

export default NonVegRecipePage;
