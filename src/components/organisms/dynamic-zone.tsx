import React from "react";
import { Content } from "@/interfaces/strapi/landing";
import Testimonials from "../molecules/testimonials";
import Carousel from "../molecules/carousel";
import FinancialIndicators from "../molecules/financial-indicators";

interface IDynamicZone {
  components: Content[];
}

export default function DynamicZone({ components }: IDynamicZone) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {components.map((component: Content, index: number) => {
        switch (component.__component) {
          case "blocks.testimonial":
            return <Testimonials key={index} testimonials={component.items || []} />;
          case "blocks.carousel":
            return <Carousel key={index} items={component.item || []} />;
          case "blocks.financial-indicators":
            return <FinancialIndicators key={index} displayUF={component.displayUF || false} displayIPSA={component.displayIPSA || false} displayCurrentDolar={component.displayCurrentDolar || false} />;
          default:
            return null;
        }
      })}
    </div>
  )
}
