import { Phone, Mail, MapPin } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'travel-all-over-world';

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img 
                src="/assets/generated/logo.dim_512x512.png" 
                alt="Travel All Over World" 
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <h3 className="font-bold">Travel All Over World</h3>
                <p className="text-xs text-muted-foreground">Premium Car Rentals</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for comfortable and reliable car rental services across Punjab.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+919878784024" className="hover:text-primary">
                  9878784024
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>Available 24/7</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Serving Punjab & Beyond</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Per Kilometer Rentals</li>
              <li>Daily Car Rentals</li>
              <li>City Tours</li>
              <li>Outstation Trips</li>
              <li>Business Travel</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Travel All Over World. All rights reserved.
          </p>
          <p className="mt-2">
            Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
