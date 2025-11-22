
'use client';

import Image from 'next/image';
import Link from 'next/link';

import { projectsData } from '@/lib/projects-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const projects = projectsData;

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-xl">
    <CardHeader>
        {project.imageUrls && project.imageUrls.length > 0 && (
            <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                {project.imageUrls.map((url, index) => (
                    <CarouselItem key={index}>
                    <div className="aspect-video relative mb-4">
                        <Image
                        src={url}
                        alt={`${project.title} - image ${index + 1}`}
                        fill
                        className="object-cover rounded-t-lg"
                        data-ai-hint={project.imageHints[index] || ""}
                        />
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
        )}
        <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
        {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col">
        <CardDescription className="flex-grow">{project.description}
            {(project.id === 'project-1' || project.id === 'project-3' || project.id === 'project-4' || project.id === 'project-5' || project.id === 'project-6') && project.liveUrl !== '#' && (
            <p className="mt-2 text-sm break-all">
                <Link href={project.liveUrl} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    {project.liveUrl}
                </Link>
            </p>
            )}
        </CardDescription>
        <div className="flex gap-2 mt-4">
        <Button asChild variant="outline" size="sm">
            <Link href={`/portfolio/${project.slug}`}>
            View More
            </Link>
        </Button>
        {project.liveUrl !== '#' && (
        <Button asChild size="sm">
            <Link href={project.liveUrl} target="_blank">
            <ExternalLink />
            Live Demo
            </Link>
        </Button>
        )}
        </div>
    </CardContent>
  </Card>
);


export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95">
            <div className="container flex h-16 items-center">
            <Link
                href="/"
                className="flex items-center space-x-2 logo-container"
                aria-label="Home"
            >
                <span className="font-headline text-2xl font-bold logo-wipe">Coder</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mx-auto">
                <Link href="/" className="transition-colors hover:text-primary/80 text-foreground/60">HOME</Link>
                <Link href="/#about" className="transition-colors hover:text-primary/80 text-foreground/60">ABOUT</Link>
                <Link href="/#skills" className="transition-colors hover:text-primary/80 text-foreground/60">SKILLS</Link>
                <Link href="/portfolio" className="transition-colors hover:text-primary/80 text-primary">PORTFOLIO</Link>
                <Link href="/#testimonials" className="transition-colors hover:text-primary/80 text-foreground/60">TESTIMONIALS</Link>
                <Link href="/#contact" className="transition-colors hover:text-primary/80 text-foreground/60">CONTACT</Link>
            </nav>
            <div className="flex items-center justify-end">
                <Button>Hire Me</Button>
            </div>
            </div>
      </header>
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container">
            <div className="flex flex-col items-center text-center gap-4 mb-12">
                <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    My Portfolio
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                    A collection of my recent work and projects.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}

    
