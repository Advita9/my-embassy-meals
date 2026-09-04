import { supabase } from "@/lib/supabase";

export default async function TestSupabase() {
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .order("id");

  if (error) {
    return (
      <div className="p-10">
        <h1>Supabase Error</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1>Supabase Recipes</h1>

      <pre className="mt-5 whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}