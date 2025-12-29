import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const usePageAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        await supabase.from('page_views').insert({
          page_path: location.pathname,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent || null,
        });
      } catch (error) {
        // Silently fail - analytics should not break the app
        console.error('Analytics error:', error);
      }
    };

    trackPageView();
  }, [location.pathname]);
};

export default usePageAnalytics;
