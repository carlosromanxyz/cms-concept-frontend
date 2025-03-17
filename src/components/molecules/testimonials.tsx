import { ITestimonialItem } from '@/interfaces/strapi/landing'
import React from 'react'
import Testimonial from '../atoms/testimonial';

interface ITestimonials {
  testimonials: ITestimonialItem[]
}

export default function Testimonials({ testimonials }: ITestimonials) {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {testimonials.map((testimonial: ITestimonialItem) => (
        <Testimonial
          key={testimonial.id}
          name={testimonial.name}
          content={testimonial.content}
          image='https://unsplash.it/150/150'
        />
      ))}
    </div>
  )
}
