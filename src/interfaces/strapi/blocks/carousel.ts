export interface ICarouselItem {
  id: number;
  heading: string;
  text: {
    type: string;
    children: {
      type: string;
      text: string;
    }[];
  }[];
}

export interface ICarouselBlock {
  __component: "blocks.carousel";
  id: number;
  item: ICarouselItem[];
}
