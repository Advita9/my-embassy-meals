export interface Recipe {
  id: number;
  name: string;
  category: "Breakfast" | "Meal" | "Snack" | "Dessert";
  calories: string;
  protein: string;
  servings?: string;
  tags: string[];
  note: string;
  emoji?: string;
  rotation: string;
  tapeColor: string;
  ingredients: string[];
  
}

export const recipes: Recipe[] = [

    {
        id: 1,
        name: "Rainbow Buddha Bowl",
        category: "Meal",
        calories: "360-400",
        protein: "26 g",
        tags: ["High Protein", "Vegetarian"],
        note: "gym day favourite",
        emoji: "🌈",
        rotation: "-rotate-2",
        tapeColor: "bg-pink-200",
        ingredients: [
            "Lettuce",
            "Stir fried tempeh (100 g)",
            "Kidney beans (100 g)",
            "Beetroot tzatziki: Greek yoghurt (1/2 pack), salt, pepper, garlic powder, oregano, lemon juice (1 tsp), raw grated beetroot",
            "Basil pesto (1-2 tsp)",
            "Crumbled feta (2 tsp)"
        ]
        },

        {
        id: 2,
        name: "Tempeh Pesto Smash",
        category: "Meal",
        calories: "420-450",
        protein: "~28 g",
        tags: ["High Protein"],
        note: "post workout",
        emoji: "🌿",
        rotation: "rotate-1",
        tapeColor: "bg-purple-200",
        ingredients: [
            "Pan fried tandoori tempeh minced: add pepper, garlic powder, oregano (100 g)",
            "Basil pesto (1 tsp)",
            "Brown bread (2 slices)",
            "Cheese (1 slice)",
            "Lettuce",
            "Crumbled feta (2 tsp)",
            "Olives"
        ]
        },

        {
        id: 3,
        name: "Warm Dimsum Salad",
        category: "Meal",
        calories: "260",
        protein: "8 g",
        tags: ["Quick Meal"],
        note: "lazy day lunch",
        emoji: "🥗", 
        rotation: "-rotate-1",
        tapeColor: "bg-rose-200",
        ingredients: [
            "Pan fried dimsums (5): garlic butter, garlic powder",
            "Lettuce",
            "Grated beetroot",
            "Shredded carrot",
            "Dressing option 1 (spicy asian): Greek yoghurt, schezwan sauce, soy sauce, lemon juice, garlic powder, salt pepper",
            "Dressing option 2 (tandoori): tandoori seasoning, Greek yoghurt"
        ]
        },

        {
        id: 4,
        name: "Chocolate Dough",
        category: "Dessert",
        calories: "180",
        protein: "30 g",
        tags: ["High Protein", "Sweet"],
        note: "sweet tooth fix",
        emoji: "🍫",
        rotation: "rotate-2",
        tapeColor: "bg-fuchsia-200",
        ingredients: [
            "Greek yoghurt (1 pack)",
            "Chocolate protein powder (1 scoop)",
            "Vanilla essence (1/2 tsp)",
            "Optional: cocoa powder"
        ]
        },

        {
        id: 5,
        name: "Chocolate Protein Pancakes",
        category: "Breakfast",
        calories: "500",
        protein: "48-50 g",
        tags: ["High Protein"],
        note: "weekend breakfast",
        emoji: "🥞", 
        rotation: "-rotate-2",
        tapeColor: "bg-violet-200",
        ingredients: [
            "Eggs (2)",
            "Chocolate protein powder (1 scoop)",
            "Vanilla essence (1 tsp)",
            "Cocoa powder (2 tsp)",
            "Stevia (1 sachet)",
            "Almond milk (consistency)",
            "Greek yoghurt (1 pack)",
            "Instant oats (40-50 g)",
            "Baking powder (1/2 tsp)",
            "Pinch of salt"
        ]
        },

        {
        id: 6,
        name: "Warm Protein Oatmeal",
        category: "Breakfast",
        calories: "350",
        protein: "38 g",
        tags: ["High Protein"],
        note: "rainy morning comfort",
        emoji: "🥣",
        rotation: "rotate-1",
        tapeColor: "bg-pink-100",
        ingredients: [
            "Rolled oats (40-50 g)",
            "Chocolate protein powder (1 scoop)",
            "Vanilla essence (1 tsp)",
            "Cocoa powder (2 tsp)",
            "Stevia (1 sachet)",
            "Almond milk (consistency)",
            "Greek yoghurt (1 pack)",
            "Pinch of salt",
            "Caramel coffee powder (optional) (1 sachet)"
        ]
        },

        {
            id: 7,
            name: "Creamy Baked Beans",
            category: "Snack",
            calories: "130-150",
            protein: "6-7 g",
            tags: ["Comfort Food"],
            note: "cold weather snack",
            emoji: "🫘",
            rotation: "-rotate-1",
            tapeColor: "bg-purple-100",
            ingredients: [
                "Baked beans (100 g)",
                "Cheese slice (half)",
                "Salt",
                "Pepper",
                "Garlic powder",
                "Almond milk (1-2 tsp)"
            ]
            },

            {
            id: 8,
            name: "Beans Club",
            category: "Meal",
            calories: "350-380",
            protein: "~20 g",
            tags: ["High Protein", "Vegetarian"],
            note: "study fuel",
            emoji: "🥪",
            rotation: "rotate-2",
            tapeColor: "bg-pink-200",
            ingredients: [
                "Kidney beans mash: salt, pepper, garlic powder, oregano (130 g)",
                "Healthy tandoori mayo: Greek yoghurt (1/2 pack), tandoori masala, pepper, garlic powder, oregano, lemon juice (1 tsp)",
                "Brown bread",
                "Cheese slice",
                "Lettuce",
                "Feta",
                "Olives"
            ]
            },

            {
            id: 9,
            name: "Basic Protein Shake",
            category: "Snack",
            calories: "200-220",
            protein: "~30 g",
            tags: ["High Protein"],
            note: "on the go",
            emoji: "🥤",
            rotation: "-rotate-2",
            tapeColor: "bg-violet-100",
            ingredients: [
                "Almond milk (200 ml)",
                "Greek yoghurt (1 pack)",
                "Chocolate protein powder (1 scoop)",
                "Vanilla essence (1 tsp)",
                "Cocoa powder (1-2 tsp)",
                "Ice (optional)"
            ]
            },

            {
            id: 10,
            name: "Overnight Chia Seed Pudding",
            category: "Breakfast",
            calories: "330",
            protein: "15 g",
            tags: ["Meal Prep"],
            note: "made last night",
            emoji: "🍮",
            rotation: "rotate-1",
            tapeColor: "bg-rose-100",
            ingredients: [
                "Chia seeds (3 tbsp / 30 g)",
                "Almond milk (200 ml)",
                "Rolled oats (25 g)",
                "Salt (a pinch)",
                "Stevia (2 sachets + 2 tsp water)",
                "Flavour 1 (plain cinnamon): cinnamon (½ tsp)",
                "Flavour 2 (vanilla): vanilla extract (1 tsp)",
                "Flavour 3 (chocolate): cocoa powder (1-2 tsp)",
                "Flavour 4 (coffee): caramel / hazelnut / vanilla coffee powder (1 sachet / 1 tsp)"
            ]
            },

            {
            id: 11,
            name: "Pesto Grilled Cheese",
            category: "Meal",
            calories: "~350",
            protein: "~14 g",
            tags: ["Comfort Food"],
            note: "cafe vibes",
            emoji: "🧀",
            rotation: "-rotate-1",
            tapeColor: "bg-lime-100",
            ingredients: [
                "Sourdough / sandwich bread (2 slices)",
                "Pesto sauce: 50 g basil leaves, 1 tbsp olive oil, 1 tbsp water, ¼ cup / 6-7 walnuts, 1 cheese cube, salt, 5 cloves garlic",
                "Tomato (2-3 slices)",
                "Oregano",
                "Chili flakes",
                "Cheese (1 cube)",
                "Burnt garlic strips (2 cloves)",
                "Salt"
            ]
            },

            {
                id: 12,
                name: "Avo Cheese Toast",
                category: "Meal",
                calories: "~300",
                protein: "~10 g",
                servings: "2 servings",
                tags: ["Brunch"],
                note: "weekend brunch",
                emoji: "🥑",
                rotation: "rotate-2",
                tapeColor: "bg-green-100",
                ingredients: [
                    "Sourdough / sandwich bread (4 slices)",
                    "Guac: avocado (~160 g), lemon juice (1 tsp), salt, pepper, oregano, garlic powder",
                    "Cheese (2 slices)",
                    "Tandoori seasoning",
                    "Chopped olives (~8 pitted)"
                ]
                },

            {
            id: 13,
            name: "Chilli Paneer Fried Rice",
            category: "Meal",
            calories: "~550",
            protein: "25 g",
            tags: ["Dinner", "Meal Prep"],
            note: "fake takeout night",
            emoji: "🍚",
            rotation: "-rotate-2",
            tapeColor: "bg-orange-100",
            ingredients: [
                "Boiled rice (1 cup)",
                "Paneer (100 g)",
                "Onion (1 small cubed)",
                "Capsicum (1 small cubed)",
                "Ginger garlic paste (1 tbsp)",
                "Tandoori seasoning (coat paneer and pan fry)",
                "Corn flour / maida slurry (1 tbsp + 2-3 tbsp water)",
                "Salt",
                "Soy sauce (3-4 tsp)",
                "Schezwan (2 tsp)",
                "Ketchup (2 tsp)",
                "Vinegar (2 tsp)",
                "Sugar (1 tsp)"
            ]
            },

            {
            id: 14,
            name: "Cheesy Mexican Casserole",
            category: "Meal",
            calories: "~450-500",
            protein: "~20 g",
            servings: "2 servings",
            tags: ["Meal Prep"],
            note: "feeds future me",
            emoji: "🌮",
            rotation: "rotate-1",
            tapeColor: "bg-yellow-100",
            ingredients: [
                "Boiled rice (1.5-2 cups) / raw rice",
                "Ginger garlic paste (1 tbsp)",
                "Onion (1 finely chopped)",
                "Tomatoes (2 small finely chopped)",
                "Capsicum / Bell pepper (1 finely chopped)",
                "Kidney beans (¾ cup)",
                "Baked beans (½ can)",
                "Ketchup (2 tbsp)",
                "Lemon juice (2 tsp)",
                "Salt",
                "Oregano (1-2 tbsp)",
                "Red chili powder (1 tsp)",
                "Cheese (1 cube grated)",
                "Garlic powder (1 tsp)"
            ]
            },

            {
            id: 15,
            name: "Warm Protein Chia Seed Pudding",
            category: "Breakfast",
            calories: "350",
            protein: "35 g",
            tags: ["High Protein"],
            note: "winter breakfast",
            emoji: "🥣",
            rotation: "-rotate-1",
            tapeColor: "bg-purple-200",
            ingredients: [
                "Chia seeds (30 g)",
                "Protein powder (1 scoop)",
                "Greek yoghurt (1 pack)",
                "Cinnamon (½ tsp)",
                "Cocoa powder (1-2 tsp)",
                "Stevia (2 sachets + 2 tsp water)",
                "Almond milk (200 ml)",
                "Water for consistency",
                "Vanilla extract (1 tsp)"
            ]
            },

            {
            id: 16,
            name: "Cheesy Besan Chilla",
            category: "Breakfast",
            calories: "240",
            protein: "11 g",
            servings: "2 servings",
            tags: ["Quick Meal"],
            note: "childhood comfort",
            emoji: "🧀",
            rotation: "rotate-2",
            tapeColor: "bg-amber-100",
            ingredients: [
                "Gram flour (100 g)",
                "Onion (1 small finely chopped)",
                "Tomato (1 small finely chopped)",
                "Salt (½ tsp)",
                "Turmeric powder (½ tsp)",
                "Red chili powder (½ tsp)",
                "Water (start with ½ cup, then adjust consistency)",
                "Oil for greasing",
                "Cheese (1 cube)"
            ]
            },

            {
            id: 17,
            name: "Paneer Butter Masala",
            category: "Meal",
            calories: "~400",
            protein: "~20 g",
            servings: "2 servings",
            tags: ["Comfort Food"],
            note: "feels like home",
            emoji: "🍛",
            rotation: "-rotate-2",
            tapeColor: "bg-red-100",
            ingredients: [
                "Suhana Paneer Butter Masala mix (1 pack)",
                "Paneer (200 g)",
                "Tomato puree (150 g)",
                "Water (½ cup)",
                "Ginger garlic paste (1 tbsp)",
                "Almond milk (100 ml)"
            ]
            },

            {
            id: 18,
            name: "Quick Sweet Yoghurt",
            category: "Dessert",
            calories: "60",
            protein: "6 g",
            tags: ["Quick Dessert"],
            note: "2 minute dessert",
            emoji: "🍨",
            rotation: "rotate-1",
            tapeColor: "bg-pink-100",
            ingredients: [
                "Greek yoghurt (1 pack)",
                "Cinnamon (½ tsp)",
                "Stevia (1 pellet + 1 tsp water)"
            ]
            },

            {
            id: 19,
            name: "Beans Mash Toasties",
            category: "Meal",
            calories: "~350",
            protein: "~25 g",
            tags: ["High Protein", "Budget Friendly"],
            note: "budget hero",
            emoji: "🍞",
            rotation: "-rotate-1",
            tapeColor: "bg-indigo-100",
            ingredients: [
                "Kidney beans (1 cup boiled)",
                "Salt",
                "Coriander powder (½ tsp)",
                "Cumin powder (½ tsp)",
                "Garam masala (½ tsp)",
                "Red chili powder (⅕ tsp)",
                "Turmeric (¼ tsp)",
                "Cheese (1 slice)",
                "Toast (brown bread / sourdough) (2 slices)",
                "Tandoori mix (to sprinkle on top)"
            ]
            }
            ];

    