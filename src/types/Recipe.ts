// src/types/Recipe.ts
export interface Recipe {
    id: number;
  name: string;
  description: string;
  image: string;
  totalTime: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  serves: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  rating: number;
  reviews: number;
  ingredients: {
    item: string;
    amount: string;
    note?: string;
  }[];
  instructions: {
    step: number;
    title: string;
    time: string;
    description: string;
  }[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
  tips?: string[];
  category: string;
}
