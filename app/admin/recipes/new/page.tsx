"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";

export default function NewRecipePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [emoji, setEmoji] = useState("");
  const [note, setNote] = useState("");
  const [tags, setTags] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setError("");
  setSaving(true);

  const supabase = createClient();

  // Create the recipe first
  const { data: recipe, error: recipeError } = await supabase
    .from("recipes")
    .insert({
      name,
      category: category || null,
      calories: calories || null,
      protein: protein || null,
      emoji: emoji || null,
      note: note || null,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      ingredients: ingredients
        .split("\n")
        .map((ingredient) => ingredient.trim())
        .filter(Boolean),
      image_url: null,
    })
    .select()
    .single();

  if (recipeError) {
    setError(recipeError.message);
    setSaving(false);
    return;
  }

  // Upload image if one was selected
  if (imageFile) {
    const fileExtension = imageFile.name.split(".").pop() || "jpg";

    const filePath = `${recipe.id}/${crypto.randomUUID()}.${fileExtension}`;

    const { error: uploadError } = await supabase.storage
      .from("recipe-images")
      .upload(filePath, imageFile, {
        contentType: imageFile.type,
        upsert: false,
      });

    if (uploadError) {
      setError(
        `Recipe was created, but the image could not be uploaded: ${uploadError.message}`
      );
      setSaving(false);
      return;
    }

    // Get the public URL
    const {
      data: { publicUrl },
    } = supabase.storage
      .from("recipe-images")
      .getPublicUrl(filePath);

    // Save image URL to recipe
    const { error: updateError } = await supabase
      .from("recipes")
      .update({
        image_url: publicUrl,
      })
      .eq("id", recipe.id);

    if (updateError) {
      setError(
        `Recipe was created and image uploaded, but the image URL could not be saved: ${updateError.message}`
      );
      setSaving(false);
      return;
    }
  }

  router.push("/admin");
  router.refresh();
};

  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-3xl">
        <button
          onClick={() => router.push("/admin")}
          className="mb-8 font-caveat text-xl text-[#9b8cd6]"
        >
          ← back to cookbook
        </button>

        <p className="font-sacramento text-5xl text-[#9b8cd6]">
          my little cookbook
        </p>

        <h1 className="mt-2 font-newsreader text-5xl font-semibold text-[#3e3e4b]">
          add a recipe
        </h1>

        <p className="mt-3 font-caveat text-2xl text-zinc-500">
          a new page for the cookbook ♡
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl bg-white/80 p-6 shadow-lg md:p-8"
        >
          <div>
            <label className="mb-2 block font-inter text-sm text-zinc-600">
              recipe name *
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. creamy tomato pasta"
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-inter text-sm text-zinc-600">
                category
              </label>

              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Meal / Breakfast / Snack"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
              />
            </div>

            <div>
              <label className="mb-2 block font-inter text-sm text-zinc-600">
                emoji
              </label>

              <input
                value={emoji}
                onChange={(e) => setEmoji(e.target.value)}
                placeholder="🍝"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block font-inter text-sm text-zinc-600">
                calories
              </label>

              <input
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                placeholder="350-400"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
              />
            </div>

            <div>
              <label className="mb-2 block font-inter text-sm text-zinc-600">
                protein
              </label>

              <input
                value={protein}
                onChange={(e) => setProtein(e.target.value)}
                placeholder="25 g"
                className="w-full rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-inter text-sm text-zinc-600">
              tags
            </label>

            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="quick, high protein, vegetarian"
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
            />

            <p className="mt-1 font-inter text-xs text-zinc-400">
              separate tags with commas
            </p>
          </div>

          <div>
            <label className="mb-2 block font-inter text-sm text-zinc-600">
              ingredients
            </label>

            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={8}
              placeholder={"1 cup pasta\n1/2 cup tomato sauce\n50 g paneer"}
              className="w-full resize-y rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
            />

            <p className="mt-1 font-inter text-xs text-zinc-400">
              one ingredient per line
            </p>
          </div>

          <div>
            <label className="mb-2 block font-inter text-sm text-zinc-600">
              note
            </label>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={4}
              placeholder="a little note about this recipe..."
              className="w-full resize-y rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
            />
          </div>

          <div>
  <label className="mb-2 block font-inter text-sm text-zinc-600">
    recipe image
  </label>

  <input
    type="file"
    accept="image/jpeg,image/png,image/webp"
    onChange={(e) => {
      const file = e.target.files?.[0] ?? null;

      setImageFile(file);

      if (file) {
        setImagePreview(URL.createObjectURL(file));
      } else {
        setImagePreview("");
      }
    }}
    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 font-inter text-sm"
  />

  <p className="mt-1 font-inter text-xs text-zinc-400">
    JPG, PNG or WebP
  </p>

  {imagePreview && (
    <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
      <img
        src={imagePreview}
        alt="Recipe preview"
        className="h-64 w-full object-cover"
      />
    </div>
  )}
</div>

          {error && (
            <div className="rounded-xl bg-red-50 p-4 font-inter text-sm text-red-500">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={saving}
            className="w-full rounded-xl bg-[#9b8cd6] py-3 font-inter text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {saving ? "saving recipe..." : "save recipe ♡"}
          </button>

          
        </form>
        
      </div>
    </main>
  );
}