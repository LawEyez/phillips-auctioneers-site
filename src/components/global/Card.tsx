import formatDate from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CardProps = {
  title: string
  date: Date
  description?: string
  img?: string
  type: string
  id: string
  location: string
  idx?: number
  slug: string
}

const Card = ({
  type,
  img,
  title,
  date,
  location,
  id,
  idx,
  slug
}: CardProps) => {
  const { day, month, year } = formatDate(date)

  switch(type) {
    case 'sm':
      return (
        <Link href={`/properties/${slug}?id=${id}`}>
          <div className='w-[280px] sm:w-[350px]'>
            <Image
              src={type === 'sm' ? img as string : ''}
              width={1920}
              height={1245}
              alt=''
              className='h-40 rounded-lg'
            />

            <div className="border border-white/10 bg-white/5 rounded-lg p-5 space-y-5 backdrop-blur-2xl
            mt-[-20px]">
              <div className="text-primary">
                <p className="text-2xl font-bold">{day}</p>
                <p className="text-xs uppercase">{month}</p>
              </div>

              <p className="text-sm">
                {title}
              </p>
            </div>
          </div>
        </Link>
      )

    case 'lg':
      return (
        <Link href={`/properties/${slug}?id=${id}`}>
          <div className='border border-black/10 rounded-xl p-5 flex gap-5 bg-white group hover:border-black transition'>
            <div className="flex items-center justify-center border-r border-black/10 pr-5">
              <span className='text-primary/30 text-4xl group-hover:text-black transition'>{(idx ?? 0) + 1}</span>
            </div>

            <div className="space-y-3">
              <p className="text-sm md:text-base text-neutral-800">
                {title}
              </p>

              <div className="flex items-center gap-4">
                <p className="text-sm text-neutral-500 font-medium">{day} {month} {year}</p>
                <div className="px-2 py-1 border border-black/10 rounded-full text-sm bg-neutral-50">{location}</div>
              </div>
            </div>
          </div>
        </Link>
      )

    default:
      return (
        <div className="">This component has an invalid {'"type"'} prop value</div>
      )
  }
}

export default Card