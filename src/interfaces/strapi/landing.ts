export interface ITestimonialItem {
  id: number;
  name: string;
  content: string;
}

export interface ITestimonialBlock {
  __component: "blocks.testimonial";
  id: number;
  items: ITestimonialItem[];
}

export type IDynamicZoneBlock = ITestimonialBlock;