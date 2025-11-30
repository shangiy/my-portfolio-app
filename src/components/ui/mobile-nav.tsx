

'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger as RadixCollapsibleTrigger } from '@/components/ui/collapsible';

interface MobileNavProps extends React.PropsWithChildren {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const MobileNavContext = React.createContext<{
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
} | null>(null);

const useMobileNav = () => {
  const context = React.useContext(MobileNavContext);
  if (!context) {
    throw new Error('useMobileNav must be used within a MobileNav provider');
  }
  return context;
};

const MobileNavTrigger: React.FC = () => {
  const { isOpen, onOpenChange } = useMobileNav();
  return (
    <RadixCollapsibleTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden text-primary hover:bg-transparent">
        {isOpen ? <X className="h-6 w-6 text-primary" strokeWidth={2.5} /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>
    </RadixCollapsibleTrigger>
  );
};
MobileNavTrigger.displayName = 'MobileNavTrigger';


const MobileNavCollapsibleContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <CollapsibleContent className="w-full bg-background border-b border-border/40 md:hidden">
        {children}
      </CollapsibleContent>
    );
};
MobileNavCollapsibleContent.displayName = 'MobileNavContent';


export function MobileNav({ children, isOpen, onOpenChange }: MobileNavProps) {
  return (
    <MobileNavContext.Provider value={{ isOpen, onOpenChange }}>
      <Collapsible open={isOpen} onOpenChange={onOpenChange} className="w-full">
        {children}
      </Collapsible>
    </MobileNavContext.Provider>
  );
}

MobileNav.Trigger = MobileNavTrigger;
MobileNav.Content = MobileNavCollapsibleContent;
