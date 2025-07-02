import { Recipe } from '@/types/Recipe'; 


export const sweetRecipes: { [key: string]: Recipe } = {
  'gulab-jamun': {
    id: 1,
    name: 'Gulab Jamun',
    description: 'Soft, spongy milk dumplings soaked in aromatic sugar syrup, the ultimate Indian dessert',
    image: '/sweets-gulabjamun.jpg',
    totalTime: '1 hour 30 minutes',
    prepTime: '30 minutes',
    cookTime: '1 hour',
    servings: 6,
    serves: 6,
    difficulty: 'Medium',
    rating: 4.8,
    reviews: 245,
    category: 'Dessert',
    ingredients: [
      { item: 'Milk powder', amount: '1 cup' },
      { item: 'All-purpose flour', amount: '2 tbsp' },
      { item: 'Semolina', amount: '1 tbsp' },
      { item: 'Baking soda', amount: '1/4 tsp' },
      { item: 'Milk', amount: '3-4 tbsp' },
      { item: 'Ghee', amount: '1 tbsp' },
      { item: 'Sugar', amount: '2 cups' },
      { item: 'Water', amount: '2 cups' },
      { item: 'Cardamom pods', amount: '4-5' },
      { item: 'Rose water', amount: '1 tsp' },
      { item: 'Saffron strands', amount: 'pinch' },
      { item: 'Oil for frying', amount: 'as needed' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Make sugar syrup',
        time: '15 minutes',
        description: 'Combine sugar, water, cardamom pods, and saffron in a pan. Bring to boil and simmer until slightly sticky. Add rose water and keep warm.'
      },
      {
        step: 2,
        title: 'Prepare dough',
        time: '10 minutes',
        description: 'Mix milk powder, flour, semolina, and baking soda. Add ghee and gradually add milk to form a soft dough. Rest for 10 minutes.'
      },
      {
        step: 3,
        title: 'Shape jamuns',
        time: '10 minutes',
        description: 'Divide dough into small portions and roll into smooth balls without cracks.'
      },
      {
        step: 4,
        title: 'Heat oil',
        time: '5 minutes',
        description: 'Heat oil to medium temperature. The oil should not be too hot or the jamuns will brown quickly without cooking inside.'
      },
      {
        step: 5,
        title: 'Fry and soak',
        time: '25 minutes',
        description: 'Gently slide jamuns into oil and fry on low-medium heat until golden brown. Immediately transfer to warm sugar syrup. Let them soak for at least 30 minutes before serving.'
      }
    ],
    nutrition: {
      calories: 280,
      protein: '6g',
      carbs: '45g',
      fat: '12g',
      fiber: '1g'
    },
    tips: [
      'Keep oil temperature moderate to ensure even cooking',
      'Don\'t skip the resting time for dough',
      'Jamuns taste better after soaking overnight'
    ]
  },
  'rasgulla': {
    id: 2,
    name: 'Rasgulla',
    description: 'Spongy cottage cheese balls cooked in sugar syrup, a Bengali delicacy',
    image: '/sweets-rasgulla.jpg',
    totalTime: '1 hour 45 minutes',
    prepTime: '45 minutes',
    cookTime: '1 hour',
    servings: 6,
    serves: 6,
    difficulty: 'Hard',
    rating: 4.6,
    reviews: 189,
    category: 'Dessert',
    ingredients: [
      { item: 'Full-fat milk', amount: '1 liter' },
      { item: 'Lemon juice', amount: '3 tbsp' },
      { item: 'Sugar', amount: '1.5 cups' },
      { item: 'Water', amount: '4 cups' },
      { item: 'Cardamom powder', amount: '1/2 tsp' },
      { item: 'Rose water', amount: '1 tsp' },
      { item: 'Ice cubes', amount: 'as needed' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Make paneer',
        time: '20 minutes',
        description: 'Boil milk and add lemon juice to curdle. Strain through muslin cloth and rinse under cold water to remove lemony taste.'
      },
      {
        step: 2,
        title: 'Knead paneer',
        time: '15 minutes',
        description: 'Squeeze out excess water and knead the paneer for 8-10 minutes until smooth and soft.'
      },
      {
        step: 3,
        title: 'Shape balls',
        time: '10 minutes',
        description: 'Divide paneer into small portions and roll into smooth, crack-free balls.'
      },
      {
        step: 4,
        title: 'Boil sugar syrup',
        time: '5 minutes',
        description: 'In a wide pan, boil sugar and water. Add cardamom powder.'
      },
      {
        step: 5,
        title: 'Cook rasgullas',
        time: '20 minutes',
        description: 'Gently add paneer balls to boiling syrup. Cover and cook for 15-20 minutes. They will double in size. Add rose water and cool. Serve chilled.'
      }
    ],
    nutrition: {
      calories: 160,
      protein: '8g',
      carbs: '28g',
      fat: '4g',
      fiber: '0g'
    },
    tips: [
      'Kneading paneer well is crucial for spongy texture',
      'Use wide pan to give rasgullas space to expand',
      'Don\'t open lid frequently while cooking'
    ]
  },
  'kheer': {
    id: 3,
    name: 'Rice Kheer',
    description: 'Creamy rice pudding cooked in milk with aromatic spices and nuts',
    image: '/sweets-kheer.jpg',
    totalTime: '1 hour',
    prepTime: '10 minutes',
    cookTime: '50 minutes',
    servings: 4,
    serves: 4,
    difficulty: 'Easy',
    rating: 4.7,
    reviews: 156,
    category: 'Dessert',
    ingredients: [
      { item: 'Basmati rice', amount: '1/3 cup' },
      { item: 'Full-fat milk', amount: '1 liter' },
      { item: 'Sugar', amount: '1/2 cup' },
      { item: 'Cardamom powder', amount: '1/2 tsp' },
      { item: 'Almonds, chopped', amount: '2 tbsp' },
      { item: 'Pistachios, chopped', amount: '2 tbsp' },
      { item: 'Raisins', amount: '2 tbsp' },
      { item: 'Saffron strands', amount: 'pinch' },
      { item: 'Ghee', amount: '1 tbsp' },
      { item: 'Rose water', amount: '1 tsp' }
    ],
    instructions: [
      {
        step: 1,
        title: 'Prepare rice',
        time: '5 minutes',
        description: 'Wash and soak basmati rice for 30 minutes. Drain and set aside.'
      },
      {
        step: 2,
        title: 'Boil milk',
        time: '10 minutes',
        description: 'In a heavy-bottomed pan, bring milk to boil. Reduce heat to medium-low.'
      },
      {
        step: 3,
        title: 'Add rice',
        time: '30 minutes',
        description: 'Add soaked rice to milk and cook, stirring occasionally, until rice is completely soft and milk has reduced by half.'
      },
      {
        step: 4,
        title: 'Add sweetener',
        time: '10 minutes',
        description: 'Add sugar, cardamom powder, and saffron. Cook for another 5-7 minutes until sugar dissolves completely.'
      },
      {
        step: 5,
        title: 'Garnish and serve',
        time: '5 minutes',
        description: 'Heat ghee and fry nuts and raisins until golden. Add to kheer along with rose water. Serve hot or chilled, garnished with more nuts.'
      }
    ],
    nutrition: {
      calories: 220,
      protein: '9g',
      carbs: '35g',
      fat: '8g',
      fiber: '1g'
    },
    tips: [
      'Stir frequently to prevent milk from sticking',
      'Adjust consistency with milk if too thick',
      'Tastes even better the next day'
    ]
  }
};
