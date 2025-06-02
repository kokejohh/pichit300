import { createClient } from "@supabase/supabase-js";

export const superbase = createClient(process.env.NEXT_PUBLIC_SUPERBASE_URL ?? '', process.env.SUPERBASE_SERVICE_ROLE ?? '',{
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
    }
});