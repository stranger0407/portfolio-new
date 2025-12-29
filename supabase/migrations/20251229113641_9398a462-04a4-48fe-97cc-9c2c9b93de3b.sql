-- Add UPDATE policy - deny all updates via public API
CREATE POLICY "No public update access to contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  USING (false)
  WITH CHECK (false);

-- Add DELETE policy - deny all deletes via public API
CREATE POLICY "No public delete access to contact submissions"
  ON public.contact_submissions
  FOR DELETE
  USING (false);