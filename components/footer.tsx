import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">WoodenCraft</h3>
            <p className="text-muted-foreground max-w-full sm:max-w-xs text-sm sm:text-base">
              Handcrafted wooden furniture made with passion in Mbeya, Tanzania. Quality that lasts generations.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              <li>
                <Link href="#product" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex space-x-3 sm:space-x-4 mb-3 sm:mb-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link href="https://www.instagram.com/emmanuelmpejiwa_tz" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X">
                <img
                  src="/images/sl_z_072523_61700_05.jpg"
                  alt="X Logo"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                />
              </Link>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Mbeya, Ikuti, Tanzania<br />
              +255 624 128 514<br />
              emmanuelmpejiwa865@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} WoodenCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
