import { ICarouselItem } from "@/interfaces/strapi/blocks/carousel";
import Image from "next/image";

interface ICarouse {
  items: ICarouselItem[];
}


export default function Carousel({ items }: ICarouse) {
  return (
    <div>
      {items.map((item: ICarouselItem, index: number) => (
        <figure key={index} className="relative bg-gray-700 rounded-xl overflow-hidden">
          <Image
            src="https://unsplash.it/900/300"
            alt=""
            width={900}
            height={900}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-1/2 left-1/10 backdrop-blur-lg bg-black/40 rounded-lg max-w-1/2 p-4">
            <h2>{item.heading}</h2>
            <p>{item.text[0].children[0].text}</p>
          </div>
        </figure>
      ))}
    </div>
  )
}
