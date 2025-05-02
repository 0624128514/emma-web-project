import { Button } from "components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
<section
      className="relative min-h-screen flex flex-col md:flex-row items-center py-12 md:py-20 overflow-hidden font-sans"
      role="region"
      aria-label="Hero section with product introduction and call to action"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        <Image
          src="/images/hello-background.png"
          alt="Close-up of wooden texture background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="container mx-auto px-6 md:px-12 pt-12 md:pt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center bg-black bg-opacity-50 p-6 md:p-8 rounded-xl shadow-lg">
          <div className="space-y-8 max-w-full md:max-w-lg px-4 md:px-0">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg animate-fade-in">
              Handcrafted Wooden Bedframe
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 font-semibold drop-shadow-md leading-relaxed">
              Premium quality wooden bedframe (5' x 6') handcrafted in Mbeya, Tanzania. Built to last, designed for comfort.
            </p>
            <p className="text-base sm:text-lg text-gray-300 drop-shadow-md leading-relaxed">
              Experience the perfect blend of craftsmanship and comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                asChild
                size="lg"
                className="group bg-primary text-white shadow-lg hover:shadow-xl transition-shadow duration-300 focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-opacity-60"
              >
                <Link
                  href="#contact"
                  tabIndex={0}
                  aria-label="Order now, navigate to contact section"
                >
                  Order Now
                  <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-white border-white hover:bg-white hover:text-primary shadow-md transition-colors duration-300 focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-opacity-60"
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
            <div className="bg-muted/60 backdrop-blur-sm rounded-lg p-5 max-w-xs text-white drop-shadow-md mt-6">
              <p className="font-medium text-lg">
                Only <span className="text-2xl font-bold text-primary">TZS 100,000</span>
              </p>
              <p className="text-sm">Free delivery in Mbeya, Ikuti area</p>
            </div>
          </div>
          <div
            className="relative h-64 sm:h-80 md:h-[480px] lg:h-[520px] rounded-xl overflow-hidden shadow-2xl animate-slide-up w-full max-w-full"
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
