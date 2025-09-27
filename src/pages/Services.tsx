import { useState } from "react";
import {
  Code,
  Globe,
  Palette,
  Server,
  ChevronDown,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import pythonImage from "@/assets/python-programming.jpg";
import webImage from "@/assets/web-development.jpg";
import designImage from "@/assets/graphic-design.jpg";
import itImage from "@/assets/it-services.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    id: "python",
    icon: Code,
    title: "Python Programming",
    description: "Powerful, scalable applications built with Python's versatility",
    color: "from-blue-500 to-cyan-500",
    image: pythonImage,
    services: [
      {
        title: "Web Applications",
        description: "FastAPI, Django, Flask - Modern, fast, and secure web applications",
        features: [
          "RESTful APIs",
          "Real-time features",
          "Database integration",
          "Authentication systems",
        ],
      },
      {
        title: "Automation & Bots",
        description: "Streamline your workflows with intelligent automation solutions",
        features: [
          "Process automation",
          "Web scraping",
          "Task scheduling",
          "Custom bots",
        ],
      },
      {
        title: "Data Analysis & Visualization",
        description: "Transform your data into actionable insights",
        features: [
          "Statistical analysis",
          "Interactive dashboards",
          "Data visualization",
          "Reporting systems",
        ],
      },
      {
        title: "APIs & Database Systems",
        description: "Robust backend systems for scalable applications",
        features: [
          "API development",
          "Database design",
          "Data migration",
          "Performance optimization",
        ],
      },
    ],
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Services",
    description: "Complete web solutions from concept to deployment",
    color: "from-green-500 to-emerald-500",
    image: webImage,
    services: [
      {
        title: "Website Development",
        description: "Modern, responsive websites that engage and convert",
        features: [
          "Responsive design",
          "CMS integration",
          "E-commerce solutions",
          "Progressive Web Apps",
        ],
      },
      {
        title: "Domain/Hosting/Email Setup",
        description: "Complete infrastructure setup and management",
        features: [
          "Domain registration",
          "Hosting configuration",
          "Email setup",
          "SSL certificates",
        ],
      },
      {
        title: "SEO & Performance Optimization",
        description: "Maximize your online visibility and speed",
        features: [
          "Technical SEO",
          "Performance tuning",
          "Core Web Vitals",
          "Analytics setup",
        ],
      },
    ],
  },
  {
    id: "design",
    icon: Palette,
    title: "Graphic Design",
    description: "Professional visual identity that makes your brand stand out",
    color: "from-purple-500 to-pink-500",
    image: designImage,
    services: [
      {
        title: "Logo Design",
        description: "Memorable logos that represent your brand perfectly",
        features: ["Brand identity", "Logo variations", "Style guides", "Trademark support"],
      },
      {
        title: "Marketing Materials",
        description: "Eye-catching designs that drive engagement",
        features: ["Posters & flyers", "Brochures", "Banners", "Print materials"],
      },
      {
        title: "Business Cards & Stationery",
        description: "Professional materials that leave lasting impressions",
        features: ["Business cards", "Letterheads", "Envelopes", "Corporate stationery"],
      },
      {
        title: "Social Media Graphics",
        description: "Engaging visuals for all your social platforms",
        features: ["Social media posts", "Cover images", "Story templates", "Ad creatives"],
      },
    ],
  },
  {
    id: "it",
    icon: Server,
    title: "IT & Computing Services",
    description: "Comprehensive IT support for optimal business performance",
    color: "from-orange-500 to-red-500",
    image: itImage,
    services: [
      {
        title: "Computer Repair & Maintenance",
        description: "Keep your systems running smoothly and efficiently",
        features: ["Hardware diagnostics", "Software troubleshooting", "Virus removal", "Data recovery"],
      },
      {
        title: "Networking Solutions",
        description: "Secure, reliable network infrastructure",
        features: ["Network setup", "Security configuration", "Wireless solutions", "Remote access"],
      },
      {
        title: "System Optimization",
        description: "Maximize performance and efficiency of your systems",
        features: ["Performance tuning", "Software updates", "System cleanup", "Security patches"],
      },
      {
        title: "IT Training & Consultancy",
        description: "Empower your team with knowledge and strategic guidance",
        features: ["Technical training", "IT strategy", "Technology assessment", "Best practices"],
      },
    ],
  },
];

const testimonials = [
  {
    name: "James O.",
    role: "IT Specialist",
    feedback:
      "LaiTech Solutions transformed our online presence with an innovative website and reliable IT support.",
  },
  {
    name: "Peter Akim",
    role: "Database Admin",
    feedback:
      "Their attention to detail and technical expertise made our systems more efficient and secure.",
  },
  {
    name: "Trever O.",
    role: "Software Engineer",
    feedback:
      "Working with LaiTech Solutions was a game-changer — they deliver quality and professionalism.",
  },
  {
    name: "Peter O.",
    role: "Project Manager",
    feedback:
      "We saw massive growth after adopting their tailored IT strategies. Highly recommend!",
  },
  {
    name: "Mary J.",
    role: "Entrepreneur",
    feedback:
      "LaiTech Solutions helped me launch my startup with beautiful branding and reliable IT tools.",
  },
];

export default function Services() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container-width section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="space-y-16">
            {services.map((serviceCategory, index) => (
              <div key={serviceCategory.id} id={serviceCategory.id} className="scroll-mt-20">
                {/* Category Header with Image */}
                <div className="relative overflow-hidden rounded-lg mb-8">
                  <div
                    className="h-64 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${serviceCategory.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                    <div className="relative z-10 flex items-center h-full p-8">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${serviceCategory.color} flex items-center justify-center mr-6 shadow-lg`}
                      >
                        <serviceCategory.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                          {serviceCategory.title}
                        </h2>
                        <p className="text-lg text-white/90 mt-2">
                          {serviceCategory.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceCategory.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className="gradient-card hover:shadow-card transition-smooth"
                    >
                      <Collapsible
                        open={openSection === `${serviceCategory.id}-${serviceIndex}`}
                        onOpenChange={(isOpen) =>
                          setOpenSection(isOpen ? `${serviceCategory.id}-${serviceIndex}` : null)
                        }
                      >
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-muted/30 rounded-t-lg transition-smooth">
                            <div className="flex items-center justify-between">
                              <div>
                                <CardTitle className="text-xl text-left">{service.title}</CardTitle>
                                <CardDescription className="text-left mt-2">
                                  {service.description}
                                </CardDescription>
                              </div>
                              <ChevronDown
                                className={`h-5 w-5 text-muted-foreground transition-transform ${
                                  openSection === `${serviceCategory.id}-${serviceIndex}` ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <div className="space-y-3">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center space-x-3">
                                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in creating tailored solutions that meet your unique business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="gradient-primary text-white shadow-primary px-8">
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Scrolling */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          What Our Clients Say
        </h2>
        <motion.div
          className="flex space-x-6 w-max"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, index) => (
            <Card
              key={index}
              className="w-80 flex-shrink-0 shadow-lg rounded-2xl bg-white"
            >
              <CardContent className="p-6">
                <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
                <h3 className="font-semibold text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
