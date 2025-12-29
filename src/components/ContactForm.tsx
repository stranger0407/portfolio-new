import { useState } from 'react';
import { Send, CheckCircle, Loader2, Terminal } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  subject: z.string().trim().max(200, 'Subject must be less than 200 characters').optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: result.data.name,
        email: result.data.email,
        subject: result.data.subject || null,
        message: result.data.message,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: 'Transmission successful',
        description: "Message received. Response incoming.",
      });
    } catch (error) {
      toast({
        title: 'Transmission failed',
        description: 'Connection error. Retry transmission.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="glass rounded-sm p-8 text-center neon-border">
        <div className="w-16 h-16 rounded-sm bg-primary/20 flex items-center justify-center mx-auto mb-6 border border-primary/30 animate-cyber-pulse">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-semibold mb-2 uppercase tracking-wider neon-text">
          Transmission_Complete
        </h3>
        <p className="text-muted-foreground mb-6 font-mono text-sm">
          // Message received. Response protocol initiated.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }}
          className="text-primary hover:underline font-mono text-sm"
        >
          &gt; initiate_new_transmission()
        </button>
      </div>
    );
  }

  return (
    <div className="glass rounded-sm overflow-hidden neon-border">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-muted/50 border-b border-primary/20">
        <Terminal className="w-4 h-4 text-primary" />
        <span className="text-xs text-muted-foreground font-mono">contact_form.exe</span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono mb-2 uppercase tracking-wider">
              <span className="text-primary">&gt;</span> Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-sm bg-muted/30 border font-mono text-sm ${
                errors.name ? 'border-destructive' : 'border-primary/30'
              } focus:border-primary focus:outline-none focus:glow-sm transition-all`}
              placeholder="your_name"
            />
            {errors.name && <p className="mt-1 text-xs text-destructive font-mono">[ERROR] {errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono mb-2 uppercase tracking-wider">
              <span className="text-primary">&gt;</span> Email <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-sm bg-muted/30 border font-mono text-sm ${
                errors.email ? 'border-destructive' : 'border-primary/30'
              } focus:border-primary focus:outline-none focus:glow-sm transition-all`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="mt-1 text-xs text-destructive font-mono">[ERROR] {errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-mono mb-2 uppercase tracking-wider">
            <span className="text-primary">&gt;</span> Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-sm bg-muted/30 border font-mono text-sm ${
              errors.subject ? 'border-destructive' : 'border-primary/30'
            } focus:border-primary focus:outline-none focus:glow-sm transition-all`}
            placeholder="message_subject"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-mono mb-2 uppercase tracking-wider">
            <span className="text-primary">&gt;</span> Message <span className="text-destructive">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-sm bg-muted/30 border font-mono text-sm ${
              errors.message ? 'border-destructive' : 'border-primary/30'
            } focus:border-primary focus:outline-none focus:glow-sm transition-all resize-none`}
            placeholder="// your_message_here..."
          />
          {errors.message && <p className="mt-1 text-xs text-destructive font-mono">[ERROR] {errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cyber-button disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
              Transmitting...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              Send_Transmission
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
