

'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import Link from 'next/link';

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
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <CollapsibleTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden text-primary hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-6 w-6" strokeWidth={2.5} />
        ) : (
          <Menu className="h-6 w-6" />
        )}
        <span className="sr-only">Toggle menu</span>
      </Button>
    </CollapsibleTrigger>
  );
}
