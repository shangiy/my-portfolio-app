
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projectsData } from '@/lib/projects-data';

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
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-8">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-center">
              {project.title}
            </h1>
          </div>
          
          <div className="space-y-8">
            
            <div className="prose prose-invert text-muted-foreground md:text-lg max-w-none" dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br />') }} />

            {project.imageUrls && project.imageUrls.length > 0 && (
                <div className="space-y-4">
                    {project.imageUrls.map((url, index) => (
                        <React.Fragment key={index}>
                            <div className="aspect-video relative mb-4">
                                <Image
                                    src={url}
                                    alt={`${project.title} - image ${index + 1}`}
                                    fill
                                    className="object-cover rounded-lg"
                                    data-ai-hint={project.imageHints[index] || ""}
                                />
                            </div>
                            {index === 0 && project.imageUrls.length > 1 && (
                                <div className="prose prose-invert text-muted-foreground md:text-lg max-w-none">
                                    <p>This is a new paragraph between the images. You can customize this text as needed.</p>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            )}

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-8">
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
