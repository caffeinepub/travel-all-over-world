import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Navigation } from 'lucide-react';

const pricingOptions = [
  {
    icon: Navigation,
    title: 'Per Kilometer',
    price: '₹16',
    unit: 'per km',
    description: 'Flexible pricing based on distance traveled',
    badge: 'Popular'
  },
  {
    icon: Calendar,
    title: 'Daily Rental',
    price: '₹1,500',
    unit: 'per day',
    description: 'Full day rental for local use',
    badge: 'Best Value'
  }
];

const cityRoutes = [
  {
    city: 'Chandigarh',
    route: 'Round Trip',
    price: '₹3,800',
    description: 'Up & Down service'
  },
  {
    city: 'Jalandhar',
    route: 'One Way',
    price: '₹1,500',
    description: 'Comfortable journey'
  },
  {
    city: 'Ludhiana',
    route: 'One Way',
    price: '₹2,999',
    description: 'Premium service'
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Transparent Pricing</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Affordable rates with no hidden charges
          </p>
        </div>
        
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {pricingOptions.map((option) => (
            <Card key={option.title} className="relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-lg">
              {option.badge && (
                <div className="absolute right-4 top-4">
                  <Badge className="bg-primary">{option.badge}</Badge>
                </div>
              )}
              <CardHeader>
                <div className="mb-2 inline-flex rounded-lg bg-primary/10 p-3">
                  <option.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{option.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{option.price}</span>
                  <span className="ml-2 text-muted-foreground">{option.unit}</span>
                </div>
                <p className="text-muted-foreground">{option.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="mb-6 text-center text-2xl font-bold">Popular City Routes</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cityRoutes.map((route) => (
              <Card key={route.city} className="transition-all hover:shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h4 className="text-xl font-semibold">{route.city}</h4>
                    </div>
                    <Badge variant="outline">{route.route}</Badge>
                  </div>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-primary">{route.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{route.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-lg bg-muted/50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            * Prices may vary based on vehicle type and season. Contact us for custom quotes.
          </p>
        </div>
      </div>
    </section>
  );
}
