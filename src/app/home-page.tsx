

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollToTopButton } from '@/components/ui/scrollToTopButton';
import { Projects } from '@/components/projects';
import { TechCarousel } from '@/components/tech-carousel';
import { MobileNav } from '@/components/ui/mobile-nav';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Alex Johnson',
            role: 'CEO, Tech Innovators',
            avatar: 'https://picsum.photos/seed/avatar1/100/100',
            testimonial: 'Working with this developer was a game-changer for our project. Their expertise in modern web technologies and commitment to quality is unparalleled. They delivered a product that exceeded our expectations.'
        },
        {
            name: 'Samantha Lee',
            role: 'Marketing Director, Creative Solutions',
            avatar: 'https://picsum.photos/seed/avatar2/100/100',
            testimonial: 'The new website is not only beautiful but also incredibly fast and user-friendly. We\'ve seen a significant increase in user engagement since the launch. Highly recommended for any web development needs.'
        },
        {
            name: 'David Chen',
            role: 'Startup Founder',
            avatar: 'https://picsum.photos/seed/avatar3/100/100',
            testimonial: 'As a startup, we needed a developer who could be flexible and deliver high-quality work on a tight schedule. They were professional, communicative, and delivered a fantastic product. I would definitely work with them again.'
        }
    ];

    return (
        <section id="testimonials" className="w-full py-24 md:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What My Clients Say</h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        Hear from some of the amazing people I've worked with.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-background/50">
                            <CardContent className="pt-6">
                                <p className="text-muted-foreground italic mb-4">"{testimonial.testimonial}"</p>
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};


const ContactForm = () => {
    return (
        <section id="contact" className="w-full py-24 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>
                </div>
                <div className="mt-12 max-w-xl mx-auto">
                     <div className="grid gap-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <Input placeholder="Your Name" />
                            <Input type="email" placeholder="Your Email" />
                        </div>
                        <Input placeholder="Subject" />
                        <Textarea placeholder="Your Message" rows={6} />
                         <a href="mailto:mushangip0@gmail.com">
                            <Button size="lg" className="w-full">Send Message</Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};


const Footer = () => {
    return (
      <footer className="bg-card text-card-foreground">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-headline">About Me</h3>
              <p className="text-muted-foreground">
                I design and build stunning, user-friendly websites and applications using modern technologies.
              </p>
              <div className="flex items-center gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-6 w-6" /></Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-6 w-6" /></Link>
                  <Link href="https://www.x.com/@patrickshangst1" className="text-muted-foreground hover:text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zM17.633 19.602h1.867L7.126 4.126H5.162l12.471 15.476z"/>
                    </svg>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-headline">Useful Links</h3>
              <ul className="space-y-2">
                <li><Link href="#home" className="text-muted-foreground hover:text-primary">Home</Link></li>
                <li><Link href="#about" className="text-muted-foreground hover:text-primary">About</Link></li>
                <li><Link href="/portfolio" className="text-muted-foreground hover:text-primary">Portfolio</Link></li>
                <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-headline">Support & Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 text-center text-muted-foreground text-sm">
            <p>&copy; {new Date().getFullYear()} Mushangi Patrick. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

const HeroSection = ({ scrollToProjects }: { scrollToProjects: () => void }) => {
    const roles = ['Web Developer', 'Website Designer', 'System Developer'];
    const [animationState, setAnimationState] = useState('carousel');
    const [displayedRole, setDisplayedRole] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        let timer;
        if (animationState === 'carousel') {
            timer = setTimeout(() => {
                setAnimationState('typing');
                setRoleIndex(0);
                setIsDeleting(false);
                setDisplayedRole('');
            }, 5000); // Duration of carousel animation
        } else if (animationState === 'typing') {
            const currentRole = roles[roleIndex];
            const typeSpeed = 150;
            const deleteSpeed = 100;
            const delayBeforeDelete = 2000;

            if (isDeleting) {
                // Handle deleting
                if (displayedRole.length > 0) {
                    timer = setTimeout(() => {
                        setDisplayedRole(currentRole.substring(0, displayedRole.length - 1));
                    }, deleteSpeed);
                } else {
                    setIsDeleting(false);
                    const nextRoleIndex = roleIndex + 1;
                    if (nextRoleIndex === roles.length) {
                        setAnimationState('carousel'); // Go back to carousel
                    } else {
                        setRoleIndex(nextRoleIndex); // Go to next role
                    }
                }
            } else {
                // Handle typing
                if (displayedRole.length < currentRole.length) {
                    timer = setTimeout(() => {
                        setDisplayedRole(currentRole.substring(0, displayedRole.length + 1));
                    }, typeSpeed);
                } else {
                    // Finished typing, wait then start deleting
                    timer = setTimeout(() => {
                        setIsDeleting(true);
                    }, delayBeforeDelete);
                }
            }
        }

        return () => clearTimeout(timer);
    }, [animationState, displayedRole, roleIndex, isDeleting]);


    return (
        <section id="home" className="w-full py-24 md:py-32 lg:py-40">
            <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
                <div className="flex flex-col justify-center space-y-6">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                        Mushangi's Portfolio<br />
                        <div className="h-[1.5em] overflow-hidden">
                            {animationState === 'carousel' ? (
                                <div className="text-primary animate-[carousel-scroll_5s_ease-in-out_infinite] [text-wrap:nowrap] [color:transparent] [-webkit-text-stroke:2px_hsl(var(--primary))]">
                                    {roles.map(role => <div key={role} className="h-[1.5em]">{role}</div>)}
                                    <div className="h-[1.5em]">{roles[0]}</div>
                                </div>
                            ) : (
                                <span className="text-primary font-headline [color:transparent] [-webkit-text-stroke:2px_hsl(var(--primary))]">
                                    {displayedRole}
                                    <span className="border-r-2 typewriter-cursor"></span>
                                </span>
                            )}
                        </div>
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        I design and build stunning, user-friendly websites and applications using modern technologies. Together, we can transform your ideas into reality.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button asChild size="lg" onClick={scrollToProjects}>
                            <Link href="#projects">View My Work</Link>
                        </Button>
                        <Button variant="outline" size="lg">
                            Download CV
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                    <Image
                        src="/hero-image.png"
                        alt="Hero Image"
                        width={450}
                        height={450}
                        className="rounded-full object-cover aspect-square"
                        data-ai-hint="portrait professional"
                    />
                </div>
            </div>
        </section>
    );
};

export default function HomePage() {
  const [activeLink, setActiveLink] = useState('home');
  const sections = useRef<{[key: string]: HTMLElement | null}>({});

  const handleScrollTo = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      let currentSectionId = '';

      sectionElements.forEach(section => {
        const htmlSection = section as HTMLElement;
        if (scrollPosition >= htmlSection.offsetTop && scrollPosition < htmlSection.offsetTop + htmlSection.offsetHeight) {
          currentSectionId = htmlSection.id;
        }
      });
      
      if (currentSectionId) {
        setActiveLink(currentSectionId);
      } else {
        // If no section is in view (e.g. at the very top or bottom), determine based on position
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
             setActiveLink('contact'); // Last section
        } else if (window.scrollY < 200) {
             setActiveLink('home');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#projects', label: 'PORTFOLIO' },
    { href: '#testimonials', label: 'TESTIMONIALS' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95">
        <div className="container flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 logo-container"
            aria-label="Home"
          >
            <span className="font-headline text-2xl font-bold logo-wipe">Coder</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => {
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        setActiveLink(href.substring(1));
                        handleScrollTo(href);
                    } else {
                        // For external links or other pages
                        setActiveLink(href.substring(1));
                    }
                }}
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
          <div className="hidden md:flex items-center justify-end">
            <Button>Hire Me</Button>
          </div>
          <div className="md:hidden">
            <MobileNav navLinks={navLinks} handleScrollTo={handleScrollTo} setActiveLink={setActiveLink} />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection scrollToProjects={() => handleScrollTo('#projects')} />
        <section id="about" className="w-full pt-24 md:pt-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
                Get to know more about my background and experience
              </p>
            </div>
            <div className="mt-12 p-8 rounded-lg bg-card grid gap-12 lg:gap-16">
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
                    <p className="text-muted-foreground">Mushangi Patrick</p>
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
                    <p className="text-muted-foreground">available for any freelance job and full time dev</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <TechCarousel />
        <Projects />
        <Testimonials />
        <ContactForm />
        <Footer />
      </main>
      <ScrollToTopButton />
    </div>
  );
}
