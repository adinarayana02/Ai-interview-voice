import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const superbaseUrl = 'https://rnjhvoyzqzkdnmgsrloq.supabase.co';
const superbaseAnonkey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuamh2b3l6cXprZG5tZ3NybG9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NjA1MTAsImV4cCI6MjA2MTEzNjUxMH0.-lzcy0Gv4BEZ3IiKRSLWDf3uMQKZ0eMG_xmLPdHob5w';

// Debug logging
console.log('Supabase URL:', superbaseUrl)
console.log('Supabase Anon Key:', superbaseAnonkey)

export const supabase = createClient(
    superbaseUrl,
    superbaseAnonkey,
);