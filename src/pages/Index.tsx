import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Globe,
  Palette,
  Server,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import heroImage from "@/assets/hero-bg.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import analyticsImage from "@/assets/analytics-dashboard.jpg";
import brandImage from "@/assets/brand-identity.jpg";
import teamImage from "@/assets/team-collaboration.jpg";

// Services Data
const services = [
  {
    icon: Code,
    title: "Python Programming",
    description:
      "Custom web apps, automation, data analysis, and API development",
    features: [
      "FastAPI & Django",
      "Automation & Bots",
      "Data Visualization",
      "Database Systems",
    ],
  },
  {
    icon: Globe,
    title: "Web Services",
    description: "Complete web solutions from domain setup to SEO optimization",
    features: [
      "Website Development",
      "Domain & Hosting",
      "SEO Optimization",
      "Performance Tuning",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Professional visual identity and marketing materials",
    features: [
      "Logo Design",
      "Marketing Materials",
      "Business Cards",
      "Social Media Graphics",
    ],
  },
  {
    icon: Server,
    title: "IT & Computing",
    description: "Comprehensive IT support and system optimization",
    features: [
      "Computer Repair",
      "Network Setup",
      "System Optimization",
      "IT Consultancy",
    ],
  },
];

// Stats Data
const stats = [
  { icon: Users, value: "10+", label: "Happy Clients" },
  { icon: Star, value: "25+", label: "Projects Completed" },
  { icon: Zap, value: "99%", label: "Client Satisfaction" },
];

// Portfolio Highlights
const portfolioHighlights = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack web application with payment integration",
    tech: "Django, React, PostgreSQL",
    category: "Web Development",
  },
  {
    title: "Data Analytics Dashboard",
    description: "Real-time business intelligence dashboard",
    tech: "Python, FastAPI, Chart.js",
    category: "Data Analysis",
  },
  {
    title: "Brand Identity Package",
    description: "Complete visual identity for tech startup",
    tech: "Adobe Creative Suite",
    category: "Graphic Design",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-secondary/90"></div>
        <div className="relative z-10 container-width section-padding text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Transforming Ideas
            <span className="block gradient-text">into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Innovative technology solutions, professional web services, and
            creative design that drive your business forward in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-primary hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/40">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-white shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full mb-4 shadow-md">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-foreground">
              Dashboard Overview
            </h2>
            <p className="text-muted-foreground mt-2">
              Quick snapshot of LaiTech Solutions performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Card className="hover:shadow-xl rounded-2xl border border-border/40 transition duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Active Projects</CardTitle>
                <CardDescription>Currently ongoing work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">12</div>
                <p className="text-muted-foreground">Web, Design, and IT</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl rounded-2xl border border-border/40 transition duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Pending Quotes</CardTitle>
                <CardDescription>Awaiting client feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-secondary">5</div>
                <p className="text-muted-foreground">Last 7 days</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl rounded-2xl border border-border/40 transition duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Client Satisfaction</CardTitle>
                <CardDescription>Survey-based rating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">99%</div>
                <p className="text-muted-foreground">Based on 2025 reviews</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-br from-muted/40 to-white">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl rounded-2xl border border-border/40 transition-transform duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
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
              <Button size="lg" className="gradient-primary text-white shadow-lg">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-muted/40">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our latest work and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {portfolioHighlights.map((project, index) => (
              <Card
                key={index}
                className="hover:shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={
                      index === 0
                        ? ecommerceImage
                        : index === 1
                        ? analyticsImage
                        : brandImage
                    }
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                    {project.category}
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {project.title}
                  </CardTitle>
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
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition"
              >
                View Full Portfolio <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90"></div>
        <div className="relative z-10 container-width section-padding text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-md">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Let's discuss your project and create something amazing together.
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-xl px-8 py-4 rounded-2xl"
              >
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-primary hover:bg-white/10 px-8 py-4 rounded-2xl"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
