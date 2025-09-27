import { useState, useRef } from "react"
import { Calendar, FileText, Users, Zap, DollarSign, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"

const whyChooseUs = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick project delivery without compromising quality",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with years of experience",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Fair pricing with transparent cost breakdown",
  },
  {
    icon: FileText,
    title: "Detailed Proposals",
    description: "Comprehensive project plans and documentation",
  },
]

export default function Quote() {
  const formRef = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        "service_qi1lpd7", // replace with your EmailJS service ID
        "template_rqosypu", // replace with your EmailJS template ID
        formRef.current!,
        "_ifa1w4Nk28CK7c35" // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Your quote request was sent successfully!")
          formRef.current?.reset()
        },
        (error) => {
          alert("❌ Failed to send, please try again later.")
          console.error(error)
        }
      )
      .finally(() => setIsSending(false))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container-width section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Tell us about your project and receive a detailed proposal with timeline
            and cost breakdown within 24 hours.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose LaiTech Solutions?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to delivering exceptional results for every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-smooth gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Project Details</h2>
              <p className="text-xl text-muted-foreground">
                The more details you provide, the more accurate our quote will be
              </p>
            </div>
          </div>
            <div>
                <Card className="gradient-card shadow-card">
                  <CardContent className="p-6">
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input name="firstName" id="firstName" placeholder="John" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input name="lastName" id="lastName" placeholder="Doe" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" id="email" type="email" placeholder="john@example.com" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input name="phone" id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company (Optional)</Label>
                        <Input name="company" id="company" placeholder="Your Company Name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input name="subject" id="subject" placeholder="What can we help you with?" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          name="message"
                          id="message"
                          rows={6}
                          placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSending}
                        className="w-full gradient-primary text-white shadow-primary"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        {isSending ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20">
        <div className="container-width section-padding text-center">
          <h2 className="text-4xl font-bold text-foreground mb-12">What Happens Next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">1. We Review</h3>
              <p className="text-muted-foreground">
                Our team carefully reviews your requirements and assesses the project scope.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">2. We Propose</h3>
              <p className="text-muted-foreground">
                You receive a detailed proposal with timeline, milestones, and cost breakdown.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">3. We Deliver</h3>
              <p className="text-muted-foreground">
                Once approved, we start working and keep you updated throughout the process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
