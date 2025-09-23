import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-width section-padding">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">LT</span>
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">LaiTech Solutions</div>
                  <div className="text-xs text-muted-foreground font-medium">Global</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transforming ideas into reality through innovative technology solutions, 
                professional web services, and creative design.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services#python" className="text-muted-foreground hover:text-primary transition-smooth">Python Programming</Link></li>
                <li><Link to="/services#web" className="text-muted-foreground hover:text-primary transition-smooth">Web Development</Link></li>
                <li><Link to="/services#design" className="text-muted-foreground hover:text-primary transition-smooth">Graphic Design</Link></li>
                <li><Link to="/services#it" className="text-muted-foreground hover:text-primary transition-smooth">IT & Computing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
                <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-smooth">Portfolio</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</Link></li>
                <li><Link to="/quote" className="text-muted-foreground hover:text-primary transition-smooth">Get Quote</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact Info</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@laitechsolutionsglobal.co.ke</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+254 740136761</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Global Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} LaiTech Solutions Global. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/legal" className="text-muted-foreground hover:text-primary transition-smooth">
                Legal Notice
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}