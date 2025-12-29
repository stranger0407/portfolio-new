-- Contact form submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS (public submissions allowed)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a contact form
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  cover_image TEXT,
  tags TEXT[],
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can read published blog posts
CREATE POLICY "Anyone can read published posts"
  ON public.blog_posts
  FOR SELECT
  USING (published = true);

-- Page views analytics table
CREATE TABLE public.page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert page views
CREATE POLICY "Anyone can log page views"
  ON public.page_views
  FOR INSERT
  WITH CHECK (true);

-- Create updated_at trigger for blog posts
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, tags, published, published_at) VALUES
(
  'Building Scalable React Applications',
  'building-scalable-react-applications',
  'Learn the best practices for building maintainable and scalable React applications with modern patterns.',
  'React has become one of the most popular frontend frameworks, and for good reason. In this post, I''ll share my experience building scalable applications...

## Key Principles

1. **Component Composition** - Break down your UI into small, reusable components
2. **State Management** - Choose the right state management solution for your needs
3. **Performance Optimization** - Use React.memo, useMemo, and useCallback wisely

## Folder Structure

A good folder structure is crucial for maintainability. I recommend organizing by features rather than by file types.',
  ARRAY['React', 'JavaScript', 'Architecture'],
  true,
  now() - interval '5 days'
),
(
  'Getting Started with Spring Boot',
  'getting-started-with-spring-boot',
  'A comprehensive guide to building REST APIs with Spring Boot and best practices for enterprise applications.',
  'Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications. In this guide, we''ll cover the essentials...

## Prerequisites

- Java 17 or higher
- Maven or Gradle
- Your favorite IDE

## Creating Your First API

Let''s start by creating a simple REST controller that handles CRUD operations for a resource.',
  ARRAY['Java', 'Spring Boot', 'Backend'],
  true,
  now() - interval '12 days'
),
(
  'TypeScript Best Practices in 2025',
  'typescript-best-practices-2025',
  'Essential TypeScript patterns and practices every developer should know for writing type-safe code.',
  'TypeScript continues to evolve and improve. Here are the best practices I follow in my projects...

## Strict Mode

Always enable strict mode in your tsconfig.json for maximum type safety.

## Utility Types

Master utility types like Partial, Required, Pick, and Omit to write cleaner type definitions.',
  ARRAY['TypeScript', 'JavaScript', 'Best Practices'],
  true,
  now() - interval '3 days'
);