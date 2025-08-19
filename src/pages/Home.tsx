import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, MapPin, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-crisis-mapping.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Crisis Mapping Command Center"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Crisis Mapping
            </span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 font-medium">
            Technology for Safer Communities
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Empowering emergency responders and communities with real-time crisis mapping, 
            instant alerts, and coordinated response systems that save lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-emergency border-0 hover:shadow-emergency text-lg px-8 py-6"
            >
              <Link to="/demo">
                Explore Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-tech text-tech hover:bg-tech hover:text-white text-lg px-8 py-6"
            >
              <Link to="/features">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Crisis Mapping Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every second counts in emergency situations. Our technology bridges the gap 
              between crisis occurrence and coordinated response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-elevated transition-smooth border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-emergency rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Real-Time Protection</h3>
                <p className="text-muted-foreground">
                  Instant alerts and coordinated responses that keep communities safe.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elevated transition-smooth border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-tech rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Precise Mapping</h3>
                <p className="text-muted-foreground">
                  Interactive maps with real-time data visualization and resource tracking.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elevated transition-smooth border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-warning rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-muted-foreground">
                  Empowering citizens to report, respond, and support each other.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elevated transition-smooth border-0 bg-card/50 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-success rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Response</h3>
                <p className="text-muted-foreground">
                  Lightning-fast emergency coordination that saves precious time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make Your Community Safer?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of communities already using Crisis Mapping technology 
            to protect lives and coordinate emergency responses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-emergency text-lg px-8 py-6"
            >
              <Link to="/contact">
                Get Involved
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-tech text-lg px-8 py-6"
            >
              <Link to="/demo">
                View Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;