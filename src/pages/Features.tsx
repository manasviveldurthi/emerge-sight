import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  BarChart3, 
  Bell, 
  Package, 
  Smartphone, 
  Shield, 
  Users, 
  Clock,
  Database,
  Radio,
  Zap,
  Globe
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: MapPin,
      title: "Real-Time Reporting",
      description: "Instant incident reporting with GPS coordinates, photos, and detailed descriptions. Citizens and responders can submit reports directly from mobile devices.",
      benefits: ["GPS-enabled location tracking", "Photo and video attachments", "Categorized incident types", "Anonymous reporting options"],
      color: "emergency"
    },
    {
      icon: BarChart3,
      title: "Data Visualization on Maps",
      description: "Interactive maps displaying real-time emergency data, resource locations, and response activities. Visual analytics for better decision-making.",
      benefits: ["Interactive mapping interface", "Heat maps and density overlays", "Historical data analysis", "Custom layer controls"],
      color: "tech"
    },
    {
      icon: Bell,
      title: "Community Alerts",
      description: "Automated alert system that notifies community members about nearby emergencies, evacuation orders, and safety instructions.",
      benefits: ["Push notifications", "SMS and email alerts", "Geofenced notifications", "Multi-language support"],
      color: "warning"
    },
    {
      icon: Package,
      title: "Resource Tracking",
      description: "Monitor and manage emergency resources including personnel, vehicles, medical supplies, and shelter capacity in real-time.",
      benefits: ["Resource availability status", "Automated inventory updates", "Deployment tracking", "Capacity management"],
      color: "success"
    }
  ];

  const additionalFeatures = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with offline capabilities for areas with limited connectivity."
    },
    {
      icon: Shield,
      title: "Secure Communications",
      description: "End-to-end encrypted communications ensuring sensitive information remains protected."
    },
    {
      icon: Users,
      title: "Multi-Agency Coordination",
      description: "Seamless collaboration between different emergency response agencies and organizations."
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring with automated failover and backup systems."
    },
    {
      icon: Database,
      title: "Historical Analytics",
      description: "Comprehensive data analysis and reporting for improved emergency preparedness."
    },
    {
      icon: Radio,
      title: "Integration Ready",
      description: "Compatible with existing emergency systems including radio networks and sirens."
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Quick setup and deployment for new communities with minimal training required."
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Multi-language support and compliance with international emergency response standards."
    }
  ];

  const getGradientClass = (color: string) => {
    switch (color) {
      case "emergency": return "bg-gradient-emergency";
      case "tech": return "bg-gradient-tech";
      case "warning": return "bg-warning";
      case "success": return "bg-success";
      default: return "bg-gradient-emergency";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crisis Mapping <span className="bg-gradient-emergency bg-clip-text text-transparent">Features</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Discover the powerful features that make Crisis Mapping the most comprehensive 
            emergency response platform for modern communities.
          </p>
        </div>

        {/* Core Features */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Core Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth border-0 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg ${getGradientClass(feature.color)} flex items-center justify-center group-hover:scale-110 transition-bounce`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-emergency rounded-full mr-3 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Additional Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-emergency to-tech rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-20 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Built with Modern Technology
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-emergency rounded-full flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold">Web Platform</h3>
              <p className="text-sm text-muted-foreground">React & Modern Web</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-gradient-tech rounded-full flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold">Mobile Apps</h3>
              <p className="text-sm text-muted-foreground">iOS & Android</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-warning rounded-full flex items-center justify-center">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold">Cloud Infrastructure</h3>
              <p className="text-sm text-muted-foreground">Scalable & Reliable</p>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 mx-auto mb-3 bg-success rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-muted-foreground">Enterprise Grade</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-hero text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to See These Features in Action?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Experience the full power of Crisis Mapping with our interactive demo, 
                or contact us to discuss implementation for your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/30 text-white rounded-md hover:bg-white hover:text-emergency transition-smooth text-lg font-medium"
                >
                  View Demo
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/30 text-white rounded-md hover:bg-white hover:text-tech transition-smooth text-lg font-medium"
                >
                  Contact Sales
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Features;