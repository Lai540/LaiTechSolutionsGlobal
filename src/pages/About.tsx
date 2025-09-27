import { Users, Target, Eye, Award, Globe, Heart, Rocket, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import founderPhoto from '@/assets/founder-photo.jpg';
import techOffice from '@/assets/tech-office.jpg';

const values = [
  { icon: Target, title: "Innovation", description: "Constantly pushing boundaries with cutting-edge technology solutions" },
  { icon: Users, title: "Client-Centric", description: "Your success is our priority - we build lasting partnerships" },
  { icon: Award, title: "Excellence", description: "Committed to delivering the highest quality in everything we do" },
  { icon: Globe, title: "Global Impact", description: "Making technology accessible and beneficial worldwide" },
  { icon: Heart, title: "Integrity", description: "Transparent communication and ethical business practices" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Hero Section */}
      <section className="relative gradient-hero text-white py-32 flex flex-col items-center justify-center overflow-hidden">
        {/* Placeholder animated circles */}
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-primary/20 blur-3xl top-10 left-10 animate-slow-spin"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-secondary/20 blur-3xl bottom-0 right-0 animate-slow-spin"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        />
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">About LaiTech Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 text-center">
            Transforming businesses through innovative digital solutions and creative excellence.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="lg:order-2 h-96 rounded-lg bg-cover bg-center shadow-lg relative"
              style={{ backgroundImage: `url(${techOffice})` }}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="h-full bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </motion.div>

            <div className="lg:order-1">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  To empower businesses and individuals with innovative, reliable, and cost-effective technology solutions 
                  that drive growth, efficiency, and success. Technology should be accessible, practical, and transformative.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}>
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become a globally recognized leader in technology solutions, driving innovation, quality, and client success. 
                  Every business, regardless of size, should have access to world-class technology solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <motion.h3 
            className="text-2xl font-bold text-foreground mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            What Sets Us Apart
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[ 
              { icon: Rocket, title: "Global Expertise, Local Touch", desc: "World-class solutions with personalized service" },
              { icon: Briefcase, title: "Full-Service Capabilities", desc: "From concept to deployment and beyond" },
              { icon: Award, title: "Cutting-Edge Technology", desc: "Always using the latest tools and frameworks" },
              { icon: Heart, title: "Transparent Communication", desc: "Clear timelines, regular updates, honest feedback" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <item.icon className="h-6 w-6 text-primary mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Bio */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <motion.div className="text-center mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Founder</h2>
              <p className="text-xl text-muted-foreground">Driving innovation with passion and expertise</p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="lg:col-span-1">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500">
                  <img src={founderPhoto} alt="LaiTech Solutions Founder" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="lg:col-span-2 space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founder & CEO of LaiTech Solutions Global. Over 5 years of experience in technology and business development. Combines technical expertise with strategic vision.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Passionate about innovation and digital accessibility, Wilfred leads a dedicated team, ensuring excellence, integrity, and global impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Under his leadership, LaiTech Solutions has launched innovative projects, built strong partnerships worldwide, and continues to expand its digital footprint.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container-width section-padding">
          <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}>
                <Card className="text-center hover:shadow-card transition-smooth gradient-card">
                  <CardHeader>
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Ambition */}
      <section className="py-20 gradient-hero text-white relative overflow-hidden">
        {/* Animated placeholder circles */}
        <motion.div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-3xl top-10 left-1/2 -translate-x-1/2 animate-slow-spin" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 70, ease: "linear" }} />
        <div className="container-width section-padding text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-6">Our Global Ambition</h2>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              LaiTech Solutions is committed to serving clients worldwide. Our solutions transcend borders, building a global network of partnerships and capabilities.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="opacity-90">Countries Served</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Global Support</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="transition-transform">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="opacity-90">Time Zones</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
