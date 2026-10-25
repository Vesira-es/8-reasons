
console.log("SUPABASE.JS SE HA CARGADO");

const SUPABASE_URL = "https://qikqhkcuqfuoeypsmkmk.supabase.co";

const SUPABASE_KEY = "sb_publishable_e4jh_jsl_HWwo0FmRYWMVg_MrYzIba_";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

window.supabaseClient = supabaseClient;

console.log("Cliente Supabase inicializado correctamente");
