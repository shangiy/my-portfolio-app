
import Image from 'next/image';
import Link from 'next/link';

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container flex h-14 items-center">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2"
            aria-label="Home"
          >
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="#features"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section
          id="hero"
          className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center"
        >
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Hero background"
            fill
            className="object-cover absolute inset-0 -z-10 brightness-50"
            data-ai-hint="office background"
          />
          <div className="container px-4 md:px-6 text-white">
            <div className="max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Build Your Next Big Idea
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Create amazing applications with our powerful tools and
                services.
              </p>
              <div className="flex justify-center gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Features
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground md:text-xl">
                Everything you need to build and scale your application.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Feature One</CardTitle>
                  <CardDescription>
                    Description of the first amazing feature.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>More details about the feature.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Feature Two</CardTitle>
                  <CardDescription>
                    Description of the second amazing feature.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>More details about the feature.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Feature Three</CardTitle>
                  <CardDescription>
                    Description of the third amazing feature.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>More details about the feature.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cta" className="py-12 md:py-24 bg-secondary">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Ready to Dive In?
            </h2>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
              Start your free trial today. No credit card required.
            </p>
            <Button size="lg">Start Building</Button>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} MyApp. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

