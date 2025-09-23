import { Shield, Lock, Eye, Users, FileText, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "We implement industry-standard security measures to protect your personal information."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We clearly explain what data we collect, how we use it, and who we share it with."
  },
  {
    icon: Users,
    title: "User Control", 
    description: "You have full control over your data and can request access, updates, or deletion anytime."
  },
  {
    icon: Lock,
    title: "Secure Storage",
    description: "All data is encrypted and stored on secure servers with regular backups and monitoring."
  }
];

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container-width section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information.
          </p>
          <p className="text-lg opacity-75 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core principles guide how we handle your personal information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-smooth gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <principle.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{principle.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="h-6 w-6 mr-3 text-primary" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                  <p className="text-muted-foreground">
                    When you use our services, we may collect personal information such as your name, 
                    email address, phone number, company information, and project details when you 
                    contact us or request a quote.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Information</h4>
                  <p className="text-muted-foreground">
                    We automatically collect certain technical information including your IP address, 
                    browser type, operating system, referring URLs, and pages visited to improve our 
                    website performance and user experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cookies and Analytics</h4>
                  <p className="text-muted-foreground">
                    We use cookies and similar technologies to enhance your browsing experience, 
                    analyze website traffic, and understand user preferences. You can control cookie 
                    settings through your browser.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="h-6 w-6 mr-3 text-primary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Delivery</h4>
                  <p className="text-muted-foreground">
                    We use your information to provide, maintain, and improve our services, 
                    communicate with you about your projects, and respond to your inquiries and support requests.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Business Communications</h4>
                  <p className="text-muted-foreground">
                    We may send you project updates, service notifications, and relevant business 
                    communications. You can opt out of marketing communications at any time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Legal Compliance</h4>
                  <p className="text-muted-foreground">
                    We may use or disclose your information as required by law, regulation, or legal process, 
                    or to protect the rights, property, and safety of our company and users.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="h-6 w-6 mr-3 text-primary" />
                  Data Protection & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Security Measures</h4>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Encryption</h4>
                  <p className="text-muted-foreground">
                    All sensitive data is encrypted both in transit and at rest using industry-standard 
                    encryption protocols. We regularly update our security practices and conduct security audits.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Access Controls</h4>
                  <p className="text-muted-foreground">
                    Access to your personal information is restricted to authorized personnel who need 
                    it to perform their job functions and are bound by confidentiality agreements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Globe className="h-6 w-6 mr-3 text-primary" />
                  Your Rights & Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Access & Portability</h4>
                  <p className="text-muted-foreground">
                    You have the right to access, update, or request a copy of your personal information. 
                    You can also request data portability in a commonly used format.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Deletion & Correction</h4>
                  <p className="text-muted-foreground">
                    You can request deletion of your personal information or correction of inaccurate data. 
                    We will respond to such requests within the timeframe required by applicable law.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Marketing Opt-out</h4>
                  <p className="text-muted-foreground">
                    You can unsubscribe from marketing communications at any time by clicking the 
                    unsubscribe link in our emails or contacting us directly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="h-6 w-6 mr-3 text-primary" />
                  Third-Party Services & Data Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Providers</h4>
                  <p className="text-muted-foreground">
                    We may share your information with trusted third-party service providers who assist 
                    us in operating our website, conducting business, or serving you, provided they agree 
                    to keep this information confidential.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">No Sale of Personal Data</h4>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    for their marketing purposes. Your data is only shared as necessary to provide our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Analytics & Tools</h4>
                  <p className="text-muted-foreground">
                    We use analytics tools to understand how our website is used. These tools may collect 
                    anonymized data about your interactions with our site to help us improve our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy, your personal information, 
                  or would like to exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@laitechsolutions.co.ke</p>
                  <p><strong>Phone:</strong> +254740136761</p>
                  <p><strong>Address:</strong> LaiTech Solutions, Privacy Office</p>
                </div>
                <p className="text-muted-foreground mt-4">
                  We will respond to your inquiry within 30 days of receipt.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Policy Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or applicable laws. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the "Last Updated" date. Your continued use of our 
                  services after such changes indicates your acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}