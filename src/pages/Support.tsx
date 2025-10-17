import { useState } from "react";
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
import { LifeBuoy, AlertCircle, Wrench } from "lucide-react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issueType: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.issueType ||
      !formData.description.trim()
    ) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Simulate ticket submission
    setTimeout(() => {
      toast.success(
        "Support ticket submitted successfully! We'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        issueType: "",
        description: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      issueType: value,
    });
  };

  return (
    <div className="min-h-screen py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
              <LifeBuoy className="text-primary-blue" size={32} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Need Support?
          </h1>
          <p className="text-lg text-muted-foreground">
            Users can raise tickets for website maintenance, bugs, or other
            technical issues. Our support team is here to help you resolve any
            problems quickly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Issue Type Cards */}
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-primary-blue" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Maintenance</h3>
              <p className="text-sm text-muted-foreground">
                Updates, optimizations, and routine maintenance
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="text-primary-blue" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Bug Report</h3>
              <p className="text-sm text-muted-foreground">
                Report technical issues and errors
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <LifeBuoy className="text-primary-blue" size={24} />
              </div>
              <h3 className="font-bold text-foreground mb-2">Other Issues</h3>
              <p className="text-sm text-muted-foreground">
                General inquiries and other concerns
              </p>
            </div>
          </div>

          {/* Support Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Submit a Support Ticket
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+977-1-234567"
                  className="mt-1"
                />
              </div>

              {/* Issue Type Dropdown */}
              <div>
                <Label htmlFor="issueType">Type of Issue *</Label>
                <Select
                  value={formData.issueType}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="bug">Bug</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Description Field */}
              <div>
                <Label htmlFor="description">Description / Message *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
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
          <div className="mt-8 bg-muted border border-border rounded-lg p-6" data-aos="fade-up" data-aos-delay="500">
            <h3 className="text-lg font-bold text-foreground mb-3">
              What happens next?
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary-blue mr-2">•</span>
                You'll receive a confirmation email with your ticket number
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue mr-2">•</span>
                Our support team will review your ticket within 24 hours
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue mr-2">•</span>
                We'll reach out to you via email or phone to resolve the issue
              </li>
              <li className="flex items-start">
                <span className="text-primary-blue mr-2">•</span>
                For urgent matters, please call us directly at +977 9765142241
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
