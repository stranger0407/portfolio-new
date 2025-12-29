import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  tags: string[] | null;
  published_at: string | null;
  created_at: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, excerpt, tags, published_at, created_at')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(3);

      if (!error && data) {
        setPosts(data);
      }
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const estimateReadTime = (excerpt: string | null) => {
    const words = excerpt?.split(' ').length || 0;
    const readTime = Math.ceil(words / 200) + 2; // Base 2 min + words
    return `${readTime} min read`;
  };

  if (isLoading) {
    return (
      <section id="blog" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title">
                Latest <span className="gradient-text">Blog Posts</span>
              </h2>
              <p className="section-subtitle">Thoughts and tutorials</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass rounded-2xl p-6 animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4 mb-4" />
                  <div className="h-3 bg-muted rounded w-1/2 mb-6" />
                  <div className="h-20 bg-muted rounded mb-4" />
                  <div className="h-3 bg-muted rounded w-1/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">
              Latest <span className="gradient-text">Blog Posts</span>
            </h2>
            <p className="section-subtitle">Thoughts and tutorials</p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="glass rounded-2xl p-6 group hover:scale-[1.02] hover:glow transition-all duration-500 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-primary/20 text-primary"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm flex-1 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>
                      {format(new Date(post.published_at || post.created_at), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{estimateReadTime(post.excerpt)}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 mt-4 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 glass glass-hover px-8 py-4 rounded-full font-semibold"
            >
              View All Posts
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
