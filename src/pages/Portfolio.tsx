import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Github, 
  Eye,
  Code,
  Smartphone,
  Globe,
  ArrowRight,
  Star,
  Calendar,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import portfolioImage from "@/assets/portfolio-gallery.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "EcoTrack - Sustainability Platform",
      category: "Web Application",
      description: "A comprehensive platform for tracking environmental impact and sustainability metrics for businesses.",
      image: "🌱",
      technologies: ["React", "Node.js", "PostgreSQL", "D3.js"],
      features: ["Real-time analytics", "Carbon footprint tracking", "Compliance reporting"],
      client: "GreenTech Solutions",
      year: "2024",
      rating: 5,
      color: "green"
    },
    {
      id: 2,
      title: "FinanceFlow - Banking App",
      category: "Mobile Application",
      description: "Secure mobile banking application with advanced features for personal finance management.",
      image: "💳",
      technologies: ["React Native", "TypeScript", "Firebase", "Stripe"],
      features: ["Biometric authentication", "Budget tracking", "Investment portfolio"],
      client: "NextGen Bank",
      year: "2024",
      rating: 5,
      color: "blue"
    },
    {
      id: 3,
      title: "HealthHub - Telemedicine Portal",
      category: "Web Platform",
      description: "Complete telemedicine solution connecting patients with healthcare providers worldwide.",
      image: "🏥",
      technologies: ["Next.js", "WebRTC", "MongoDB", "Socket.io"],
      features: ["Video consultations", "Prescription management", "Health records"],
      client: "MedConnect",
      year: "2023",
      rating: 5,
      color: "purple"
    },
    {
      id: 4,
      title: "EduPlatform - Learning Management",
      category: "Web Application",
      description: "Interactive learning platform with advanced course management and student tracking.",
      image: "📚",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      features: ["Course builder", "Progress tracking", "Interactive quizzes"],
      client: "LearnSmart Academy",
      year: "2023",
      rating: 5,
      color: "orange"
    },
    {
      id: 5,
      title: "FoodieConnect - Restaurant Network",
      category: "Mobile & Web",
      description: "Social platform for food enthusiasts with restaurant discovery and review features.",
      image: "🍽️",
      technologies: ["React", "React Native", "Express.js", "MongoDB"],
      features: ["Restaurant finder", "Social reviews", "Delivery integration"],
      client: "Culinary Ventures",
      year: "2023",
      rating: 4,
      color: "pink"
    },
    {
      id: 6,
      title: "PropertyPro - Real Estate Platform",
      category: "Web Application",
      description: "Comprehensive real estate platform with virtual tours and property management tools.",
      image: "🏡",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "AWS"],
      features: ["Virtual tours", "Property management", "Market analytics"],
      client: "RealtyTech Corp",
      year: "2022",
      rating: 5,
      color: "cyan"
    }
  ];

  const categories = ["All", "Web Application", "Mobile Application", "Web Platform", "Mobile & Web"];

  const getGradientClass = (color: string) => {
    switch (color) {
      case "green": return "bg-gradient-accent";
      case "blue": return "bg-gradient-secondary";
      case "purple": return "bg-gradient-primary";
      case "orange": return "bg-orange";
      case "pink": return "bg-pink";
      case "cyan": return "bg-cyan";
      default: return "bg-gradient-primary";
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Discover our latest projects and see how we've helped businesses transform 
            their digital presence with innovative solutions.
          </p>
        </div>

        {/* Hero Image */}
        <section className="mb-24">
          <div className="relative rounded-3xl overflow-hidden group">
            <img
              src={portfolioImage}
              alt="Portfolio Showcase"
              className="w-full h-96 object-cover group-hover:scale-105 transition-smooth"
            />
            <div className="absolute inset-0 bg-gradient-hero/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  500+ Projects Delivered
                </h2>
                <p className="text-xl">Excellence in every pixel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-gradient-primary border-0 hover:shadow-purple" : "hover:bg-purple hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-glow transition-smooth border-0 overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image/Icon */}
                  <div className={`h-48 ${getGradientClass(item.color)} flex items-center justify-center text-6xl relative overflow-hidden`}>
                    <div className="text-white/90 group-hover:scale-110 transition-spring">
                      {item.image}
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-smooth flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-purple">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-blue">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {item.category}
                      </Badge>
                      <div className="flex items-center gap-1">
                        {renderStars(item.rating)}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-purple transition-smooth">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.features.map((feature, index) => (
                          <span key={index} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {item.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {item.client}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.year}
                      </div>
                    </div>

                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-purple text-purple hover:bg-purple hover:text-white"
                    >
                      <Link to="/contact">
                        View Case Study
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 rounded-3xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the latest and most reliable technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {["React", "Vue.js", "Angular", "Node.js", "Python", "React Native", "TypeScript", "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL"].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-rainbow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold">{tech}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                4.9★
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-hero text-white overflow-hidden">
            <CardContent className="p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Join our portfolio of successful projects. Let's create something amazing together 
                that will showcase your brand and drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple text-xl px-12 py-8 rounded-full"
                >
                  <Link to="/contact">
                    Start Your Project
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue text-xl px-12 py-8 rounded-full"
                >
                  <Link to="/services">
                    View Services
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

export default Portfolio;