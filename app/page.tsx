import RecipeCard from "../components/RecipeCard";
import { recipes } from "@/data/recipes";
import ScrapbookDecorations from "@/components/ScrapbookDecorations";
import PressedFlower from "@/components/PressedFlower";
import PressedFlowerMini from "@/components/PressedFlowerMini";

export default function Home() {
  return (
    <main className="min-h-screen">

      <ScrapbookDecorations />

      <div className="absolute left-8 top-10 rotate-[-15deg]">
  <PressedFlower />
</div>

      <div className="pt-16 text-center relative">

<p
  className="
    font-sacramento
    text-[4rem]
    text-[#9b8cd6]
    leading-none
  "
>
  my little cookbook
</p>

  <h1
  className="
    font-newsreader
    text-[8rem]
    md:text-[9rem]
    leading-none
    font-semibold
    tracking-[-0.05em]
    text-[#3e3e4b]
  "
>
  embassy meals
</h1>

  <div
  className="
    mt-5
    flex
    items-center
    justify-center
    gap-4
  "
>

  <PressedFlowerMini />

  <p
    className="
      font-caveat
      text-3xl
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
      <div className="mx-auto mt-16 max-w-7xl px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
            />
          ))}

        </div>

      </div>

    </main>
  );
}

