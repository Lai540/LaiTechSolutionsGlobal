import { Mail, Phone, MapPin, Clock, Send, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "info@laitechsolutionsglobal.co.ke",
    description: "Send us an email anytime"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+254 740136761 or +254 111700506",
    description: "Mon-Fri from 8am to 6pm EAT"
  },
  {
    icon: MapPin,
    title: "Global Operations",
    details: "Worldwide Service",
    description: "Remote-first with global reach"
  },
  {
    icon: Clock,
    title: "Response Time",
    details: "Within 24 hours",
    description: "We respond to all inquiries quickly"
  }
];

const offices = [
  {
    city: "North America",
    address: "123 Tech Boulevard, Suite 100",
    region: "New York, NY 10001",
    email: "na@laitechsolutionsglobal.co.ke"
  },
  {
    city: "Europe", 
    address: "45 Innovation Street, Floor 5",
    region: "London, UK EC2A 4BX",
    email: "eu@laitechsolutionsglobal.co.ke"
  },
  {
    city: "Asia Pacific",
    address: "88 Digital Hub, Tower A",
    region: "Singapore 018956",
    email: "apac@laitechsolutionsglobal.co.ke"
  }
];

export default function Contact() {
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
              
              <Card className="gradient-card shadow-card">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What can we help you with?" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        rows={6}
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      />
                    </div>
                    
                    <Button size="lg" className="w-full gradient-primary text-white shadow-primary">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Office Info */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Global Work Remains Remote</h2>
                <p className="text-lg text-muted-foreground">
                  We operate globally online to serve our clients across different time zones.
                </p>
              </div>
              
              {/* Placeholder Map */}
              <div className="bg-muted rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                </div>
              </div>
              
              {/* Office Locations */}
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className="gradient-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">{office.city}</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <div>
                            <div>{office.address}</div>
                            <div>{office.region}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          <span>{office.email}</span>
                        </div>
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
              Need immediate assistance? Call our 24/7 support line:
            </p>
            <div className="text-2xl font-bold text-primary">
              +1 (555) 123-4567
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}