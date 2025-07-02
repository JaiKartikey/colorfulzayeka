import { Recipe } from '@/types/Recipe';

export const vegRecipes: Record<string, Recipe> = {
  'paneer-tikka': {
    id: 1,
    name: "Paneer Tikka",
    description: "Grilled paneer in aromatic spices - a perfect appetizer that combines the richness of paneer with the bold flavors of Indian spices",
    image: "/veg-paneertikka.jpg",
    prepTime: "20 mins",
    cookTime: "15 mins",
    totalTime: "35 mins",
    difficulty: "Medium",
    serves: 4,
    servings: 4,
    rating: 4.8,
    reviews: 156,
    category: "Appetizer",
    ingredients: [
      { item: "Paneer cubes", amount: "500g", note: "Cut into 1-inch cubes" },
      { item: "Yogurt", amount: "1 cup", note: "Greek yogurt preferred" },
      { item: "Ginger-garlic paste", amount: "2 tbsp", note: "Fresh paste" },
      { item: "Red chili powder", amount: "1 tsp", note: "Adjust to taste" },
      { item: "Garam masala", amount: "1 tsp", note: "Freshly ground" },
      { item: "Turmeric powder", amount: "1/2 tsp", note: "" },
      { item: "Lemon juice", amount: "2 tbsp", note: "Fresh squeezed" },
      { item: "Oil", amount: "2 tbsp", note: "For grilling" },
      { item: "Salt", amount: "To taste", note: "" },
      { item: "Bell peppers", amount: "2 medium", note: "Cut into squares" },
      { item: "Onions", amount: "2 medium", note: "Cut into squares" }
    ],
    instructions: [
      {
        step: 1,
        title: "Prepare the Marinade",
        description: "In a large bowl, whisk together yogurt, ginger-garlic paste, red chili powder, garam masala, turmeric, lemon juice, and salt until smooth.",
        time: "5 mins"
      },
      {
        step: 2,
        title: "Marinate the Paneer",
        description: "Add paneer cubes to the marinade and gently toss to coat evenly. Cover and refrigerate for at least 30 minutes, or up to 2 hours for best flavor.",
        time: "30 mins"
      },
      {
        step: 3,
        title: "Prepare Vegetables",
        description: "Cut bell peppers and onions into 1-inch squares. Add them to the marinade with paneer for the last 10 minutes.",
        time: "5 mins"
      },
      {
        step: 4,
        title: "Preheat and Skewer",
        description: "Preheat your grill or oven to medium-high heat. Thread paneer and vegetables alternately onto skewers.",
        time: "5 mins"
      },
      {
        step: 5,
        title: "Grill to Perfection",
        description: "Grill for 12-15 minutes, turning occasionally, until paneer is golden brown and vegetables are tender. Brush with oil if needed.",
        time: "15 mins"
      },
      {
        step: 6,
        title: "Serve Hot",
        description: "Remove from heat and serve immediately with mint chutney, sliced onions, and lemon wedges. Garnish with fresh cilantro.",
        time: "2 mins"
      }
    ],
    tips: [
      "Use firm paneer to prevent it from breaking during grilling",
      "Don't over-marinate as the acid in yogurt can make paneer mushy",
      "Soak wooden skewers in water for 30 minutes before using",
      "For a smoky flavor, finish on a charcoal grill for 2-3 minutes"
    ],
    nutrition: {
      calories: 285,
      protein: "18g",
      carbs: "12g",
      fat: "20g",
      fiber: "3g"
    }
  },
  'besan-ki-sabji': {
    id: 2,
    name: "Besan Ki Sabji",
    description: "A traditional gram flour curry that's both nutritious and delicious, perfect with rice or roti",
    image: "/veg-besansabji.jpg",
    prepTime: "15 mins",
    cookTime: "25 mins",
    totalTime: "40 mins",
    difficulty: "Easy",
    serves: 4,
    servings: 4,
    rating: 4.5,
    reviews: 89,
    category: "Main Course",
    ingredients: [
      { item: "Gram flour (Besan)", amount: "1 cup", note: "Sifted" },
      { item: "Curd", amount: "2 cups", note: "Beaten smooth" },
      { item: "Turmeric powder", amount: "1 tsp", note: "" },
      { item: "Red chili powder", amount: "1 tsp", note: "Adjust to taste" },
      { item: "Green chilies", amount: "2", note: "Finely chopped" },
      { item: "Ginger", amount: "1 inch", note: "Finely chopped" },
      { item: "Cumin seeds", amount: "1 tsp", note: "" },
      { item: "Mustard seeds", amount: "1/2 tsp", note: "" },
      { item: "Asafoetida", amount: "1/4 tsp", note: "" },
      { item: "Oil", amount: "3 tbsp", note: "" },
      { item: "Salt", amount: "To taste", note: "" },
      { item: "Coriander leaves", amount: "2 tbsp", note: "Chopped" }
    ],
    instructions: [
      {
        step: 1,
        title: "Prepare the Batter",
        description: "Mix gram flour with beaten curd, turmeric, red chili powder, and salt. Whisk until smooth with no lumps.",
        time: "5 mins"
      },
      {
        step: 2,
        title: "Heat the Oil",
        description: "Heat oil in a heavy-bottomed pan. Add cumin seeds, mustard seeds, and asafoetida. Let them splutter.",
        time: "2 mins"
      },
      {
        step: 3,
        title: "Add Aromatics",
        description: "Add chopped ginger and green chilies. Sauté for 1 minute until fragrant.",
        time: "1 min"
      },
      {
        step: 4,
        title: "Cook the curry",
        description: "Pour the besan mixture into the pan while stirring continuously. Cook on medium heat for 15-20 minutes, stirring frequently.",
        time: "20 mins"
      },
      {
        step: 5,
        title: "Final Touch",
        description: "The curry is ready when it thickens and oil starts to separate. Garnish with fresh coriander and serve hot.",
        time: "2 mins"
      }
    ],
    tips: [
      "Stir continuously to prevent lumps from forming",
      "Use sour curd for better taste",
      "Add water if the curry becomes too thick",
      "Serve with steamed rice or fresh roti"
    ],
    nutrition: {
      calories: 220,
      protein: "12g",
      carbs: "28g",
      fat: "8g",
      fiber: "6g"
    }
  }
};
