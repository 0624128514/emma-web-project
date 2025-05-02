import { Button } from "components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      role="region"
      aria-label="Hero section with product introduction and call to action"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black bg-opacity-75" /> {/* stronger dark overlay */}
        <Image
          src="/images/hello-background.png"
          alt="Close-up of wooden texture background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-4 pt-16 md:pt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-black bg-opacity-40 p-6 rounded-lg shadow-lg">
          <div className="space-y-6 max-w-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg animate-fade-in">
              Handcrafted Wooden Bedframe
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-semibold drop-shadow-md">
              Premium quality wooden bedframe (5' x 6') handcrafted in Mbeya, Tanzania. Built to last, designed for comfort.
            </p>
            <p className="text-lg text-gray-300 drop-shadow-md">
              Experience the perfect blend of craftsmanship and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-opacity-50 text-white border-white hover:bg-white hover:text-primary"
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
            <div className="bg-muted/60 backdrop-blur-sm rounded-lg p-4 max-w-xs text-white drop-shadow-md">
              <p className="font-medium">
                Only <span className="text-xl font-bold text-primary">TZS 100,000</span>
              </p>
              <p className="text-sm">Free delivery in Mbeya, Ikuti area</p>
            </div>
          </div>
          <div
            className="relative h-[300px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl animate-slide-up"
            aria-label="Image of premium wooden bed frame"
          >
            <Image
              src="/images/bed-main.jpg"
              alt="Premium Wooden Bed Frame with smooth finish and elegant design"
              fill
              className="object-cover transition-transform hover:scale-105 duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
