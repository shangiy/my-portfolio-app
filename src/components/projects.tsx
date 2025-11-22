

"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/lib/projects-data";

const projects = projectsData;

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-xl w-[400px]">
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


export function Projects() {
    const duplicatedProjects = [...projects, ...projects];
    return (
        <section id="projects" className="pb-24 md:pb-32">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My Portfolio
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
            A collection of my recent work and projects
            </p>
        </div>

        <div className="relative overflow-hidden w-full group">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                {duplicatedProjects.map((project, index) => (
                    <div key={`${project.id}-${index}`} className="px-4 flex-shrink-0">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="rounded-full">
                <Link href="/portfolio">View All Projects</Link>
            </Button>
        </div>
        </section>
    );
}
