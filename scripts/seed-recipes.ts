import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
import { createClient } from "@supabase/supabase-js";
import { recipes } from "../data/recipes";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!
);

async function seedRecipes() {
  console.log(`Seeding ${recipes.length} recipes...`);

  const rows = recipes.map((recipe) => ({
    name: recipe.name,
    category: recipe.category,
    calories: recipe.calories,
    protein: recipe.protein,
    tags: recipe.tags,
    note: recipe.note,
    emoji: recipe.emoji,
    ingredients: recipe.ingredients,
    image_url: null,
  }));

  const { data, error } = await supabase
    .from("recipes")
    .insert(rows)
    .select();

  if (error) {
    console.error("Failed to seed recipes:");
    console.error(error);
    process.exit(1);
  }

  console.log(`Successfully inserted ${data.length} recipes!`);
}

seedRecipes();