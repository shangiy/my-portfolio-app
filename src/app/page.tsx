
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Linkedin, Twitter, MessageCircle, GitMerge, Database, Settings, Briefcase, Star, MapPin, Mail, Phone, Instagram } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollToTopButton } from '@/components/ui/scrollToTopButton';

export default function Home() {
  const [activeLink, setActiveLink] = useState('home');
  const sections = useRef<{[key: string]: HTMLElement | null}>({});

  const words = ["Website Designer", "System Developer", "Web Developer", "Software Engineer"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    };

    const typingTimeout = setTimeout(type, isDeleting ? 100 : 200);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex, words]);


  useEffect(() => {
    const sectionElements = document.querySelectorAll('section[id]');
    sectionElements.forEach(section => {
      sections.current[section.id] = section as HTMLElement;
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const sectionId in sections.current) {
        const section = sections.current[sectionId];
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveLink(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#portfolio', label: 'PORTFOLIO' },
    { href: '#testimonials', label: 'TESTIMONIALS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Home"
          >
            <span className="font-headline text-2xl font-bold text-transparent bg-clip-text text-stroke">Coder</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mx-auto">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setActiveLink(href.substring(1))}
                className={`transition-colors hover:text-primary/80 ${
                  activeLink === href.substring(1)
                    ? 'text-primary'
                    : 'text-foreground/60'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end">
            <Button>Hire Me</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="home"
          className="w-full py-24 md:py-32 lg:py-40"
        >
          <div className="container grid gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <p className="text-primary font-semibold">I'm Mushangi P</p>
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl min-h-[72px] sm:min-h-[80px] md:min-h-[96px] text-transparent bg-clip-text text-stroke">
                  {text}
                  <span className="animate-ping text-primary">|</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I design and build stunning, user-friendly websites and applications using modern technologies. Together, we can transform your ideas into reality.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Web Design</Badge>
                  <Badge variant="secondary">Frontend Development</Badge>
                  <Badge variant="secondary">UI/UX Design</Badge>
              </div>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><MessageCircle /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">View My Work</Button>
                <Button size="lg" variant="outline">Download CV</Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/homeUI.png"
                alt="Mushangi P"
                width={600}
                height={800}
                className="rounded-xl object-cover"
                data-ai-hint="man portrait"
              />
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-24 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                Get to know more about my background and experience
              </p>
            </div>
            <div className="mt-12 p-8 rounded-lg bg-card grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Who I Am</h3>
                <p className="text-muted-foreground">
                  I'm a passionate web developer and UI/UX designer with over 5 years of experience creating digital experiences that users love. I specialize in frontend development and have worked with various companies and startups.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new design tools. I believe in continuous learning and staying updated with the latest industry trends.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Name:</p>
                    <p className="text-muted-foreground">Mushangi P</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-muted-foreground">mushangip0@gmail.com</p>
                  </div>
                  <div>
                    <p className="font-semibold">Location:</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                  <div>
                    <p className="font-semibold">Availability:</p>
                    <p className="text-muted-foreground">Freelance / Full-time</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold">My Experience</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-start p-4 rounded-lg bg-background">
                    <div>
                      <h4 className="font-bold">Senior Web Developer</h4>
                      <p className="text-sm text-primary">Tech Solutions Inc.</p>
                    </div>
                    <Badge variant="secondary">2020 - Present</Badge>
                  </div>
                  <div className="flex justify-between items-start p-4 rounded-lg bg-background">
                    <div>
                      <h4 className="font-bold">UI/UX Designer</h4>
                      <p className="text-sm text-primary">Creative Studio</p>
                    </div>
                    <Badge variant="secondary">2018 - 2020</Badge>
                  </div>
                  <div className="flex justify-between items-start p-4 rounded-lg bg-background">
                    <div>
                      <h4 className="font-bold">Frontend Developer</h4>
                      <p className="text-sm text-primary">Web Agency</p>
                    </div>
                    <Badge variant="secondary">2016 - 2018</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                The tools and technologies I use to bring ideas to life
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="p-6 rounded-lg bg-card space-y-4">
                <h3 className="text-xl font-bold text-primary">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>SASS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>React JS</Badge>
                  <Badge>Angular</Badge>
                  <Badge>Redux</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>GSAP</Badge>
                  <Badge>Material UI</Badge>
                  <Badge>Bootstrap</Badge>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card space-y-4">
                <h3 className="text-xl font-bold text-primary">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Spring Boot</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>Express.js</Badge>
                  <Badge>MySQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Firebase</Badge>
                  <Badge>PostgreSQL</Badge>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card space-y-4">
                <h3 className="text-xl font-bold text-primary">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>C</Badge>
                  <Badge>C++</Badge>
                  <Badge>Java</Badge>
                  <Badge>Python</Badge>
                  <Badge>C#</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card space-y-4">
                <h3 className="text-xl font-bold text-primary">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                  <Badge>VS Code</Badge>
                  <Badge>Postman</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>Netlify</Badge>
                  <Badge>Figma</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Experience</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                A timeline of my professional journey and accomplishments.
              </p>
            </div>
            <div className="mt-12 relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="lg:col-start-2">
                      <div className="p-6 rounded-lg bg-card">
                        <h3 className="text-2xl font-bold">Fullstack Developer</h3>
                        <p className="text-primary font-semibold">Webverse Digital</p>
                        <p className="text-sm text-muted-foreground mb-4">April 2024 - Present</p>
                        <p className="text-muted-foreground">
                          Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge>HTML</Badge>
                          <Badge>CSS</Badge>
                          <Badge>JavaScript</Badge>
                          <Badge>React JS</Badge>
                          <Badge>TypeScript</Badge>
                          <Badge>Node.js</Badge>
                          <Badge>Tailwind CSS</Badge>
                          <Badge>MongoDB</Badge>
                          <Badge>Redux</Badge>
                          <Badge>Next.js</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Star className="w-5 h-5" />
                  </div>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="lg:text-right">
                       <div className="p-6 rounded-lg bg-card lg:text-right">
                        <h3 className="text-2xl font-bold">Fullstack Engineer</h3>
                        <p className="text-primary font-semibold">Agumentik Group of Companies</p>
                        <p className="text-sm text-muted-foreground mb-4">July 2023 - March 2024</p>
                        <p className="text-muted-foreground">
                          Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using modern technologies.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2 justify-end">
                          <Badge>React JS</Badge>
                          <Badge>Node.js</Badge>
                          <Badge>Express</Badge>
                          <Badge>MongoDB</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-24 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                A collection of my recent work and projects
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="https://picsum.photos/600/400"
                    alt="E-commerce Website"
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover"
                    data-ai-hint="finance app"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">E-commerce Website</h3>
                    <p className="text-muted-foreground">Web Design</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="https://picsum.photos/600/400"
                    alt="Fitness App UI"
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover"
                    data-ai-hint="social media logos"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Fitness App UI</h3>
                    <p className="text-muted-foreground">UI/UX Design</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-0">
                  <Image
                    src="https://picsum.photos/600/400"
                    alt="Analytics Dashboard"
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover"
                    data-ai-hint="analytics chart"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Analytics Dashboard</h3>
                    <p className="text-muted-foreground">Web Development</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">View More Projects</Button>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                What people I've worked with say about me
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/48/48" alt="Sarah Johnson" data-ai-hint="woman portrait" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">Sarah Johnson</p>
                      <p className="text-sm text-primary">CEO, TechStart</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Imam delivered exceptional work on our website redesign. His attention to detail and communication throughout the project was impressive."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/48/48" alt="Michael Chen" data-ai-hint="man portrait" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">Michael Chen</p>
                      <p className="text-sm text-primary">Product Manager, InnovateCo</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Working with Imam was a great experience. He transformed our complex requirements into a beautiful, user-friendly interface."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/48/48" alt="David Wilson" data-ai-hint="man face" />
                      <AvatarFallback>DW</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">David Wilson</p>
                      <p className="text-sm text-primary">Founder, StartupHub</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    "Imam's technical skills and creative design solutions helped us create an engaging platform that our users love. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-24 md:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                Have a project in mind? Let's discuss how we can work together
              </p>
            </div>
            <div className="mt-12 p-8 rounded-lg bg-card grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">mushangip0@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+254 727 607824</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold pt-4">Follow Me</h3>
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium leading-none">Your Name</label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium leading-none">Your Email</label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium leading-none">Subject</label>
                    <Input id="subject" placeholder="Enter the subject" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" size="lg">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTopButton />
    </div>
  );
}
