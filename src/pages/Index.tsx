import { Link } from 'react-router-dom';
import { ArrowRight, Code, Globe, Palette, Server, Star, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import heroImage from '@/assets/hero-bg.jpg';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import analyticsImage from '@/assets/analytics-dashboard.jpg';
import brandImage from '@/assets/brand-identity.jpg';
import teamImage from '@/assets/team-collaboration.jpg';

const services = [
  {
    icon: Code,
    title: "Python Programming",
    description: "Custom web apps, automation, data analysis, and API development",
    features: ["FastAPI & Django", "Automation & Bots", "Data Visualization", "Database Systems"]
  },
  {
    icon: Globe,
    title: "Web Services", 
    description: "Complete web solutions from domain setup to SEO optimization",
    features: ["Website Development", "Domain & Hosting", "SEO Optimization", "Performance Tuning"]
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Professional visual identity and marketing materials",
    features: ["Logo Design", "Marketing Materials", "Business Cards", "Social Media Graphics"]
  },
  {
    icon: Server,
    title: "IT & Computing",
    description: "Comprehensive IT support and system optimization",
    features: ["Computer Repair", "Network Setup", "System Optimization", "IT Consultancy"]
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Star, value: "1000+", label: "Projects Completed" },
  { icon: Zap, value: "99%", label: "Client Satisfaction" },
];

const portfolioHighlights = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack web application with payment integration",
    tech: "Django, React, PostgreSQL",
    category: "Web Development"
  },
  {
    title: "Data Analytics Dashboard", 
    description: "Real-time business intelligence dashboard",
    tech: "Python, FastAPI, Chart.js",
    category: "Data Analysis"
  },
  {
    title: "Brand Identity Package",
    description: "Complete visual identity for tech startup",
    tech: "Adobe Creative Suite",
    category: "Graphic Design"
  }
];

export default function Index() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/90"></div>
        <div className="relative z-10 container-width section-padding text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Ideas
            <span className="block gradient-text">into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Innovative technology solutions, professional web services, and creative design 
            that drive your business forward in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl px-8 py-4 text-lg font-semibold">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-card transition-smooth border-border/50 gradient-card">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-primary transition-smooth">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="gradient-primary text-white shadow-primary">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our latest work and innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <Card key={index} className="hover:shadow-card transition-smooth gradient-card overflow-hidden">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={index === 0 ? ecommerceImage : index === 1 ? analyticsImage : brandImage} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <strong>Tech Stack:</strong> {project.tech}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/90"></div>
        <div className="relative z-10 container-width section-padding text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your project and create something amazing together. 
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-xl px-8 py-4">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}