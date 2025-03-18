import { ICarouselItem } from "@/interfaces/strapi/blocks/carousel";
import Image from "next/image";

interface ICarouse {
  items: ICarouselItem[];
}


export default function Carousel({ items }: ICarouse) {
  return (
    <div>
      {items.map((item: ICarouselItem, index: number) => (
        <figure key={index} className="relative bg-gray-100 p-4">
          <Image src="https://unsplash.it/400/200" alt="" />
          <div className="absolute top-0"></div>
          <h2>{item.heading}</h2>
          <p>{item.text[0].children[0].text}</p>
        </figure>
      ))}
    </div>
  )
}
