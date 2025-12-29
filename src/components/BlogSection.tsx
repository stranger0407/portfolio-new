import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, FileCode } from 'lucide-react';
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
    const readTime = Math.ceil(words / 200) + 2;
    return `${readTime} min`;
  };

  if (isLoading) {
    return (
      <section id="blog" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-title">
                <span className="text-primary">//</span> Latest <span className="neon-text">Posts</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass rounded-sm p-6 animate-pulse neon-border">
                  <div className="h-4 bg-muted rounded w-3/4 mb-4" />
                  <div className="h-3 bg-muted rounded w-1/2 mb-6" />
                  <div className="h-20 bg-muted rounded mb-4" />
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
      <div className="absolute inset-0 matrix-bg opacity-30" />
      <div className="absolute inset-0 cyber-grid opacity-5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary/50 text-xs font-mono mb-4">
              <FileCode className="w-4 h-4" />
              <span>blog.posts.latest(3)</span>
            </div>
            <h2 className="section-title">
              <span className="text-primary">//</span> Latest <span className="neon-text">Blog Posts</span>
            </h2>
            <p className="section-subtitle">/* thoughts.tutorials.render() */</p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="glass rounded-sm group hover:scale-[1.02] hover:glow transition-all duration-500 flex flex-col overflow-hidden neon-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-muted/30 border-b border-primary/20">
                  <span className="text-[10px] font-mono text-primary/50">POST_{String(index + 1).padStart(3, '0')}</span>
                  <div className="flex items-center gap-1 text-[10px] text-muted-foreground font-mono">
                    <Clock size={10} />
                    {estimateReadTime(post.excerpt)}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-sm bg-primary/10 text-primary border border-primary/20 font-mono uppercase"
                        >
                          <Tag size={8} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-display text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2 uppercase tracking-wide">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm flex-1 mb-4 line-clamp-3 font-mono">
                    <span className="text-primary/50">// </span>
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center text-xs text-muted-foreground pt-4 border-t border-primary/20 font-mono">
                    <Calendar size={12} className="mr-1 text-primary" />
                    {format(new Date(post.published_at || post.created_at), 'MMM d, yyyy')}
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 px-6 py-3 bg-muted/30 text-primary text-xs font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity border-t border-primary/20">
                  <span>&gt; Read_More</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link to="/blog" className="cyber-button inline-flex items-center gap-2">
              View_All_Posts
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
