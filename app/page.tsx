"use client";

import { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { StarsBackground } from "@/components/ui/stars-background";
import { Button } from "@/components/ui/moving-border";
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FocusCards } from "@/components/ui/focus-cards";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { 
  FaCode, 
  FaPalette, 
  FaMobile,
  FaReact,
  FaDatabase,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [formResult, setFormResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormResult("");
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "bf52ccad-a636-4f93-9d1f-b1b1430c12c3");
    
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    
    const data = await response.json();
    setIsSubmitting(false);
    
    if (data.success) {
      setFormResult("success");
      (event.target as HTMLFormElement).reset();
    } else {
      setFormResult("error");
    }
  };

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Testimonials", link: "#testimonials" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern shopping experience with real-time inventory",
      image: "/ecommerce.jpg",
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics platform with beautiful data visualization",
      image: "/SAAS.png",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive financial management",
      image: "/Mobile Banking.jpg",
    },
  ];

  const skills = [
    {
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that users love",
      icon: <FaPalette className="h-6 w-6 text-cyan-500" />,
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <Image
            src="/ui ux.jpg"
            alt="UI/UX Design"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "Frontend Development",
      description: "Building responsive web applications with modern frameworks",
      icon: <FaCode className="h-6 w-6 text-cyan-500" />,
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <Image
            src="/frontend dev.jpg"
            alt="Frontend Development"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "React & Next.js",
      description: "Expert in React ecosystem and server-side rendering",
      icon: <FaReact className="h-6 w-6 text-cyan-500" />,
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <Image
            src="/next js.jpg"
            alt="Next.js"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "Mobile First",
      description: "Designing for all devices and screen sizes",
      icon: <FaMobile className="h-6 w-6 text-cyan-500" />,
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <Image
            src="/mobile design.jpg"
            alt="Mobile First"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "Backend Integration",
      description: "Seamlessly connecting frontend with APIs and databases",
      icon: <FaDatabase className="h-6 w-6 text-cyan-500" />,
      header: (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
          <Image
            src="/backend.jpg"
            alt="Backend Integration"
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
  ];

  const timelineData = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-slate-300 text-xs md:text-sm font-normal mb-4">
            Started learning different programming languages like python, Javascript , c++ to get into the programming world 
          </p>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-slate-300 text-xs md:text-sm font-normal">
              Enrolled in <strong>Bsc Software Engineering program at Ghana Communication Technology University</strong>.
              Became good enough with javascript , html , css , php , sql and dived right away into more practical projects.
              I started learning both frontend and backend frameworks like next js , laravel , django around this time. 
              I also started sharing my projects on github and collaborating with other developers on other 
              projects.
          </p>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-slate-300 text-xs md:text-sm font-normal">
            Started freelancing and charging for my services and added UI UX design to my skillset.
          </p>
        </div>
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with this designer was an absolute pleasure. The attention to detail and creative solutions exceeded our expectations.",
      name: "Akosua Mensah Jennifer",
      title: "",
      rating: 5,
    },
    {
      quote:
        "The portfolio speaks for itself. Modern, clean, and incredibly smooth. Exactly what we needed for our product launch.",
      name: "Williams Asante",
      title: "",
      rating: 5,
    },
    {
      quote:
        "Exceptional work on our dashboard redesign. User engagement increased by 50% within the first month of launch.",
      name: "Boateng Peter",
      title: "",
      rating: 4,
    },
    {
      quote:
        "The animations and interactions are buttery smooth. Our users constantly compliment the new interface.",
      name: "Unknown Account",
      title: "",
      rating: 5,
    },
    {
      quote:
        "Professional, creative, and always delivers on time. One of the best designers we've worked with.",
      name: "Osei stephen",
      title: "",
      rating: 4,
    },
  ];

  return (
    <main className="relative bg-slate-950 flex justify-center items-center flex-col overflow-hidden mx-auto w-full">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <section id="home" className="w-full min-h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <StarsBackground className="absolute inset-0" />
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(34, 211, 238, 0.3)"
          />
        </div>
        
        <div className="relative z-10 p-4 max-w-7xl mx-auto w-full text-center flex flex-col items-center justify-center min-h-screen">
          <div className="uppercase tracking-widest text-xs text-cyan-400 mb-4">
            Welcome to my portfolio
          </div>
          
          <TextGenerateEffect
            words="Crafting Beautiful Digital Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold mb-6"
          />
          
          <p className="text-slate-400 md:text-lg lg:text-xl mb-8 max-w-2xl">
            Hi, I'm a Designer & Developer specializing in creating stunning,
            user-centered interfaces with cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              borderRadius="1.75rem"
              className="bg-slate-900 text-white border-slate-800 hover:scale-105 transition-transform"
              as="a"
              href="#projects"
            >
              View My Work
            </Button>
            <Button
              borderRadius="1.75rem"
              className="bg-cyan-500/10 text-cyan-400 border-cyan-500/50 hover:scale-105 transition-transform"
              as="a"
              href="#contact"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full relative py-20 overflow-hidden">
        <BackgroundBeams className="absolute inset-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4">
              About Me
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>
          
          <CardContainer className="inter-var mx-auto">
            <CardBody className="bg-slate-900/50 relative group/card border-slate-700/50 border w-auto sm:w-[30rem] h-auto rounded-xl p-6 backdrop-blur-sm">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-slate-200"
              >
                Creative Designer & Developer
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-slate-400 text-sm max-w-sm mt-2"
              >
                With over 5 years of experience in digital design and development,
                I specialize in transforming ideas into beautiful, functional
                interfaces.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src="/owner.jpg"
                  alt="Portfolio Owner"
                  width={480}
                  height={320}
                  className="h-60 w-full rounded-xl object-cover"
                />
              </CardItem>
              <div className="flex justify-center items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#experience"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  Learn More →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-slate-400 text-lg">
              Technologies and tools I work with
            </p>
          </div>
          
          <BentoGrid className="max-w-7xl mx-auto">
            {skills.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-20 relative overflow-hidden">
        <WavyBackground
          className="w-full"
          containerClassName="w-full py-20"
          backgroundFill="rgba(2, 6, 23, 1)"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4">
                Featured projects from my main service areas
              </h2>
              <p className="text-slate-400 text-lg">
                Works that showcase my most commonly delivered services.
              </p>
            </div>
            
            <FocusCards cards={projects} />
          </div>
        </WavyBackground>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="w-full">
        <Timeline data={timelineData} />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4">
              Client Testimonials
            </h2>
            <p className="text-slate-400 text-lg">
              What people say about working with me
            </p>
          </div>
          
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-20 relative">
        <BackgroundBeams className="absolute inset-0" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-4">
              Let's Work Together
            </h2>
            <p className="text-slate-400 text-lg">
              Have a project in mind? Let's create something amazing
            </p>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="New Contact Form Submission from Portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <Button
                borderRadius="1rem"
                className="w-full bg-slate-900 text-white border-slate-800 h-14"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              {formResult === "success" && (
                <p className="text-center text-cyan-400 text-sm">Message sent successfully! I'll get back to you soon.</p>
              )}
              {formResult === "error" && (
                <p className="text-center text-red-400 text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
            
            <div className="flex justify-center gap-6 mt-8 pt-8 border-t border-slate-800">
              <a href="https://wa.me/2330202075774" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <FaWhatsapp className="h-6 w-6" />
              </a>
              <a href="mailto:jklmcxot@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-slate-500 text-sm">
          <p>© 2025 Designer Portfolio. Crafted with passion and Aceternity UI.</p>
        </div>
      </footer>
    </main>
  );
}
