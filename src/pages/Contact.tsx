import { useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Facebook, Cpu, TrendingUp, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@laitechsolutions.co.ke",
    description: "Send us an email anytime"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+254 111700506",
    description: "Mon-Fri from 8am to 6pm EAT"
  },
  {
    icon: MapPin,
    title: "Our Location",
    details: "Kisumu, Kenya",
    description: "Serving clients across the globe remotely"
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "Within 24 hours",
    description: "We respond to all inquiries quickly"
  }
];

// Replaced office cards with LaiTech + Tech Growth details
const highlights = [
  {
    icon: Cpu,
    title: "Innovative Solutions",
    description: "We specialize in transforming ideas into digital realities through AI, software, and creative design."
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description: "Our goal is to empower businesses and individuals to scale with the right technology and strategies."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Based in Kisumu, Kenya but serving clients worldwide through remote-first operations."
  }
];

export default function Contact() {
  const form = useRef();

  // handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qi1lpd7",     // from EmailJS dashboard
      "template_rqosypu",    // from EmailJS dashboard
      form.current,
      "_ifa1w4Nk28CK7c35"    // from EmailJS account
    )
    .then(
      (result) => {
        alert("Message sent successfully ✅");
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        alert("Something went wrong ❌. Please try again.");
        console.log(error.text);
      }
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container-width section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Ready to transform your ideas into reality? Get in touch with our team 
            of experts and let's discuss your project.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-smooth gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                  <CardDescription className="font-medium text-foreground">
                    {info.details}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Send Us a Message</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <div>
                <Card className="gradient-card shadow-card">
                  <CardContent className="p-6">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input name="firstName" id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input name="lastName" id="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" type="email" placeholder="john@example.com" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input name="phone" id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input name="company" id="company" placeholder="Your Company Name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input name="subject" id="subject" placeholder="What can we help you with?" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          name="message"
                          id="message" 
                          rows={6}
                          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                          required
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full gradient-primary text-white shadow-primary">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map & LaiTech Highlights */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Location</h2>
                <p className="text-lg text-muted-foreground">
                  You can find us in Kisumu, Kenya — and we’re always ready to connect online globally.
                </p>
              </div>
              
              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden h-80 mb-8 shadow-card">
                <iframe
                  title="Kisumu Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127644.8448610796!2d34.66740555!3d-0.09170284999999777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa5e352ecb3a7%3A0xdea3cf5b2de79c44!2sKisumu!5e0!3m2!1sen!2ske!4v1695933245174!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* LaiTech Highlights */}
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <Card key={index} className="gradient-card">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Additional Contact */}
      <section className="py-20">
        <div className="container-width section-padding text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Stay Connected</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, tech insights, and project showcases.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://www.linkedin.com/company/laitech-solutions-global/" 
              className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center hover:shadow-primary transition-smooth"
            >
              <Linkedin className="h-6 w-6 text-white" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center hover:shadow-primary transition-smooth"
            >
              <Twitter className="h-6 w-6 text-white" />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61570347132471" 
              className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center hover:shadow-primary transition-smooth"
            >
              <Facebook className="h-6 w-6 text-white" />
            </a>
          </div>
          
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground mb-4">
              Need immediate assistance? Call or whatsapp our 24/7 support line:
            </p>
            <div className="text-2xl font-bold text-primary">
              +254 743903869
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
