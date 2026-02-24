import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const cars = [
  {
    name: 'Maruti Suzuki Dzire',
    image: '/assets/generated/dzire.dim_800x600.png',
    category: 'Sedan',
    capacity: '4+1'
  },
  {
    name: 'Kia Carens',
    image: '/assets/generated/kia.dim_800x600.png',
    category: 'SUV',
    capacity: '6+1'
  },
  {
    name: 'Toyota Etios',
    image: '/assets/generated/etios.dim_800x600.png',
    category: 'Sedan',
    capacity: '4+1'
  }
];

export default function FleetShowcase() {
  return (
    <section id="fleet" className="py-16 sm:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Premium Fleet</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose from our wide range of well-maintained vehicles for your journey
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <Card key={car.name} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold">{car.name}</h3>
                  <Badge variant="secondary">{car.capacity}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{car.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
