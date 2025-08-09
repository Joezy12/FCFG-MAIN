import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wqhlthvrarvnvuqthgbk.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxaGx0aHZyYXJ2bnZ1cXRoZ2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3MjE3NjUsImV4cCI6MjA3MDI5Nzc2NX0.Fe0qbJ1ADW3svNpuZOIlLCR8zuUIp7QlMoAzKmK0k2E"
export const supabase = createClient(supabaseUrl, supabaseKey)