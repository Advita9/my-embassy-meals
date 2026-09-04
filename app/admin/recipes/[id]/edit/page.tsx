"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
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

export default function EditRecipePage() {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [emoji, setEmoji] = useState("");
  const [tags, setTags] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [note, setNote] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [existingImageUrl, setExistingImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function loadRecipe() {
      const supabase = createClient();

      const { data, error } = await supabase
        .from("recipes")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
        return;
      }

      const recipe = data as Recipe;

      setName(recipe.name ?? "");
      setCategory(recipe.category ?? "");
      setCalories(recipe.calories ?? "");
      setProtein(recipe.protein ?? "");
      setEmoji(recipe.emoji ?? "");
      setTags(recipe.tags?.join(", ") ?? "");
      setIngredients(recipe.ingredients?.join("\n") ?? "");
      setNote(recipe.note ?? "");
      setExistingImageUrl(recipe.image_url ?? null);

      setLoading(false);
    }

    loadRecipe();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setError("");
  setSaving(true);

  const supabase = createClient();

  let imageUrl = existingImageUrl;

  // Upload new image if one was selected
  if (imageFile) {
    const fileExtension = imageFile.name.split(".").pop() || "jpg";

    const filePath = `${id}/${crypto.randomUUID()}.${fileExtension}`;

    const { error: uploadError } = await supabase.storage
      .from("recipe-images")
      .upload(filePath, imageFile, {
        contentType: imageFile.type,
        upsert: false,
      });

    if (uploadError) {
      setError(`Could not upload image: ${uploadError.message}`);
      setSaving(false);
      return;
    }

    const {
      data: { publicUrl },
    } = supabase.storage
      .from("recipe-images")
      .getPublicUrl(filePath);

    imageUrl = publicUrl;
  }

  const { error: updateError } = await supabase
    .from("recipes")
    .update({
      name,
      category: category || null,
      calories: calories || null,
      protein: protein || null,
      emoji: emoji || null,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      ingredients: ingredients
        .split("\n")
        .map((ingredient) => ingredient.trim())
        .filter(Boolean),
      note: note || null,
      image_url: imageUrl,
    })
    .eq("id", id);

  if (updateError) {
    setError(updateError.message);
    setSaving(false);
    return;
  }

  router.push("/admin");
  router.refresh();
};

  if (loading) {
    return (
      <main className="min-h-screen px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="font-caveat text-2xl text-zinc-400">
            loading recipe...
          </p>
        </div>
      </main>
    );
  }

  if (error && !name) {
    return (
      <main className="min-h-screen px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <button
            onClick={() => router.push("/admin")}
            className="mb-8 font-caveat text-xl text-[#9b8cd6]"
          >
            ← back to cookbook
          </button>

          <div className="rounded-2xl bg-red-50 p-6 font-inter text-red-500">
            Could not load recipe: {error}
          </div>
        </div>
      </main>
    );
  }

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
          edit recipe
        </h1>

        <p className="mt-3 font-caveat text-2xl text-zinc-500">
          make it even better ♡
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl bg-white/80 p-6 shadow-lg md:p-8"
        >
          {/* NAME */}

          <div>
            <label className="mb-2 block font-inter text-sm text-zinc-600">
              recipe name *
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
            />
          </div>

          {/* CATEGORY + EMOJI */}

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

          {/* CALORIES + PROTEIN */}

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

          {/* TAGS */}

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

          {/* INGREDIENTS */}

          <div>
            <label className="mb-2 block font-inter text-sm text-zinc-600">
              ingredients
            </label>

            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={8}
              className="w-full resize-y rounded-xl border border-zinc-200 px-4 py-3 font-inter outline-none focus:border-[#9b8cd6]"
            />

            <p className="mt-1 font-inter text-xs text-zinc-400">
              one ingredient per line
            </p>
          </div>

          

          {/* NOTE */}

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

          {error && (
            <div className="rounded-xl bg-red-50 p-4 font-inter text-sm text-red-500">
              {error}
            </div>
          )}
          <div>
  <label className="mb-2 block font-inter text-sm text-zinc-600">
    recipe image
  </label>

  {(imagePreview || existingImageUrl) && (
    <div className="mb-4 overflow-hidden rounded-2xl border border-zinc-200">
      <img
        src={imagePreview || existingImageUrl || ""}
        alt={name || "Recipe image"}
        className="h-64 w-full object-cover"
      />
    </div>
  )}

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
    Choose a new image to replace the current one. JPG, PNG or WebP.
  </p>
</div>

          {/* ACTIONS */}

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 rounded-xl bg-[#9b8cd6] py-3 font-inter text-white transition hover:opacity-90 disabled:opacity-50"
            >
              {saving ? "saving changes..." : "save changes ♡"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/admin")}
              className="rounded-xl border border-zinc-200 px-6 py-3 font-inter text-zinc-500 transition hover:bg-zinc-50"
            >
              cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}