
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import Link from 'next/link';

interface NavLink {
    href: string;
    label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleScrollTo: (id: string) => void;
  setActiveLink: (link: string) => void;
}

export function MobileNav({ navLinks, isOpen, setIsOpen, handleScrollTo, setActiveLink }: MobileNavProps) {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-primary hover:bg-transparent"
        >
          <Menu className="h-8 w-8" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-2/3 bg-background/80 backdrop-blur-sm p-6 h-auto bottom-auto">
        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
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
                  setActiveLink(href.substring(1));
                }
              }}
              className="text-2xl font-medium transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
          <Button size="lg" className="w-full mt-6">
            Hire Me
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
