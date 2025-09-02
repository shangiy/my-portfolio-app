
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Facebook, Linkedin, Twitter, MessageCircle, Code, GitMerge, Database, Settings } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2"
            aria-label="Home"
          >
            <span className="font-bold text-xl">Coder</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mx-auto">
            <Link
              href="#home"
              className="transition-colors text-primary hover:text-primary/80"
            >
              HOME
            </Link>
            <Link
              href="#about"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              ABOUT
            </Link>
            <Link
              href="#skills"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              SKILLS
            </Link>
            <Link
              href="#portfolio"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              PORTFOLIO
            </Link>
            <Link
              href="#testimonials"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              TESTIMONIALS
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              CONTACT
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end">
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
                <p className="text-primary font-semibold">I'm Shangi PM</p>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Software Engineer
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  I create beautiful, functional websites and applications with modern technologies. Let's work together to bring your ideas to life.
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
                src="https://picsum.photos/id/64/600/800"
                alt="Sushil KC"
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
                    <p className="text-muted-foreground">Imam Hossain</p>
                  </div>
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-muted-foreground">imam@example.com</p>
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
      </main>
    </div>
  );
}
