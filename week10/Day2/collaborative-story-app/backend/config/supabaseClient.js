const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Get the Project URL and Anon Key from your .env file
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// Create and export the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
