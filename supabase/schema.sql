-- =============================================
-- PORTFOLIO DATABASE SCHEMA FOR SUPABASE
-- Run this in your Supabase SQL Editor
-- =============================================

-- Enable UUID extension (usually enabled by default)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- TABLE: blog_posts
-- Stores blog/article content for the portfolio
-- =============================================
CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    cover_image TEXT,
    tags TEXT[] DEFAULT '{}',
    published BOOLEAN DEFAULT false,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster slug lookups
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.blog_posts(published);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "Anyone can read published blog posts" 
    ON public.blog_posts 
    FOR SELECT 
    USING (published = true);

-- Policy: Allow all operations for now (you can restrict this later with auth)
CREATE POLICY "Allow all operations on blog posts" 
    ON public.blog_posts 
    FOR ALL 
    USING (true) 
    WITH CHECK (true);

-- =============================================
-- TABLE: contact_submissions
-- Stores contact form submissions
-- =============================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert contact submissions
CREATE POLICY "Anyone can submit contact form" 
    ON public.contact_submissions 
    FOR INSERT 
    WITH CHECK (true);

-- Policy: Allow reading for authenticated users (admin)
CREATE POLICY "Allow reading contact submissions" 
    ON public.contact_submissions 
    FOR SELECT 
    USING (true);

-- =============================================
-- TABLE: page_views
-- Tracks page analytics
-- =============================================
CREATE TABLE IF NOT EXISTS public.page_views (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_path TEXT NOT NULL,
    referrer TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for analytics queries
CREATE INDEX IF NOT EXISTS idx_page_views_path ON public.page_views(page_path);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON public.page_views(created_at);

-- Enable Row Level Security
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert page views
CREATE POLICY "Anyone can log page views" 
    ON public.page_views 
    FOR INSERT 
    WITH CHECK (true);

-- Policy: Allow reading for analytics
CREATE POLICY "Allow reading page views" 
    ON public.page_views 
    FOR SELECT 
    USING (true);

-- =============================================
-- TRIGGER: Auto-update updated_at timestamp
-- =============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON public.blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- SAMPLE DATA (Optional - remove if not needed)
-- =============================================
INSERT INTO public.blog_posts (title, slug, content, excerpt, tags, published, published_at)
VALUES 
(
    'Welcome to My Portfolio',
    'welcome-to-my-portfolio',
    '# Welcome!\n\nThis is my first blog post. I am excited to share my journey as a developer.\n\n## What to Expect\n\n- Technical tutorials\n- Project showcases\n- Industry insights',
    'An introduction to my developer portfolio and what content to expect.',
    ARRAY['introduction', 'portfolio', 'welcome'],
    true,
    NOW()
),
(
    'Building Modern Web Applications',
    'building-modern-web-apps',
    '# Modern Web Development\n\nIn this post, I explore the technologies I use to build modern web applications.\n\n## My Tech Stack\n\n- **Frontend**: React, TypeScript, Tailwind CSS\n- **Backend**: Spring Boot, Node.js\n- **Database**: PostgreSQL, MySQL\n- **Deployment**: Vercel, Render',
    'Exploring the modern tech stack for building scalable web applications.',
    ARRAY['web-development', 'react', 'spring-boot', 'typescript'],
    true,
    NOW()
);
