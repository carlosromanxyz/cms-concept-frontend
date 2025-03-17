import { IDynamicZoneBlock } from "@/interfaces/strapi/landing";
import Testimonials from "../molecules/testimonials";

interface IDynamicZone {
  components: IDynamicZoneBlock[];
}

export default function DynamicZone({ components }: IDynamicZone) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {components.map((component: IDynamicZoneBlock, index: number) => {
        switch (component.__component) {
          case "blocks.testimonial":
            return <Testimonials key={index} testimonials={component.items} />
          default:
            return null;
        }
      })}
    </div>
  )
}
