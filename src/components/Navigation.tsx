import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Mail, Phone, MessageCircle } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className="bg-background border-b border-border fixed top-0 w-full z-50">
        {/* Top Contact Bar */}
        <div className="bg-primary text-white text-sm py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Email - Left */}
            <a
              href="mailto:info@laitechsolutions.co.ke"
              className="flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-600 hover:bg-blue-700 transition"
            >
              <Mail className="h-4 w-4" />
              <span>info@laitechsolutions.co.ke</span>
            </a>

            {/* Phone - Center */}
            <a
              href="tel:+254740136761"
              className="flex items-center space-x-2 px-3 py-1 rounded-full bg-green-600 hover:bg-green-700 transition"
            >
              <Phone className="h-4 w-4" />
              <span>+254 740 136 761</span>
            </a>

            {/* WhatsApp - Right */}
            <a
              href="https://wa.me/254111700506"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500 hover:bg-emerald-600 transition"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>


        {/* Main Nav Bar */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <img
                src="/src/assets/logo.png"
                alt="Logo"
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">LaiTech Solutions</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary font-medium"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild>
                <Link to="/quote">Get Started</Link>
              </Button>

            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-accent">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    location.pathname === item.path
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-2">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to push content below nav */}
      <div className="pt-28" /> 
    </>
  )
}
