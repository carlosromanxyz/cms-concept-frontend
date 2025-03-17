import Image from 'next/image'

interface ITestimonial {
  image: string;
  content: string;
  name: string;
}

export default function Testimonial({ image, content, name }: ITestimonial) {
  return (
    <blockquote className='bg-gray-700 text-white p-4 rounded-lg'>
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        className='rounded-full object-cover object-center mb-4'
      />
      <p className='text-lg'>
        {content
          ? content
          : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      </p>
      <footer className='mt-4'>
        <cite className='block text-sm'>
          {name
            ? name
            : 'John Doe'
          }
        </cite>
      </footer>
    </blockquote>
  )
}
