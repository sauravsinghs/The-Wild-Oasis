import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gwsuyuixkaamgqnwjyts.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3c3V5dWl4a2FhbWdxbndqeXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMzAwNzcsImV4cCI6MjA2NDcwNjA3N30.BeZszmHCqB0cizvQ7x9wVHij_Iuf5BcrKiISr6GmAw8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
