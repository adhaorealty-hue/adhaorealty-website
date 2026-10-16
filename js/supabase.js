
const SUPABASE_URL = "https://pxtdxkhsnmckspscelxu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_fkRyDL8X61dX8-Bam27LrA_iJGvyk3Y";

(function () {
  if (!window.supabase) {
    console.error("Supabase CDN library failed to load.");
    return;
  }

  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log("Supabase client initialized.");
})();

