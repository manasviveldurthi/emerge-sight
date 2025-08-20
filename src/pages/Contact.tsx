import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Users, 
  Code, 
  Briefcase, 
  Heart,
  Send,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for your interest. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@crisismapping.org",
      subtext: "24/7 support available"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtext: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Innovation Drive",
      subtext: "Silicon Valley, CA 94025"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "< 24 Hours",
      subtext: "Emergency contacts faster"
    }
  ];

  const volunteerRoles = [
    {
      icon: Code,
      title: "Developers",
      description: "Help build and improve our platform with your coding skills.",
      skills: ["React/TypeScript", "Node.js", "Mobile Development", "GIS/Mapping APIs"]
    },
    {
      icon: Briefcase,
      title: "Emergency Professionals",
      description: "Share your expertise to help us build better emergency response tools.",
      skills: ["Emergency Management", "First Response", "Crisis Communication", "Training"]
    },
    {
      icon: Users,
      title: "Community Coordinators",
      description: "Help connect Crisis Mapping with communities and organizations.",
      skills: ["Outreach", "Training", "Documentation", "User Testing"]
    },
    {
      icon: Heart,
      title: "Advocates",
      description: "Spread awareness about Crisis Mapping and emergency preparedness.",
      skills: ["Social Media", "Content Creation", "Public Speaking", "Fundraising"]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="bg-gradient-primary bg-clip-text text-transparent">ModernTech</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge digital solutions? 
            Let's discuss your project and bring your vision to life.
          </p>
        </div>

        {/* Contact Form & Info */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-elevated">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="h-6 w-6 mr-3 text-purple" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="border-2 focus:border-purple"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="border-2 focus:border-emergency"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="border-2 focus:border-emergency"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your needs, questions, or how you'd like to get involved..."
                        rows={6}
                        required
                        className="border-2 focus:border-emergency resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-emergency border-0 hover:shadow-emergency"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-elevated hover:shadow-emergency transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-emergency rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-foreground font-medium">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Get Involved & Make a Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Join our community of volunteers, developers, and emergency professionals 
              working together to build safer communities through technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-smooth border-0">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emergency to-tech rounded-lg flex items-center justify-center group-hover:scale-110 transition-bounce">
                      <role.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{role.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {role.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Skills We Need:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="mb-20 bg-muted/30 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Emergency Support
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              For urgent technical issues affecting emergency response operations:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary border-0 hover:shadow-purple">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Hotline: +1 (555) 911-HELP
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-tech text-tech hover:bg-tech hover:text-white">
                <Mail className="mr-2 h-5 w-5" />
                emergency@crisismapping.org
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <Card className="border-0 bg-gradient-hero text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Safer Communities?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Whether you're looking to implement Crisis Mapping in your community, 
                contribute as a volunteer, or partner with us, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-emergency text-lg px-8"
                >
                  Schedule a Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-tech text-lg px-8"
                >
                  Join Our Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;