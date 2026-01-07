'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    description: '',
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result?.success) {
        toast({
          title: 'Message Sent!',
          description: 'Thank you for reaching out. We\'ll get back to you within 24 hours.',
        });
        setFormData({ email: '', phone: '', description: '' });
      } else {
        throw new Error(result?.message || 'Failed to send message');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or email us directly.',
        variant: 'destructive',
      });
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-[#111111]">Send Us a Message</h3>
        </div>

        <div>
          <Label htmlFor="email" className="text-[#111111] font-semibold">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="mt-2 bg-white border-gray-300 focus:border-[#1F6FD6] focus:ring-[#1F6FD6]"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-[#111111] font-semibold">
            Phone Number <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+32 123 456 789"
            className="mt-2 bg-white border-gray-300 focus:border-[#1F6FD6] focus:ring-[#1F6FD6]"
          />
        </div>

        <div>
          <Label htmlFor="description" className="text-[#111111] font-semibold">
            Tell Us About Your Needs <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="description"
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe what you're looking for, your business type, and any specific challenges you'd like to address..."
            rows={6}
            className="mt-2 bg-white border-gray-300 focus:border-[#1F6FD6] focus:ring-[#1F6FD6] resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1F6FD6] hover:bg-[#0E3F8A] text-white text-lg py-6"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Send Message <Send className="h-5 w-5" />
            </span>
          )}
        </Button>

        <p className="text-sm text-[#3A3A3A] text-center">
          By submitting this form, you agree that we may contact you about your inquiry.
        </p>
      </form>
      <Toaster />
    </>
  );
}
