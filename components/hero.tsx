import { Button } from "components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center py-12 md:py-20 bg-gray-50"
      role="region"
      aria-label="Hero section with product introduction and call to action"
    >
      <div className="container mx-auto px-4 pt-12 md:pt-24 flex flex-col justify-center min-h-[600px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 max-w-full md:max-w-lg px-4 md:px-0">
            <div className="flex items-center space-x-4">
              <img
                src="/images/tanzania-metallic-flag-textured-flag-grunge-flag.jpg"
                alt="Tanzania Metallic Flag"
                width={48}
                height={32}
                className="rounded-sm shadow-md"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black animate-fade-in">
                Handcrafted Wooden Bedframe
              </h1>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-black font-semibold leading-relaxed mb-4 tracking-wide">
              Premium quality wooden bedframe (5' x 6') handcrafted in Mbeya, Tanzania. Built to last, designed for comfort.
            </p>
            <p className="text-lg sm:text-xl md:text-xl text-black italic leading-relaxed tracking-wide">
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
          </div>
          <div
            className="relative h-64 sm:h-80 md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl animate-slide-up w-full max-w-full"
            aria-label="Image of premium wooden bed frame"
          >
            <img
              src="/images/bed-main.jpg"
              alt="Premium Wooden Bed Frame with smooth finish and elegant design"
              className="object-cover w-full h-full transition-transform hover:scale-105 duration-700"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
