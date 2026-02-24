import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-24">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            <span>Serving Punjab & Beyond</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your Trusted Travel Partner
          </h2>
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Experience premium car rental services with professional drivers. 
            Comfortable rides for business trips, family outings, and city tours.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 text-base">
              <a href="tel:+919878784024">
                <Phone className="h-5 w-5" />
                Contact: 9878784024
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <a href="#fleet">View Our Fleet</a>
            </Button>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: 'linear-gradient(to right, #8080800a 1px, transparent 1px), linear-gradient(to bottom, #8080800a 1px, transparent 1px)',
          backgroundSize: '14px 24px'
        }}
      ></div>
    </section>
  );
}
