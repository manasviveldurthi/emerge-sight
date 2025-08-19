import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Monitor, 
  Smartphone, 
  Bell, 
  MapPin, 
  BarChart3, 
  Users, 
  ArrowRight 
} from "lucide-react";
import dashboardDemo from "@/assets/dashboard-demo.jpg";
import mobileAppDemo from "@/assets/mobile-app-demo.jpg";
import alertsDemo from "@/assets/alerts-demo.jpg";

const Demo = () => {
  const demoSections = [
    {
      icon: Monitor,
      title: "Emergency Response Dashboard",
      description: "Real-time command center interface with interactive maps, incident tracking, and resource management.",
      image: dashboardDemo,
      features: ["Live incident mapping", "Resource allocation", "Response coordination", "Data analytics"],
      badge: "Desktop Platform"
    },
    {
      icon: Smartphone,
      title: "Mobile Reporting App",
      description: "Citizen-facing mobile application for instant emergency reporting and community alerts.",
      image: mobileAppDemo,
      features: ["GPS-enabled reporting", "Photo attachments", "Emergency categories", "Offline capability"],
      badge: "Mobile App"
    },
    {
      icon: Bell,
      title: "Alert & Notification System",
      description: "Comprehensive alert system with multi-channel notifications and community coordination.",
      image: alertsDemo,
      features: ["Push notifications", "SMS alerts", "Email notifications", "Social media integration"],
      badge: "Communication Hub"
    }
  ];

  const interactiveFeatures = [
    {
      icon: MapPin,
      title: "Interactive Mapping",
      description: "Explore our real-time mapping interface with incident overlays and resource tracking."
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      description: "View comprehensive analytics and reporting tools for emergency management."
    },
    {
      icon: Users,
      title: "Multi-User Collaboration",
      description: "Experience seamless coordination between multiple response agencies."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Crisis Mapping <span className="bg-gradient-emergency bg-clip-text text-transparent">Demo</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Explore our comprehensive crisis mapping platform through interactive demonstrations 
            and real-world use case scenarios.
          </p>
          <Button size="lg" className="bg-gradient-emergency border-0 hover:shadow-emergency">
            <Play className="mr-2 h-5 w-5" />
            Start Interactive Demo
          </Button>
        </div>

        {/* Demo Sections */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Platform Overview
          </h2>
          <div className="space-y-16">
            {demoSections.map((section, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="relative group">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full rounded-xl shadow-elevated group-hover:shadow-2xl transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-smooth" />
                    <Button
                      size="lg"
                      className="absolute bottom-4 left-4 bg-gradient-emergency border-0 opacity-0 group-hover:opacity-100 transition-smooth"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      View Demo
                    </Button>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <Card className="border-0 shadow-elevated">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-emergency rounded-lg flex items-center justify-center">
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {section.badge}
                          </Badge>
                          <CardTitle className="text-2xl">{section.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {section.description}
                      </p>
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-foreground">Key Features:</h4>
                        {section.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-emergency rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="border-tech text-tech hover:bg-tech hover:text-white">
                        Try Interactive Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Features */}
        <section className="mb-20 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Interactive Demonstrations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interactiveFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth border-0 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emergency to-tech rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  <Button variant="ghost" size="sm" className="text-emergency hover:text-emergency">
                    Launch Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Real-World Scenarios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Natural Disaster Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  See how Crisis Mapping coordinates response during hurricanes, earthquakes, and floods.
                </p>
                <Badge variant="outline" className="border-emergency text-emergency">
                  Emergency Scenario
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Public Safety Incidents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explore coordination for accidents, medical emergencies, and public safety threats.
                </p>
                <Badge variant="outline" className="border-tech text-tech">
                  Public Safety
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-elevated">
              <CardHeader>
                <CardTitle className="text-lg">Community Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn how the platform supports crowd management and event safety coordination.
                </p>
                <Badge variant="outline" className="border-warning text-warning">
                  Event Management
                </Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-hero text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Implement Crisis Mapping?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Contact our team to schedule a personalized demonstration and discuss 
                implementation options for your community or organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-emergency text-lg px-8"
                >
                  Schedule Demo Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-tech text-lg px-8"
                >
                  Request Pricing
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Demo;