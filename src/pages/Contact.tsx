import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_hfc11yg",
          "template_rwlxrpp",
          form.current,
          "x-4rrN370bYRSBZ_b"
        )
        .then(
          () => {
            toast.success("Message sent successfully! We\'ll get back to you soon.", {
              style: {
                background: "#1a202c",
                color: "#ffffff",
                border: "1px solid #2d3748",
              },
            });
            setIsSubmitting(false);
            if (form.current) {
              form.current.reset();
            }
          },
          (error) => {
            toast.error("Failed to send message. Please try again later.");
            setIsSubmitting(false);
          }
        );
    }
  };

  return (
    <div className="min-h-screen py-16 md:py-20">
       <Helmet>
        <title>Contact Us - ForgeLabs</title>
        <meta name="description" content="Get in touch with ForgeLabs for your web development and software needs. Fill out our contact form or find our contact information." />
        <meta name="keywords" content="contact ForgeLabs, get in touch, web development contact, software development Nepal, IT company contact" />
        <meta property="og:title" content="Contact Us - ForgeLabs" />
        <meta property="og:description" content="Get in touch with ForgeLabs for your web development and software needs. Fill out our contact form or find our contact information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgelabs.tech/contact" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us - ForgeLabs" />
        <meta name="twitter:description" content="Get in touch with ForgeLabs for your web development and software needs." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground">
            Have a project, an idea, or just want to chat? Fill out the form
            below, and we\'ll get back to you promptly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="mt-1"
                />
              </div>

              {/* Phone Field */}
              <div>
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+977 9765142241"
                  className="mt-1"
                />
              </div>

              {/* Message Field */}
              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or inquiry..."
                  required
                  rows={6}
                  className="mt-1"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <p className="text-muted-foreground mb-8">
                Reach out to us directly through any of the following channels.
                We\'re here to help you bring your ideas to life.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-muted border border-border rounded-lg p-6 hover:shadow-md transition-shadow" data-aos="fade-left" data-aos-delay="100">
                <div className="flex items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-primary-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:forgelabs.np@gmail.com"
                      className="text-primary-blue hover:underline"
                    >
                      forgelabs.np@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-muted border border-border rounded-lg p-6 hover:shadow-md transition-shadow" data-aos="fade-left" data-aos-delay="200">
                <div className="flex items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-primary-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+9779765142241"
                      className="text-primary-blue hover:underline"
                    >
                      +977 9765142241
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-muted border border-border rounded-lg p-6 hover:shadow-md transition-shadow" data-aos="fade-left" data-aos-delay="300">
                <div className="flex items-start">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-primary-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Location
                    </h3>
                    <p className="text-muted-foreground">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-primary text-white rounded-lg p-6" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-2 text-white/90">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
