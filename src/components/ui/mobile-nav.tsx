

'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/components/ui/dialog';

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
  return (
    <DialogTrigger asChild>
      <Button variant="ghost" size="icon" className="md:hidden text-primary hover:bg-transparent">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </DialogTrigger>
  );
};
MobileNavTrigger.displayName = 'MobileNavTrigger';


const MobileNavSheetContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <DialogContent className="w-4/5 h-full p-6 bg-background/80 backdrop-blur-sm fixed top-0 right-0 m-0 border-l border-border/40 data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right">
        <div className="h-full flex flex-col">
            <DialogClose asChild>
                 <Button variant="ghost" size="icon" className="self-end text-primary hover:bg-transparent -mr-2 -mt-2">
                    <X className="h-6 w-6 text-primary" strokeWidth={2.5} />
                    <span className="sr-only">Close menu</span>
                </Button>
            </DialogClose>
            {children}
        </div>
      </DialogContent>
    );
};
MobileNavSheetContent.displayName = 'MobileNavContent';


export function MobileNav({ children, isOpen, onOpenChange }: MobileNavProps) {
  return (
    <MobileNavContext.Provider value={{ isOpen, onOpenChange }}>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        {children}
      </Dialog>
    </MobileNavContext.Provider>
  );
}

MobileNav.Trigger = MobileNavTrigger;
MobileNav.Content = MobileNavSheetContent;
