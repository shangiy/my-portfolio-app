
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
  handleScrollTo: (id: string) => void;
  setActiveLink: (link: string) => void;
}

export function MobileNav({ navLinks, handleScrollTo, setActiveLink }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      setActiveLink(href.substring(1));
      handleScrollTo(href);
    } else {
      setActiveLink(href.substring(1));
    }
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-primary hover:bg-transparent">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs bg-background">
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <Link
                href={href}
                onClick={() => handleLinkClick(href)}
                className="text-2xl font-medium transition-colors hover:text-primary"
              >
                {label}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Button size="lg" className="w-full mt-6">
              Hire Me
            </Button>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
