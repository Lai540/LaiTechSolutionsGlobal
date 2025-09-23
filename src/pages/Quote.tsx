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

            <Card className="gradient-card shadow-card">
              <CardContent className="p-8">
                <form ref={formRef} onSubmit={sendEmail} className="space-y-8">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" name="fullName" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" name="company" placeholder="Your Company" />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-6">Project Details</h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="projectTitle">Project Title *</Label>
                        <Input id="projectTitle" name="projectTitle" placeholder="Brief title for your project" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="projectDescription">Project Description *</Label>
                        <Textarea
                          id="projectDescription"
                          name="projectDescription"
                          rows={6}
                          placeholder="Describe your project in detail..."
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSending}
                      className="gradient-primary text-white shadow-primary px-12 py-4"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {isSending ? "Sending..." : "Get My Free Quote"}
                    </Button>
                    <p className="text-sm text-muted-foreground mt-4">
                      We'll review your request and send you a detailed proposal within 24 hours.
                    </p>
                  </div>
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
