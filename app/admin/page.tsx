import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import AdminRecipeList from "@/components/AdminRecipeList";

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  const { data: adminUser } = await supabase
    .from("admin_users")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!adminUser) {
    redirect("/admin/login");
  }

  const { data: recipes, error } = await supabase
    .from("recipes")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className="min-h-screen px-6 py-12 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="font-sacramento text-5xl text-[#9b8cd6]">
            my little cookbook
          </p>

          <h1 className="mt-2 font-newsreader text-5xl font-semibold text-[#3e3e4b] md:text-6xl">
            vee space
          </h1>

          <p className="mt-3 font-caveat text-2xl text-zinc-500">
            my corner ♡
          </p>

          <p className="mt-2 font-inter text-sm text-zinc-400">
            logged in as {user.email}
          </p>
        </div>

        <AdminRecipeList initialRecipes={recipes ?? []} />
      </div>
    </main>
  );
}