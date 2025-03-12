import React from 'react'
import Image from 'next/image'
import { Badge } from '../ui/badge';

interface IHero {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  heading?: string;
  title?: string;
}

export default function Hero({ imageSrc, imageAlt, imageWidth, imageHeight, heading, title }: IHero) {
  return (
    <section className="relative">
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        alt={imageAlt || 'Image alt text'}
        className='object-cover w-full h-full'
      />
      <div className=''>
        <Badge>{heading}</Badge>
        <h1 className='text-4xl font-bold'>{title}</h1>
      </div>
    </section>
  )
}
