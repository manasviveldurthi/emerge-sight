import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Users, Globe, Star, Rocket, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-modern.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern Technology Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in">
            Welcome to the
            <span className="bg-gradient-hero bg-clip-text text-transparent block mt-2">
              Digital Future
            </span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-6 font-medium">
            Innovation Meets Excellence
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge technology solutions designed for the modern world. 
            We create digital experiences that drive growth, enhance efficiency, and deliver exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary border-0 hover:shadow-purple text-xl px-12 py-8 rounded-full"
            >
              <Link to="/portfolio">
                Explore Our Work
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-blue text-blue hover:bg-blue hover:text-white text-xl px-12 py-8 rounded-full"
            >
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">ModernTech</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We combine creativity, technology, and strategy to deliver solutions that 
              transform businesses and create lasting impact in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-glow transition-spring border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experience blazing-fast performance with our optimized solutions that deliver results in record time.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-spring border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our skilled professionals bring years of experience and innovative thinking to every project.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-spring border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Serving clients worldwide with scalable solutions that work across borders and cultures.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-spring border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-rainbow rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">5-Star Quality</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Premium quality guaranteed with attention to detail and commitment to excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-spring border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-pink rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                  <Rocket className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Future Ready</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built with tomorrow's technology today, ensuring your investment stands the test of time.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-glow transition-spring border-0 bg-card/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-orange rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Secure & Reliable</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise-grade security and reliability you can trust for your mission-critical applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Numbers That Speak
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our track record of success speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-lg text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-lg text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">99%</div>
              <div className="text-lg text-white/80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">24/7</div>
              <div className="text-lg text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have revolutionized their operations with our 
            innovative technology solutions. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary border-0 hover:shadow-purple text-xl px-12 py-8 rounded-full"
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-green text-green hover:bg-green hover:text-white text-xl px-12 py-8 rounded-full"
            >
              <Link to="/portfolio">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;