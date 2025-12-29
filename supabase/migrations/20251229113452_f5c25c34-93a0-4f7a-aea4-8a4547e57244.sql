-- Add SELECT policy that prevents public access to contact submissions
-- Only backend/admin access through dashboard will be able to view submissions
CREATE POLICY "No public read access to contact submissions"
  ON public.contact_submissions
  FOR SELECT
  USING (false);

-- This ensures:
-- 1. Anyone can still INSERT (submit contact form) - existing policy
-- 2. No one can SELECT/read submissions via the public API
-- 3. Admins can still view data through the backend dashboard