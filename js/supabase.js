
const SUPABASE_URL = "https://pxtdxkhsnmckspscelxu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_fkRyDL8X61dX8-Bam27LrA_iJGvyk3Y";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

