
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Facebook, Linkedin, Twitter, MessageCircle } from 'lucide-react';

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
      </main>
    </div>
  );
}
