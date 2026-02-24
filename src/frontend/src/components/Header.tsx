import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/assets/generated/logo.dim_512x512.png" 
            alt="Travel All Over World" 
            className="h-10 w-10 rounded-lg"
          />
          <div>
            <h1 className="text-lg font-bold tracking-tight">Travel All Over World</h1>
            <p className="text-xs text-muted-foreground">Premium Car Rental Services</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a 
            href="https://www.instagram.com/karan.pbx05/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-accent transition-colors"
            aria-label="Visit our Instagram profile"
          >
            <img 
              src="/assets/generated/instagram-logo.dim_64x64.png" 
              alt="Instagram" 
              className="h-6 w-6"
            />
          </a>
          <Button asChild size="default" className="gap-2">
            <a href="tel:+919878784024">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="font-semibold">9878784024</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
