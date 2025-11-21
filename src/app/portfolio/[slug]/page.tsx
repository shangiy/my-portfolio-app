
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '@/lib/projects-data';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2" aria-label="Home">
            <span className="font-headline text-2xl font-bold logo-wipe">Coder</span>
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
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
                          className="object-cover rounded-lg"
                          data-ai-hint={project.imageHints[index] || ""}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
              </Carousel>
            )}
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                {project.title}
              </h1>
              <div className="prose prose-invert text-muted-foreground md:text-lg max-w-none" dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br />') }} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {project.liveUrl !== '#' && (
                <Button asChild size="lg">
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {project.githubUrl !== '#' && (
                <Button asChild variant="outline" size="lg">
                   <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
