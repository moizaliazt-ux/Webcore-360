import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const formSchema = z.object({
 name: z.string().min(2, 'Name must be at least 2 characters'),
 email: z.string().email('Please enter a valid email address'),
 phone: z.string().optional(),
 message: z.string().min(10, 'Message must be at least 10 characters'),
});

function ContactForm() {
 const [isSubmitting, setIsSubmitting] = useState(false);

 const {
 register,
 handleSubmit,
 formState: { errors },
 reset,
 } = useForm({
 resolver: zodResolver(formSchema),
 });

 const onSubmit = async (data) => {
 setIsSubmitting(true);

 try {
 const response = await fetch('/hcgi/api/contact', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 },
 body: JSON.stringify({
 ...data,
 _form_ts: Date.now() - 5000, 
 }),
 });

 if (!response.ok) {
 const errorData = await response.json();
 throw new Error(errorData.errors?.[0] || 'Failed to send message');
 }

 toast.success("Message sent successfully! We'll be in touch soon.");
 reset();
 } catch (error) {
 toast.error(error.message || 'Failed to send message. Please try again.');
 } finally {
 setIsSubmitting(false);
 }
 };

 return (
 <motion.form
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.5 }}
 onSubmit={handleSubmit(onSubmit)}
 className="space-y-6 max-w-2xl"
 >
 <div>
 <Label htmlFor="name" className="text-foreground">
 Name <span className="text-destructive">*</span>
 </Label>
 <Input
 id="name"
 {...register('name')}
 className="mt-2 bg-background text-foreground border-input"
 placeholder="Your name"
 />
 {errors.name && (
 <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
 )}
 </div>

 <div>
 <Label htmlFor="email" className="text-foreground">
 Email <span className="text-destructive">*</span>
 </Label>
 <Input
 id="email"
 type="email"
 {...register('email')}
 className="mt-2 bg-background text-foreground border-input"
 placeholder="your.email@example.com"
 />
 {errors.email && (
 <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
 )}
 </div>

 <div>
 <Label htmlFor="phone" className="text-foreground">Phone</Label>
 <Input
 id="phone"
 type="tel"
 {...register('phone')}
 className="mt-2 bg-background text-foreground border-input"
 placeholder="(555) 123-4567"
 />
 </div>

 <div>
 <Label htmlFor="message" className="text-foreground">
 Message <span className="text-destructive">*</span>
 </Label>
 <Textarea
 id="message"
 {...register('message')}
 className="mt-2 min-h-[150px] bg-background text-foreground border-input"
 placeholder="Tell us about your project..."
 />
 {errors.message && (
 <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
 )}
 </div>

 <Button
 type="submit"
 disabled={isSubmitting}
 className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
 >
 {isSubmitting ? 'Sending...' : 'Send message'}
 </Button>
 </motion.form>
 );
}

export default ContactForm;
