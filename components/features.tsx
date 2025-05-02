"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'components/ui/card';
import { Shield, Truck, Hammer, Award } from 'lucide-react';

const features = [
  {
    title: "Premium Materials",
    description: "Crafted from high-quality hardwood that ensures durability and a luxurious finish",
    icon: <Shield className="h-12 w-12 text-primary" />
  },
  {
    title: "Free Delivery",
    description: "We offer free delivery to customers within Mbeya, Ikuti area for your convenience",
    icon: <Truck className="h-12 w-12 text-primary" />
  },
  {
    title: "Expert Craftsmanship",
    description: "Each bed is handcrafted by skilled artisans with years of woodworking experience",
    icon: <Hammer className="h-12 w-12 text-primary" />
  },
  {
    title: "Quality Guaranteed",
    description: "We stand behind our products with a satisfaction guarantee on all purchases",
    icon: <Award className="h-12 w-12 text-primary" />
  }
];

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Why Choose Our Beds</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We pride ourselves on quality, craftsmanship, and customer satisfaction. Here's what makes our beds special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border hover:border-primary/50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
              tabIndex={0}
            >
              <CardHeader className="text-center pt-6 pb-2">
                <div className="mx-auto mb-4">
                  {feature.icon}
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
