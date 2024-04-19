import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://vugicbzgqyjoziwgjvxr.supabase.co', process.env.NEXT_PUBLIC_SERVICE_ROLE_SUPABASE!);

export default supabase;