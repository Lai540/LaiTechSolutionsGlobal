import { Scale, FileText, Shield, AlertTriangle, Globe, Copyright } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const legalSections = [
  {
    icon: FileText,
    title: "Terms of Service",
    description: "Your agreement with LaiTech Solutions for using our services"
  },
  {
    icon: Shield,
    title: "Liability & Warranties", 
    description: "Understanding our responsibilities and limitations"
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    description: "Rights and ownership of creative work and code"
  },
  {
    icon: Globe,
    title: "Jurisdiction",
    description: "Legal framework and governing law for our services"
  }
];

export default function Legal() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white py-20">
        <div className="container-width section-padding text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Legal Notice</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Important legal information governing the use of our services and website.
          </p>
          <p className="text-lg opacity-75 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Legal Overview */}
      <section className="py-20">
        <div className="container-width section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Legal Framework</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding your rights and responsibilities when using our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {legalSections.map((section, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-smooth gradient-card">
                <CardHeader>
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <section.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{section.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Content */}
      <section className="py-20 bg-muted/30">
        <div className="container-width section-padding">
          <div className="max-w-4xl mx-auto space-y-12">

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Scale className="h-6 w-6 mr-3 text-primary" />
                  Terms of Service
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Acceptance of Terms</h4>
                  <p className="text-muted-foreground">
                    By accessing or using LaiTech Solutions' services, you agree to be bound by these 
                    Terms of Service and all applicable laws and regulations. If you do not agree 
                    with any of these terms, you are prohibited from using our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Agreement</h4>
                  <p className="text-muted-foreground">
                    Our services are provided under specific project agreements that detail scope, 
                    timeline, deliverables, and compensation. Each project is governed by a separate 
                    contract in addition to these general terms.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Payment Terms</h4>
                  <p className="text-muted-foreground">
                    Payment terms vary by project and are specified in individual contracts. 
                    Generally, we require a deposit before work begins and final payment upon 
                    project completion. Late payments may incur additional fees.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Copyright className="h-6 w-6 mr-3 text-primary" />
                  Intellectual Property Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Work Product Ownership</h4>
                  <p className="text-muted-foreground">
                    Upon full payment, clients receive ownership of custom work products created 
                    specifically for their project, including custom code, designs, and content. 
                    This excludes any pre-existing intellectual property or tools used in development.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">LaiTech Solutions Rights</h4>
                  <p className="text-muted-foreground">
                    We retain rights to our general methodologies, techniques, know-how, and any 
                    pre-existing intellectual property. We also reserve the right to use completed 
                    projects in our portfolio with client permission.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Third-Party Components</h4>
                  <p className="text-muted-foreground">
                    Projects may include third-party software, libraries, or components subject to 
                    their own licenses. Clients are responsible for complying with these licenses 
                    in their use of the final product.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Shield className="h-6 w-6 mr-3 text-primary" />
                  Warranties & Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Warranty</h4>
                  <p className="text-muted-foreground">
                    We warrant that our services will be performed with professional competence and 
                    in accordance with industry standards. We provide bug fixes and minor adjustments 
                    for a specified period after project delivery.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Limitation of Liability</h4>
                  <p className="text-muted-foreground">
                    Our liability is limited to the total amount paid for the specific service in question. 
                    We are not liable for indirect, incidental, special, consequential, or punitive damages, 
                    including but not limited to loss of profits or data.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Disclaimer</h4>
                  <p className="text-muted-foreground">
                    Except as expressly stated herein, all services are provided "as is" without 
                    warranties of any kind, either express or implied, including but not limited to 
                    warranties of merchantability or fitness for a particular purpose.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="h-6 w-6 mr-3 text-primary" />
                  Confidentiality & Non-Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Confidential Information</h4>
                  <p className="text-muted-foreground">
                    We understand that projects may involve confidential business information. 
                    We maintain strict confidentiality of all client information and can execute 
                    additional NDAs as required.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Protection</h4>
                  <p className="text-muted-foreground">
                    All client data is handled in accordance with our Privacy Policy and applicable 
                    data protection laws. We implement appropriate security measures to protect 
                    against unauthorized access or disclosure.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Globe className="h-6 w-6 mr-3 text-primary" />
                  Jurisdiction & Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Governing Law</h4>
                  <p className="text-muted-foreground">
                    These terms and any disputes arising from our services are governed by the laws 
                    of [Jurisdiction], without regard to its conflict of law principles. 
                    Any legal proceedings must be brought in the courts of [Jurisdiction].
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dispute Resolution</h4>
                  <p className="text-muted-foreground">
                    We prefer to resolve disputes amicably through direct communication. If formal 
                    resolution is required, disputes may be subject to binding arbitration or 
                    mediation as agreed upon by both parties.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">International Clients</h4>
                  <p className="text-muted-foreground">
                    For international clients, specific jurisdictional arrangements may be made 
                    on a case-by-case basis and will be specified in individual project contracts.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Termination & Cancellation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Project Termination</h4>
                  <p className="text-muted-foreground">
                    Either party may terminate a project with written notice. Upon termination, 
                    the client is responsible for payment of all work completed to date, and we 
                    will deliver all work products in their current state.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cancellation Policy</h4>
                  <p className="text-muted-foreground">
                    Cancellation terms vary by project type and phase. Generally, deposits are 
                    non-refundable once work has commenced, but specific terms will be outlined 
                    in individual project agreements.
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
                  For questions about these legal terms or to request modifications, please contact:
                </p>
                <div className="space-y-2">
                  <p><strong>Legal Department:</strong> legal@laitechsolutions.com</p>
                  <p><strong>General Inquiries:</strong> info@laitechsolutions.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                </div>
                <p className="text-muted-foreground mt-4">
                  These terms may be updated periodically. Continued use of our services 
                  after changes constitutes acceptance of the updated terms.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}