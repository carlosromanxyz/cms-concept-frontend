import { IDynamicZoneBlock } from "@/interfaces/strapi/landing";
import Testimonials from "../molecules/testimonials";
import Carousel from "../molecules/carousel";

interface IDynamicZone {
  components: IDynamicZoneBlock[];
}

export default function DynamicZone({ components }: IDynamicZone) {
  console.log(components);
  return (
    <div className="grid grid-cols-1 gap-4">
      {components.map((component: IDynamicZoneBlock, index: number) => {
        switch (component.__component) {
          case "blocks.testimonial":
            return <Testimonials key={index} testimonials={component.items} />;
          case "blocks.carousel":
            return <Carousel key={index} items={component.item} />;
          default:
            return null;
        }
      })}
    </div>
  )
}
