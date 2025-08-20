import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Users, Award, Lightbulb, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "@/assets/team-photo.jpg";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation.",
      image: "👩‍💼"
    },
    {
      name: "Alex Chen",
      role: "CTO",
      bio: "Full-stack architect passionate about scalable solutions.",
      image: "👨‍💻"
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Design",
      bio: "Creative director specializing in user experience design.",
      image: "👩‍🎨"
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Expert in modern web technologies and performance optimization.",
      image: "👨‍🔬"
    },
    {
      name: "Emily Watson",
      role: "Project Manager",
      bio: "Ensures seamless project delivery and client satisfaction.",
      image: "👩‍💼"
    },
    {
      name: "Michael Brown",
      role: "Marketing Director",
      bio: "Strategic thinker driving growth and brand awareness.",
      image: "👨‍💼"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that shape the future of technology."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Our success comes from working closely with clients and fostering a culture of teamwork and creativity."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in every project we deliver, bringing enthusiasm to every challenge."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions reach across the globe, making a positive difference in businesses worldwide."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that drive real business value for our clients."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">ModernTech</span>
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of innovators, creators, and problem-solvers dedicated to 
            transforming businesses through cutting-edge digital solutions.
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 bg-gradient-primary text-white overflow-hidden hover:shadow-purple transition-smooth">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 mr-4" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, 
                  enhance efficiency, and create exceptional user experiences. We believe 
                  technology should be accessible, powerful, and transformative.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-secondary text-white overflow-hidden hover:shadow-blue transition-smooth">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <Heart className="h-10 w-10 mr-4" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-xl text-white/90 leading-relaxed">
                  To be the leading force in digital transformation, creating a world where 
                  every business, regardless of size, has access to enterprise-level technology 
                  solutions that fuel their success.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 by a team of tech enthusiasts, ModernTech started as a small 
                  group of developers with a big vision: to make cutting-edge technology accessible 
                  to businesses of all sizes.
                </p>
                <p>
                  What began as a passion project quickly grew into a full-service digital agency. 
                  We've helped over 500 businesses transform their operations, from startups 
                  launching their first app to enterprises modernizing their entire infrastructure.
                </p>
                <p>
                  Today, we're proud to be recognized as industry leaders in web development, 
                  mobile applications, and digital transformation strategies.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="bg-gradient-primary border-0 hover:shadow-purple">
                  <Link to="/contact">
                    Join Our Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={teamPhoto}
                alt="ModernTech Team"
                className="w-full rounded-2xl shadow-elevated hover:shadow-glow transition-smooth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple/20 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-spring">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-24 bg-gradient-to-br from-muted/30 via-background to-muted/30 rounded-3xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              By the Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                4+
              </div>
              <div className="text-lg text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-lg text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-lg text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
                99%
              </div>
              <div className="text-lg text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-hero text-white overflow-hidden">
            <CardContent className="p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                Let's discuss how we can help transform your business with innovative 
                digital solutions tailored to your unique needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-purple text-xl px-12 py-8 rounded-full"
                >
                  <Link to="/contact">
                    Start a Conversation
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue text-xl px-12 py-8 rounded-full"
                >
                  <Link to="/services">
                    View Our Services
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

export default About;