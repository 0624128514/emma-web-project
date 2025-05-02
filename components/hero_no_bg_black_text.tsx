import { Button } from "components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center py-12 sm:py-20 overflow-hidden bg-gray-100"
      role="region"
      aria-label="Hero section with product introduction and call to action"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-12 md:pt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
          <div className="space-y-4 sm:space-y-6 max-w-full sm:max-w-lg">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in"
              style={{ color: 'black' }}
            >
              Handcrafted Wooden Bedframe
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl font-semibold"
              style={{ color: 'black' }}
            >
              Premium quality wooden bedframe (5' x 6') handcrafted in Mbeya, Tanzania. Built to last, designed for comfort.
            </p>
            <p
              className="text-base sm:text-lg"
              style={{ color: 'black' }}
            >
              Experience the perfect blend of craftsmanship and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="group focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-opacity-50 bg-primary text-white hover:bg-primary-dark"
              >
                <Link
                  href="#contact"
                  tabIndex={0}
                  aria-label="Order now, navigate to contact section"
                >
                  Order Now
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" color="black" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-opacity-50 text-primary border-primary hover:bg-primary hover:text-white"
              >
                <Link
                  href="#product"
                  tabIndex={0}
                  aria-label="See product details, navigate to product section"
                >
                  See Details
                </Link>
              </Button>
            </div>
            <div className="bg-muted/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 max-w-xs text-gray-900">
              <p className="font-medium">
                Only <span className="text-xl font-bold text-primary">TZS 100,000</span>
              </p>
              <p className="text-sm">Free delivery in Mbeya, Ikuti area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
