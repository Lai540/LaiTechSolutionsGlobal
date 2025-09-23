import { Users, Target, Eye, Award, Globe, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import founderPhoto from '@/assets/founder-photo.jpg';
import techOffice from '@/assets/tech-office.jpg';

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge technology solutions"
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority - we build lasting partnerships"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality in everything we do"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Making technology accessible and beneficial worldwide"
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent communication and ethical business practices"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container-width section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About LaiTech Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
            We are a forward-thinking technology company dedicated to transforming 
            businesses through innovative digital solutions and creative excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div 
                className="h-96 rounded-lg bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${techOffice})` }}
              >
                <div className="h-full bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          <div className="lg:order-1">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To empower businesses and individuals by providing innovative, reliable, and 
                cost-effective technology solutions that drive growth, efficiency, and success 
                in the digital age. We believe technology should be accessible, practical, 
                and transformative.
              </p>
              
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become a globally recognized leader in technology solutions, known for 
                our innovation, quality, and commitment to client success. We envision a 
                future where every business, regardless of size, has access to world-class 
                technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="gradient-card p-8 rounded-lg shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What Sets Us Apart</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Global Expertise, Local Touch</h4>
                  <p className="text-muted-foreground">World-class solutions with personalized service</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Full-Service Capabilities</h4>
                  <p className="text-muted-foreground">From concept to deployment and beyond</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Cutting-Edge Technology</h4>
                  <p className="text-muted-foreground">Always using the latest tools and frameworks</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Transparent Communication</h4>
                  <p className="text-muted-foreground">Clear timelines, regular updates, honest feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Founder</h2>
              <p className="text-xl text-muted-foreground">
                Driving innovation with passion and expertise
              </p>
            </div>
            
            <Card className="gradient-card shadow-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                      <img 
                        src={founderPhoto} 
                        alt="LaiTech Solutions Founder" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      WILFRED LAI 
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      With over 5 years of experience in technology and business development, 
                      our founder brings a unique blend of technical expertise and strategic vision 
                      to LaiTech Solutions. Having worked with companies ranging from startups to 
                      Fortune 10+ enterprises, they understand the challenges businesses face in 
                      today's digital landscape.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Their passion for innovation and commitment to excellence drives our company's 
                      mission to make technology accessible and transformative for businesses worldwide. 
                      Under their leadership, LaiTech Solutions has grown into a trusted partner for 
                      organizations seeking reliable technology solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-smooth gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Ambition */}
      <section className="py-20 gradient-hero text-white">
        <div className="container-width section-padding text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Global Ambition</h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              LaiTech Solutions represents our commitment to serving clients worldwide. 
              We believe that great technology solutions should transcend geographical boundaries, 
              and we're building a global network of partnerships and capabilities to serve our 
              clients wherever they are.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="opacity-90">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="opacity-90">Global Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="opacity-90">Time Zones</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}