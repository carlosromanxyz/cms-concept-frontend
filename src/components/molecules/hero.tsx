import React from 'react'
import Image from 'next/image'

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
      <figure className='h-[50em] w-full overflow-hidden'>
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt={imageAlt || 'Image alt text'}
          className='object-cover w-full h-full'
        />
      </figure>
      <div className='absolute top-64 left-1/6 max-w-1/2 flex flex-col items-start gap-4 bg-black/20 p-8 backdrop-blur-md rounded-2xl overflow-hidden'>
        <span className='px-2 py-1 bg-gray-700 text-white rounded-lg text-xs font-bold'>{heading}</span>
        <h1 className='text-4xl font-bold'>{title}</h1>
      </div>
    </section>
  )
}
