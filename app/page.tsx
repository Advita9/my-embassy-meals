"use client";

import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "@/data/recipes";
import ScrapbookDecorations from "@/components/ScrapbookDecorations";
import PressedFlower from "@/components/PressedFlower";
import PressedFlowerMini from "@/components/PressedFlowerMini";
import PlateButton from "@/components/PlateButton";
import PlatePickerModal from "@/components/PlatePickerModal";



import { Recipe } from "@/data/recipes";



export default function Home() {

  const [showPlatePicker, setShowPlatePicker] =
    useState(false);

  const [pickedRecipe, setPickedRecipe] =
    useState<Recipe | null>(null);

  const pickRecipe = () => {
    const randomRecipe =
      recipes[Math.floor(Math.random() * recipes.length)];

    setPickedRecipe(randomRecipe);
    setShowPlatePicker(true);
  };

    

  
  return (
    <main className="min-h-screen">
      



      <ScrapbookDecorations />

      <div className="absolute left-8 top-10 rotate-[-15deg]">
  <PressedFlower />
</div>

      <div
  className="
    relative
    min-h-[720px]
    px-4
    pt-16
    text-center

    sm:min-h-0
  "
>

  <p
    className="
      font-sacramento
      text-[clamp(2.7rem,10vw,4rem)]
      text-[#9b8cd6]
      leading-none
      whitespace-nowrap
    "
  >
    my little cookbook
  </p>

  <h1
    className="
      mt-4
      font-newsreader
      text-[clamp(4.5rem,21vw,9rem)]
      leading-[0.78]
      font-semibold
      tracking-[-0.05em]
      text-[#3e3e4b]
    "
  >
    embassy
    <br />
    meals
  </h1>

  <div
    className="
      mt-10
      flex
      items-center
      justify-center
      gap-2
      px-2
    "
  >
  <PressedFlowerMini />

  <p
  className="
    font-caveat
    text-[clamp(1.5rem,5vw,1.875rem)]
    text-center
    text-zinc-600
  "
>
  postcards from my lil pantry
</p>
  <div className="scale-x-[-1]">
    <PressedFlowerMini />
  </div>

</div>

</div>
      <div className="mx-auto mt-4 w-full max-w-7xl px-4 sm:mt-16 sm:px-6 lg:px-8">

  {/* FLIP HINT */}

  <div
  className="
    mb-0

    flex
    items-center
    justify-center

    -translate-y-2

    sm:mb-2
    sm:justify-end
    sm:pr-[15rem]
    sm:translate-y-6
  "
>

    <svg
      className="
        h-16
        w-28
        shrink-0

        rotate-[8deg]

        sm:h-20
        sm:w-32
      "
      viewBox="0 0 100 80"
    >
      <path
        d="M10 70 C20 20, 60 10, 90 30"
        stroke="#3f3f46"
        strokeWidth="1.5"
        fill="none"
      />

      <path
        d="M82 24 L90 30 L75 34"
        stroke="#3f3f46"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>

    <p
      className="
        -ml-3

        font-caveat
        text-2xl
        text-zinc-700

        whitespace-nowrap

        sm:text-2xl
      "
    >
      click to flip
    </p>

  </div>


  {/* RECIPE GRID */}

  <div
    className="
      grid
      grid-cols-1
      gap-8

      md:grid-cols-2
      lg:grid-cols-3
      lg:gap-10
    "
  >

    {recipes.map((recipe) => (
      <div
        key={recipe.id}
        id={`recipe-${recipe.id}`}
      >
        <RecipeCard recipe={recipe} />
      </div>
    ))}

  </div>

</div>

      <PlateButton onClick={pickRecipe} />

      {showPlatePicker && (
        <PlatePickerModal
  recipe={pickedRecipe}
  allRecipes={recipes}
  onClose={() => setShowPlatePicker(false)}
  onPickAgain={pickRecipe}
/>
      )}

    </main>
  );
}

