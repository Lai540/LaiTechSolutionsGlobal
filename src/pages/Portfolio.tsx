import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ecommerceImage from '@/assets/ecommerce-project.jpg';
import analyticsImage from '@/assets/analytics-dashboard.jpg';
import brandImage from '@/assets/brand-identity.jpg';

const categories = ['All', 'Web Development', 'Python Programming', 'Graphic Design', 'IT Solutions'];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, inventory management, and analytics dashboard.",
    category: "Web Development",
    technologies: ["Django", "React", "PostgreSQL", "Stripe", "Redis"],
    image: ecommerceImage,
    liveUrl: "#",
    githubUrl: "https://github.com/Lai540",
    featured: true
  },
  {
    id: 2,
    title: "Data Analytics Dashboard",
    description: "Real-time business intelligence dashboard with interactive charts and automated reporting.",
    category: "Python Programming", 
    technologies: ["FastAPI", "Python", "Pandas", "Chart.js", "Docker"],
    image: analyticsImage,
    liveUrl: "#",
    githubUrl: "https://github.com/Lai540",
    featured: true
  },
  {
    id: 3,
    title: "Brand Identity Package",
    description: "Complete visual identity including logo, business cards, letterheads, and brand guidelines.",
    category: "Graphic Design",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    image: brandImage,
    featured: true
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team communication features.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: ecommerceImage,
    liveUrl: "#",
    githubUrl: "https://github.com/Lai540"
  },
  {
    id: 5,
    title: "Automated Report Generator",
    description: "Python-based tool that generates and distributes daily business reports automatically.",
    category: "Python Programming",
    technologies: ["Python", "Pandas", "Matplotlib", "Schedule", "SMTP"],
    image: analyticsImage,
    githubUrl: "https://github.com/Lai540"
  },
  {
    id: 6,
    title: "Restaurant Website & Branding",
    description: "Modern restaurant website with online ordering system and complete brand identity.",
    category: "Web Development",
    technologies: ["WordPress", "WooCommerce", "Custom CSS", "PHP"],
    image: ecommerceImage,
    liveUrl: "#"
  },
  {
    id: 7,
    title: "Network Infrastructure Setup",
    description: "Complete office network setup with security configuration and remote access capabilities.",
    category: "IT Solutions",
    technologies: ["Cisco", "pfSense", "VPN", "Network Security"],
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "Social Media Campaign Graphics",
    description: "Series of engaging social media graphics that increased client's engagement by 200%.",
    category: "Graphic Design", 
    technologies: ["Adobe Creative Suite", "Canva Pro", "Social Media Strategy"],
    image: brandImage
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
    
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container-width section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Explore our latest projects and discover how we've helped businesses 
            transform their digital presence and operational efficiency.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our most impactful and innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-smooth gradient-card overflow-hidden">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">All Projects</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our complete portfolio of successful projects
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-primary text-white" : ""}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-card transition-smooth gradient-card overflow-hidden">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex space-x-1">
                      {project.liveUrl && (
                        <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                          <Github className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 2}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-width section-padding text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/254111700506" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gradient-primary text-white shadow-primary px-8">
                Start Your Project
              </Button>
            </a>

            <a href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8"
              >
                View More Work
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}