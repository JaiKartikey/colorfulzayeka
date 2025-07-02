
import { Recipe } from '@/types/Recipe'; 

export const nonVegRecipes: { [key: string]: Recipe } = {
  'chicken-curry': {
    id: 1,
    name: 'Chicken Curry',
    description: 'Rich and aromatic chicken curry with traditional spices and coconut milk',
    image: '/nonveg-butter-chicken.jpg',
    totalTime: '1 hour 15 minutes',
    prepTime: '30 minutes',
    cookTime: '45 minutes',
    servings: 4,
    serves: 4,
    difficulty: 'Medium',
    rating: 4.7,
    reviews: 312,
    category: 'Main Course',
    ingredients: [
      { item: 'Chicken, cut into pieces', amount: '1 kg' },
      { item: 'Onions, sliced', amount: '2 large' },
      { item: 'Tomatoes, chopped', amount: '3 medium' },
      { item: 'Ginger-garlic paste', amount: '2 tbsp' },
      { item: 'Coconut milk', amount: '1 cup' },
      { item: 'Red chili powder', amount: '2 tsp' },
      { item: 'Turmeric powder', amount: '1 tsp' },
      { item: 'Coriander powder', amount: '2 tsp' },
      { item: 'Garam masala', amount: '1 tsp' },
      { item: 'Cumin seeds', amount: '1 tsp' },
      { item: 'Curry leaves', amount: '10-12' },
      { item: 'Green chilies', amount: '3-4' },
      { item: 'Coconut oil', amount: '3 tbsp' },
      { item: 'Salt', amount: 'to taste' },
      { item: 'Fresh coriander', amount: 'for garnish' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Marinate chicken',
        time: '15 minutes',
        description: 'Clean chicken pieces and marinate with turmeric, red chili powder, and salt. Let it rest for 15 minutes.'
      },
      {
        step: 2,
        title: 'Sauté aromatics',
        time: '10 minutes',
        description: 'Heat coconut oil in a heavy-bottomed pan. Add cumin seeds, curry leaves, and green chilies. Add sliced onions and cook until golden brown.'
      },
      {
        step: 3,
        title: 'Add spices',
        time: '5 minutes',
        description: 'Add ginger-garlic paste and cook for 2 minutes. Add remaining spices and cook until fragrant.'
      },
      {
        step: 4,
        title: 'Cook chicken',
        time: '20 minutes',
        description: 'Add marinated chicken pieces and cook on high heat for 5-7 minutes. Add tomatoes and cook until they break down completely.'
      },
      {
        step: 5,
        title: 'Simmer with coconut milk',
        time: '15 minutes',
        description: 'Pour coconut milk and bring to a boil. Reduce heat and simmer for 15-20 minutes until chicken is tender and gravy thickens. Garnish with fresh coriander and serve hot with rice.'
      }
    ],
    nutrition: {
      calories: 420,
      protein: '35g',
      carbs: '12g',
      fat: '28g',
      fiber: '3g'
    },
    tips: [
      'Use fresh coconut milk for better taste',
      'Don\'t skip marination time',
      'Adjust spice levels according to preference'
    ]
  },
  'mutton-biryani': {
    id: 2,
    name: 'Mutton Biryani',
    description: 'Aromatic long-grain rice layered with tender mutton and fragrant spices',
    image: '/nonveg-rogan-josh.png',
    totalTime: '2 hours 30 minutes',
    prepTime: '1 hour 30 minutes',
    cookTime: '1 hour',
    servings: 6,
    serves: 6,
    difficulty: 'Hard',
    rating: 4.9,
    reviews: 287,
    category: 'Main Course',
    ingredients: [
      { item: 'Mutton, cut into pieces', amount: '1 kg' },
      { item: 'Basmati rice', amount: '500g' },
      { item: 'Yogurt', amount: '1 cup' },
      { item: 'Onions, sliced', amount: '4 large' },
      { item: 'Ginger-garlic paste', amount: '3 tbsp' },
      { item: 'Red chili powder', amount: '2 tsp' },
      { item: 'Turmeric powder', amount: '1 tsp' },
      { item: 'Biryani masala powder', amount: '2 tbsp' },
      { item: 'Saffron soaked in milk', amount: '1/2 cup' },
      { item: 'Mint leaves', amount: '1 cup' },
      { item: 'Coriander leaves', amount: '1 cup' },
      { item: 'Whole spices (bay leaves, cardamom, cinnamon, cloves)', amount: '1 set' },
      { item: 'Ghee', amount: '1/2 cup' },
      { item: 'Oil', amount: '1/4 cup' },
      { item: 'Salt', amount: 'to taste' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Marinate mutton',
        time: '1 hour',
        description: 'Marinate mutton with yogurt, half the ginger-garlic paste, red chili powder, turmeric, and salt. Let it marinate for at least 1 hour.'
      },
      {
        step: 2,
        title: 'Fry onions',
        time: '15 minutes',
        description: 'Deep fry sliced onions until golden brown and crispy. Reserve some for garnishing and crush the rest.'
      },
      {
        step: 3,
        title: 'Cook mutton',
        time: '45 minutes',
        description: 'Cook marinated mutton with remaining ginger-garlic paste and crushed fried onions until 80% done.'
      },
      {
        step: 4,
        title: 'Parboil rice',
        time: '15 minutes',
        description: 'Boil basmati rice with whole spices and salt until 70% cooked. Drain and set aside.'
      },
      {
        step: 5,
        title: 'Layer and dum cook',
        time: '1 hour',
        description: 'Layer the mutton and rice alternately. Sprinkle saffron milk, mint, coriander, remaining fried onions, and ghee. Cover tightly and cook on dum for 45 minutes. Rest for 15 minutes before opening. Serve hot with raita and shorba.'
      }
    ],
    nutrition: {
      calories: 520,
      protein: '28g',
      carbs: '65g',
      fat: '18g',
      fiber: '2g'
    },
    tips: [
      'Use aged basmati rice for best results',
      'Don\'t skip the dum cooking process',
      'Let it rest after cooking for flavors to meld'
    ]
  },
  'fish-fry': {
    id: 3,
    name: 'Bengali Fish Fry',
    description: 'Crispy golden fish fillets marinated in turmeric and spices, perfectly fried',
    image: '/nonveg-fish-fry.jpg',
    totalTime: '45 minutes',
    prepTime: '30 minutes',
    cookTime: '15 minutes',
    servings: 4,
    serves: 4,
    difficulty: 'Easy',
    rating: 4.5,
    reviews: 198,
    category: 'Appetizer',
    ingredients: [
      { item: 'Fish fillets (rohu or catla)', amount: '500g' },
      { item: 'Turmeric powder', amount: '1 tsp' },
      { item: 'Red chili powder', amount: '1 tsp' },
      { item: 'Ginger-garlic paste', amount: '1 tbsp' },
      { item: 'Lemon juice', amount: '2 tbsp' },
      { item: 'Rice flour', amount: '2 tbsp' },
      { item: 'Cornflour', amount: '1 tbsp' },
      { item: 'Ajwain (carom seeds)', amount: '1/2 tsp' },
      { item: 'Mustard oil', amount: 'for frying' },
      { item: 'Salt', amount: 'to taste' },
      { item: 'Onion slices', amount: 'for serving' },
      { item: 'Green chilies', amount: 'for serving' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Clean and cut fish',
        time: '10 minutes',
        description: 'Clean fish fillets thoroughly and cut into medium-sized pieces. Pat dry with paper towels.'
      },
      {
        step: 2,
        title: 'Marinate fish',
        time: '20 minutes',
        description: 'Mix turmeric, red chili powder, ginger-garlic paste, lemon juice, and salt. Marinate fish pieces with this mixture for 20 minutes.'
      },
      {
        step: 3,
        title: 'Prepare coating',
        time: '5 minutes',
        description: 'Mix rice flour, cornflour, and ajwain. Coat the marinated fish pieces with this flour mixture.'
      },
      {
        step: 4,
        title: 'Heat oil',
        time: '5 minutes',
        description: 'Heat mustard oil in a deep pan until it reaches the right temperature for frying.'
      },
      {
        step: 5,
        title: 'Fry fish',
        time: '10 minutes',
        description: 'Gently slide fish pieces into hot oil and fry until both sides are golden brown and crispy. Remove and drain on paper towels. Serve hot with onion slices, green chilies, and lemon wedges.'
      }
    ],
    nutrition: {
      calories: 280,
      protein: '25g',
      carbs: '8g',
      fat: '16g',
      fiber: '1g'
    },
    tips: [
      'Use fresh fish for best taste',
      'Don\'t overcrowd the pan while frying',
      'Serve immediately for best crispiness'
    ]
  }
};
