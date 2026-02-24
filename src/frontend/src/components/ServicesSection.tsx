import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Users, Shield, Clock, Award } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Professional Drivers',
    description: 'All our drivers are hardworking and exhibit good behavior'
  },
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'Well-maintained vehicles with comprehensive insurance coverage'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Book anytime for your business trips or family outings'
  },
  {
    icon: Award,
    title: 'Best Service',
    description: 'Committed to providing exceptional customer experience'
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience the best car rental service with our dedicated team
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="border-2 transition-all hover:border-primary/50 hover:shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-primary/5 p-8 text-center">
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-3">
            <CheckCircle2 className="h-8 w-8 shrink-0 text-primary" />
            <p className="text-lg font-medium sm:text-xl">
              All drivers are hardworking and good behavior - Your comfort and safety is our priority
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
