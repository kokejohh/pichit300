import { createClient } from "@supabase/supabase-js";

export const superbase = createClient(process.env.NEXT_PUBLIC_SUPERBASE_URL ?? '', process.env.NEXT_PUBLIC_SUPERBASE_ANON ?? '');