import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <CardContent className="p-8 sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to Book Your Ride?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Contact us now for more information, custom quotes, or to make a reservation. 
                Our team is ready to assist you 24/7.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="gap-2 text-base">
                  <a href="tel:+919878784024">
                    <Phone className="h-5 w-5" />
                    Call: 9878784024
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2 text-base">
                  <a href="https://wa.me/919878784024" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Available for bookings across Punjab and neighboring states
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
