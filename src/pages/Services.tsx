import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Palette, 
  BarChart3, 
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Rocket,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-workspace.jpg";

const Services = () => {
  const primaryServices = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and cutting-edge technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Full-stack development", "API integration", "Performance optimization"],
      color: "purple",
      price: "Starting at $5,000"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      features: ["React Native", "iOS & Android", "App Store deployment", "Push notifications"],
      color: "blue",
      price: "Starting at $8,000"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality to create memorable digital experiences.",
      features: ["User research", "Wireframing & prototyping", "Design systems", "Usability testing"],
      color: "green",
      price: "Starting at $3,000"
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that boost your online presence and drive meaningful engagement with your target audience.",
      features: ["SEO optimization", "Social media marketing", "Content strategy", "Analytics & reporting"],
      color: "orange",
      price: "Starting at $2,000/month"
    }
  ];

  const additionalServices = [
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment integration and inventory management."
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security audits and implementation of robust protection measures."
    },
    {
      icon: Database,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for optimal performance."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed and efficiency improvements for existing applications and websites."
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Strategic technology consulting to help plan and execute digital transformation."
    },
    {
      icon: Rocket,
      title: "Startup Solutions",
      description: "Comprehensive packages designed specifically for startups and growing businesses."
    }
  ];

  const getGradientClass = (color: string) => {
    switch (color) {
      case "purple": return "bg-gradient-primary";
      case "blue": return "bg-gradient-secondary";
      case "green": return "bg-gradient-accent";
      case "orange": return "bg-orange";
      default: return "bg-gradient-primary";
    }
  };

  const getShadowClass = (color: string) => {
    switch (color) {
      case "purple": return "hover:shadow-purple";
      case "blue": return "hover:shadow-blue";
      case "green": return "hover:shadow-green";
      case "orange": return "hover:shadow-elevated";
      default: return "hover:shadow-purple";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and 
            accelerate your growth in the modern marketplace.
          </p>
        </div>

        {/* Hero Image */}
        <section className="mb-24">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={servicesImage}
              alt="Our Services Workspace"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple/80 via-blue/60 to-green/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Digital Excellence
                </h2>
                <p className="text-xl">Delivered with precision and passion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Services */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our flagship offerings that drive digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {primaryServices.map((service, index) => (
              <Card key={index} className={`group ${getShadowClass(service.color)} transition-smooth border-0 overflow-hidden`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-xl ${getGradientClass(service.color)} flex items-center justify-center group-hover:scale-110 transition-spring`}>
                        <service.icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{service.title}</CardTitle>
                        <Badge variant="outline" className="mt-2">
                          {service.price}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-foreground">What's Included:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild 
                    variant="outline" 
                    className={`border-2 border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white w-full`}
                  >
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized solutions to meet your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth border-0 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-rainbow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mb-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 rounded-3xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we turn your vision into reality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-muted-foreground">
                We understand your goals, challenges, and requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-muted-foreground">
                We create a detailed roadmap and project timeline
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-muted-foreground">
                We build your solution with regular updates and feedback
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Launch</h3>
              <p className="text-muted-foreground">
                We deploy and provide ongoing support for your success
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-hero text-white overflow-hidden">
            <CardContent className="p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs. 
                Our team is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple text-xl px-12 py-8 rounded-full"
                >
                  <Link to="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue text-xl px-12 py-8 rounded-full"
                >
                  <Link to="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;