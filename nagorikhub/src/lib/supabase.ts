// Import the createClient function from the Supabase library.
import { createClient } from '@supabase/supabase-js';

// Retrieve the Supabase URL from our local environment variables.
// The exclamation mark (!) tells TypeScript that we guarantee this variable exists.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;

// Retrieve the Supabase public anonymous key from our environment variables.
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Initialize and export the Supabase client instance.
// You will import this 'supabase' object into any file where you need to fetch or save data.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);