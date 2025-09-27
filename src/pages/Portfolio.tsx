import { useState, useEffect } from 'react';
import { Github, Filter, X, Heart, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
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
    githubUrl: "https://github.com/Lai540",
    featured: true
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates and team communication features.",
    category: "Web Development",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: ecommerceImage,
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
    githubUrl: "https://github.com/Lai540"
  },
  {
    id: 7,
    title: "Network Infrastructure Setup",
    description: "Complete office network setup with security configuration and remote access capabilities.",
    category: "IT Solutions",
    technologies: ["Cisco", "pfSense", "VPN", "Network Security"],
    image: analyticsImage,
    githubUrl: "https://github.com/Lai540"
  },
  {
    id: 8,
    title: "Social Media Campaign Graphics",
    description: "Series of engaging social media graphics that increased client's engagement by 200%.",
    category: "Graphic Design",
    technologies: ["Adobe Creative Suite", "Canva Pro", "Social Media Strategy"],
    image: brandImage,
    githubUrl: "https://github.com/Lai540"
  }
];

// Counter hook
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return count;
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [projectIndex, setProjectIndex] = useState<number>(0);
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [loves, setLoves] = useState<{ [key: number]: number }>({});

  // Load stored likes/loves from localStorage
  useEffect(() => {
    const storedLikes = localStorage.getItem('likes');
    const storedLoves = localStorage.getItem('loves');
    if (storedLikes) setLikes(JSON.parse(storedLikes));
    if (storedLoves) setLoves(JSON.parse(storedLoves));
  }, []);

  // Save likes/loves to localStorage
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('loves', JSON.stringify(loves));
  }, [loves]);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  // Counters
  const projectsCount = useCounter(25);
  const clientsCount = useCounter(10);
  const yearsCount = useCounter(5);

  const handleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleLove = (id: number) => {
    setLoves((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleNext = () => {
    setProjectIndex((prev) => {
      const next = (prev + 1) % filteredProjects.length;
      setSelectedProject(filteredProjects[next]);
      return next;
    });
  };

  const handlePrev = () => {
    setProjectIndex((prev) => {
      const next = (prev - 1 + filteredProjects.length) % filteredProjects.length;
      setSelectedProject(filteredProjects[next]);
      return next;
    });
  };

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

      {/* Animated Counters */}
      <section className="py-16 bg-muted/20">
        <div className="container-width grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold gradient-text animate-pulse">
              {projectsCount}+
            </h3>
            <p className="text-lg text-muted-foreground mt-2">Completed Projects</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold gradient-text animate-pulse">
              {clientsCount}+
            </h3>
            <p className="text-lg text-muted-foreground mt-2">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold gradient-text animate-pulse">
              {yearsCount}+
            </h3>
            <p className="text-lg text-muted-foreground mt-2">Years Experience</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our most impactful and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setProjectIndex(projects.findIndex((p) => p.id === project.id));
                }}
                className="group hover:shadow-xl transition-all duration-500 gradient-card overflow-hidden relative transform hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg font-semibold">
                      View Details
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              All Projects
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our complete portfolio of successful projects
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category
                      ? 'gradient-primary text-white shadow-lg'
                      : 'hover:scale-105'
                  }`}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  setProjectIndex(projects.findIndex((p) => p.id === project.id));
                }}
                className="group hover:shadow-card transition-all duration-500 gradient-card overflow-hidden relative transform hover:-translate-y-2 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="aspect-video bg-muted overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm font-medium">
                      View Details
                    </span>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full relative shadow-2xl animate-fade-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech: string, idx: number) => (
                  <Badge key={idx} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Reactions */}
              <div className="flex gap-4 mb-4">
                <Button
                  onClick={() => handleLike(selectedProject.id)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="h-4 w-4" /> {likes[selectedProject.id] || 0}
                </Button>
                <Button
                  onClick={() => handleLove(selectedProject.id)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Heart className="h-4 w-4 text-red-500" /> {loves[selectedProject.id] || 0}
                </Button>
              </div>

              {/* GitHub Link */}
              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="h-4 w-4" /> GitHub
                </Button>
              </a>
            </div>

            {/* Next/Previous Navigation */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <button
                onClick={handlePrev}
                className="bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <button
                onClick={handleNext}
                className="bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}

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
            <a
              href="https://wa.me/254111700506"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="gradient-primary text-white shadow-primary px-8 animate-glow"
              >
                Start Your Project
              </Button>
            </a>

            <a href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 transition-all hover:scale-105"
              >
                View More Work
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Extra CSS Animations */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease forwards;
          }

          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(59,130,246,0.4), 0 0 10px rgba(59,130,246,0.3); }
            50% { box-shadow: 0 0 20px rgba(59,130,246,0.8), 0 0 30px rgba(59,130,246,0.6); }
            100% { box-shadow: 0 0 5px rgba(59,130,246,0.4), 0 0 10px rgba(59,130,246,0.3); }
          }
          .animate-glow {
            animation: glow 2s infinite;
          }
        `}
      </style>
    </div>
  );
}
