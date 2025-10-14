
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function EcommerceProjectPage() {
  return (
    <div className="bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2" aria-label="Home">
            <span className="font-headline text-2xl font-bold text-transparent bg-clip-text text-stroke">Coder</span>
          </Link>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="mb-8">
          <Link href="/#portfolio">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src="https://picsum.photos/seed/project1/1200/800"
              alt="Alpha Plumbing and Electrical ltd Website"
              width={1200}
              height={800}
              className="rounded-lg object-cover"
              data-ai-hint="plumbing hardware"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                E-Commerce Web System
              </h1>
              <p className="text-primary font-semibold text-lg">Alpha Plumbing and Electrical Ltd</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Created a website to showcase hardware products and allow users to buy online and get delivery. Focused on user-friendly design and interactivity.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
                <Badge>PHP</Badge>
                <Badge>Paystack</Badge>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://alpha-plumbing-n-electrical-ltd.onrender.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg">
                  View Live Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
