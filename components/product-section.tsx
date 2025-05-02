"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "components/ui/card";
import { Button } from "components/ui/button";
import { Badge } from "components/ui/badge";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const productImages = [
  { src: "/images/bed-angle.jpg", alt: "Front view of wooden bed" },
  { src: "/images/bed-main.jpg", alt: "Angle view of wooden bed" },
];

export function ProductSection() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="product" className="py-16 sm:py-20 bg-accent/30" role="region" aria-label="Product section with images and details">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col items-center mb-10 sm:mb-12 text-center">
          <Badge variant="outline" className="mb-2">Premium Quality</Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">Elegant Wooden Bed Frame</h2>
          <p className="text-muted-foreground max-w-full sm:max-w-2xl px-2 sm:px-0">
            A masterpiece of craftsmanship that combines traditional woodworking techniques with modern design elements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6">
            <div className="relative aspect-square rounded-xl overflow-hidden border shadow-lg" aria-label="Product image display">
              <Image
                src={productImages[activeImage].src}
                alt={productImages[activeImage].alt}
                fill
                className="object-cover transition-transform duration-500 ease-in-out"
                loading="lazy"
              />
            </div>
            <div className="flex gap-3 sm:gap-4 justify-center px-2 sm:px-0">
              {productImages.map((image, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                    activeImage === i ? "border-primary ring-2 ring-primary/20" : "border-border"
                  }`}
                  aria-label={`View ${image.alt}`}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveImage(i);
                    }
                  }}
                >
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${i + 1} of product image`}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 px-2 sm:px-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Handcrafted Wooden Bed</h3>
              <p className="text-muted-foreground mb-3 sm:mb-4">
                This beautifully crafted wooden bed adds elegance and warmth to any bedroom. Each piece is thoughtfully made with attention to detail.
              </p>
              <div className="flex items-baseline gap-2 mb-5 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-bold">TZS 100,000</span>
                <span className="text-muted-foreground line-through">TZS 120,000</span>
                <Badge variant="destructive" className="ml-2">Save 20%</Badge>
              </div>
            </div>

            <Card>
              <CardContent className="p-5 sm:p-6">
                <h4 className="font-semibold mb-3">Specifications:</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dimensions: 5 feet x 6 feet (King Size)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Material: Solid hardwood with polished finish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Style: Contemporary with traditional elements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Location: Available in Mbeya, Ikuti, Tanzania</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-3 sm:space-y-4">
              <Button asChild size="lg" className="w-full">
                <Link href="#contact" aria-label="Contact us to order">
                  Contact Us to Order
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs sm:text-sm text-center text-muted-foreground flex items-center justify-center gap-2 px-2 sm:px-0">
                <img
                  src="/images/7466881.jpg"
                  alt="Delivery"
                  className="h-5 w-5 sm:h-6 sm:w-6 object-contain"
                />
                Free delivery within Mbeya. Assembly available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
