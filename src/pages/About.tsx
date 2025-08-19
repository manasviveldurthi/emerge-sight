import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Globe, Users, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-emergency bg-clip-text text-transparent">Crisis Mapping</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            We're on a mission to revolutionize emergency response through innovative technology, 
            creating safer communities where every second counts and every life matters.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-0 bg-gradient-emergency text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                To provide cutting-edge crisis mapping technology that enables rapid emergency response, 
                saves lives, and builds resilient communities. We believe that with the right tools, 
                communities can better prepare for, respond to, and recover from emergencies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-tech text-white overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-white/90 leading-relaxed">
                A world where every community has access to real-time emergency response systems, 
                where technology bridges the gap between crisis and care, and where no emergency 
                goes unnoticed or unanswered.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What is Crisis Mapping */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            What is Crisis Mapping?
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-elevated">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Crisis Mapping is an innovative emergency response platform that combines real-time data collection, 
                  interactive mapping, and community-driven reporting to create a comprehensive crisis management ecosystem.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our platform enables emergency responders, government agencies, and community members to visualize, 
                  track, and respond to emergencies as they unfold. From natural disasters to public safety incidents, 
                  Crisis Mapping provides the tools needed for rapid, coordinated response efforts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By leveraging modern technology including GPS tracking, real-time notifications, data visualization, 
                  and mobile accessibility, we're transforming how communities prepare for and respond to crises.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Purpose & Impact */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Purpose & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-elevated transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-emergency rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Emergency Handling</h3>
                <p className="text-muted-foreground">
                  Streamline emergency response with real-time incident reporting, resource allocation, 
                  and coordinated response protocols that minimize response times.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elevated transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-tech rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-muted-foreground">
                  Enable lightning-fast emergency response through automated alerts, GPS tracking, 
                  and seamless communication between responders and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elevated transition-smooth">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-warning rounded-full flex items-center justify-center group-hover:scale-110 transition-bounce">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Saving Lives</h3>
                <p className="text-muted-foreground">
                  Our ultimate goal: saving lives through technology. Every feature we build, 
                  every optimization we make, is focused on protecting communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-emergency rounded-full flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly pushing the boundaries of what's possible in emergency response technology.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-tech rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-muted-foreground">
                Building solutions with and for communities, ensuring accessibility and inclusivity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-warning rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                Delivering reliable, high-quality solutions that emergency responders can depend on.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-hero text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Mission
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Whether you're an emergency responder, community leader, developer, or concerned citizen, 
                there's a place for you in building safer communities through technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/30 text-white rounded-md hover:bg-white hover:text-emergency transition-smooth text-lg font-medium"
                >
                  Get Involved
                </a>
                <a
                  href="/features"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/30 text-white rounded-md hover:bg-white hover:text-tech transition-smooth text-lg font-medium"
                >
                  Learn More
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;