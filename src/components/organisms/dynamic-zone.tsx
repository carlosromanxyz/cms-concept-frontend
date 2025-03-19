import React from "react";
import { Content } from "@/interfaces/strapi/landing";
import Testimonials from "../molecules/testimonials";
import Carousel from "../molecules/carousel";

interface IDynamicZone {
  components: Content[];
}

export default function DynamicZone({ components }: IDynamicZone) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {/* log in console component mapped */}
      {components.map((component: Content, index: number) => {
        switch (component.__component) {
          case "blocks.testimonial":
            return <Testimonials key={index} testimonials={component.items || []} />;
          case "blocks.carousel":
            return <Carousel key={index} items={component.item || []} />;
          default:
            return null;
        }
      })}
    </div>
  )
}
