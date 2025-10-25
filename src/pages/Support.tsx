import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { LifeBuoy } from "lucide-react";

const Support = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [issueType, setIssueType] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_hfc11yg",
          "template_78ljrff",
          form.current,
          "x-4rrN370bYRSBZ_b"
        )
        .then(
          () => {
            toast.success("Support ticket submitted successfully! We'll get back to you soon.");
            setIsSubmitting(false);
            if (form.current) {
              form.current.reset();
              setIssueType("");
            }
          },
          (error) => {
            toast.error("Failed to send message. Please try again later.");
            setIsSubmitting(false);
          }
        );
    }
  };

  const handleSelectChange = (value: string) => {
    setIssueType(value);
  };

  return (
    <div className="min-h-screen py-16 md:py-20 bg-background">
      <Helmet>
        <title>Support - ForgeLabs</title>
        <meta name="description" content="Get support for ForgeLabs products and services. Submit a support ticket for any issues or inquiries." />
        <meta name="keywords" content="ForgeLabs support, customer support, technical support, submit ticket, helpdesk" />
        <meta property="og:title" content="Support - ForgeLabs" />
        <meta property="og:description" content="Get support for ForgeLabs products and services. Submit a support ticket for any issues or inquiries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://forgelabs.tech/support" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Support - ForgeLabs" />
        <meta name="twitter:description" content="Get support for ForgeLabs products and services." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
              <LifeBuoy className="text-primary-blue" size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Need Support?
          </h1>
          <p className="text-lg text-muted-foreground">
            Our support team is here to help you resolve any problems quickly.
            Fill out the form below to submit a ticket.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Support Form */}
          <div
            className="bg-card border border-border rounded-lg p-8 shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Submit a Support Ticket
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              {/* Name Field */}
              <div>
                <Label htmlFor="user_name">Name *</Label>
                <Input
                  id="user_name"
                  name="user_name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="user_email">Email *</Label>
                <Input
                  id="user_email"
                  name="user_email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="mt-1"
                />
              </div>

              {/* Phone Field */}
              <div>
                <Label htmlFor="user_phone">Phone (Optional)</Label>
                <Input
                  id="user_phone"
                  name="user_phone"
                  type="tel"
                  placeholder="+977-1-234567"
                  className="mt-1"
                />
              </div>

              {/* Issue Type Dropdown */}
              <div>
                <Label htmlFor="issue_type">Type of Issue *</Label>
                <Select
                  name="issue_type"
                  value={issueType}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="other">Other Inquiry</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description Field */}
              <div>
                <Label htmlFor="message">Description / Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Please describe the issue in detail..."
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
                {isSubmitting ? "Submitting..." : "Submit Ticket"}
              </Button>
            </form>
          </div>

          {/* Additional Info */}
          <div
            className="bg-muted border border-border rounded-lg p-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              What happens next?
            </h3>
            <p className="text-muted-foreground mb-6">
              After you submit a ticket, here’s what you can expect:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary-blue font-bold mr-3 mt-1">
                  1.
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Confirmation Email
                  </h4>
                  <p>
                    You'll receive an automated email with your ticket number.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue font-bold mr-3 mt-1">
                  2.
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Team Review
                  </h4>
                  <p>Our support team will review your ticket within 24 hours.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue font-bold mr-3 mt-1">
                  3.
                </span>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Follow-Up Communication
                  </h4>
                  <p>
                    We'll reach out via email or phone to resolve the issue.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <h4 className="font-semibold text-foreground mb-2">
                Urgent Matters
              </h4>
              <p className="text-muted-foreground">
                For immediate assistance, please call us directly at:
                <br />
                <span className="font-bold text-primary-blue">
                  +977 9765142241
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;