"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

type Recipe = {
  id: number;
  name: string;
  category: string | null;
  calories: string | null;
  protein: string | null;
  tags: string[];
  note: string | null;
  emoji: string | null;
  ingredients: string[];
  image_url: string | null;
};

type Props = {
  initialRecipes: Recipe[];
};

export default function AdminRecipeList({ initialRecipes }: Props) {
  const router = useRouter();
  const [recipes, setRecipes] = useState(initialRecipes);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = async (id: number, name: string) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${name}"?`
    );

    if (!confirmed) return;

    setDeletingId(id);

    const supabase = createClient();

    const { error } = await supabase
      .from("recipes")
      .delete()
      .eq("id", id);

    if (error) {
      alert(`Could not delete recipe: ${error.message}`);
      setDeletingId(null);
      return;
    }

    setRecipes((current) => current.filter((recipe) => recipe.id !== id));
    setDeletingId(null);
    router.refresh();
  };

  return (
    <section>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-caveat text-xl text-[#9b8cd6]">
            {recipes.length} recipes
          </p>

          <h2 className="font-newsreader text-3xl text-[#3e3e4b]">
            your cookbook
          </h2>
        </div>

        <button
          onClick={() => router.push("/admin/recipes/new")}
          className="rounded-xl bg-[#9b8cd6] px-5 py-3 font-inter text-sm text-white shadow-sm transition hover:opacity-90"
        >
          + add recipe
        </button>
      </div>

      <div className="space-y-4">
        {recipes.map((recipe) => (
          <article
            key={recipe.id}
            className="rounded-2xl bg-white/80 p-5 shadow-md"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f5f1ff] text-2xl">
                  {recipe.emoji || "🍴"}
                </div>

                <div>
                  <h3 className="font-newsreader text-2xl text-[#3e3e4b]">
                    {recipe.name}
                  </h3>

                  <p className="mt-1 font-inter text-sm text-zinc-400">
                    {recipe.category || "Uncategorized"}
                    {recipe.calories && ` · ${recipe.calories} cal`}
                    {recipe.protein && ` · ${recipe.protein} protein`}
                  </p>

                  {recipe.tags?.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {recipe.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f5f1ff] px-2.5 py-1 font-inter text-xs text-[#8173b8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 sm:shrink-0">
                <button
                  onClick={() =>
                    router.push(`/admin/recipes/${recipe.id}/edit`)
                  }
                  className="rounded-lg border border-zinc-200 px-4 py-2 font-inter text-sm text-zinc-600 transition hover:bg-zinc-50"
                >
                  edit
                </button>

                <button
                  onClick={() => handleDelete(recipe.id, recipe.name)}
                  disabled={deletingId === recipe.id}
                  className="rounded-lg border border-red-100 px-4 py-2 font-inter text-sm text-red-400 transition hover:bg-red-50 disabled:opacity-50"
                >
                  {deletingId === recipe.id ? "deleting..." : "delete"}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}