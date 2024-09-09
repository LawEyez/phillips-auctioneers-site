import formatDate from '@/utils/formatDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { RiArrowRightUpLine, RiArrowUpSLine } from 'react-icons/ri'

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
  guidePrice: number
}

const Card = ({
  type,
  img,
  title,
  date,
  location,
  id,
  idx,
  slug,
  guidePrice
}: CardProps) => {
  const { day, month, year } = formatDate(new Date(date))

  switch(type) {
    case 'sm':
      return (
        <Link href={`/properties/${id}`}>
          <div className="w-[300px] sm:w-[400px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-5
          space-y-5 backdrop-blur-2xl group hover:border-white/40 transition">
            <div className="flex justify-between">
              <div className="text-primary p-3 border border-white/10 group-hover:border-white/40 rounded-xl w-max transition">
                <p className="text-2xl font-bold">{day}</p>
                <p className="text-xs uppercase">{month}</p>
              </div>

              <Button className='border border-primary/10 rounded-full text-sm font-medium w-max
              h-max flex items-center gap-2 py-2 px-3 group-hover:bg-black group-hover:text-white transition'>
                View property
                <span className="h-5 w-5 bg-black text-white rounded-full flex items-center justify-center text-lg">
                  <RiArrowRightUpLine />
                </span>
              </Button>
            </div>

            <p className="text-sm text-neutral-200 leading-relaxed">
              {title}
            </p>

            <div className="border-t border-white/10 pt-5 flex justify-between">
              <div className="">
                <p className="text-sm text-neutral-300">Guide Price (KES)</p>
                <p className="">{guidePrice.toLocaleString()}</p>
              </div>

              
            </div>
          </div>
        </Link>
      )

    case 'lg':
      return (
        <Link href={`/properties/${id}`}>
          <div className='border border-black/10 rounded-xl p-5 flex flex-col sm:flex-row gap-5 bg-white group hover:border-black transition'>
            <div className="flex items-center justify-center border-r border-black/10 pr-5 h-max w-max">
              <span className='text-primary/30 text-4xl group-hover:text-black transition'>{(idx ?? 0) + 1}</span>
            </div>

            <div className="space-y-4 flex-1">
              <p className="text-sm md:text-base text-neutral-800 w-full">
                {title}
              </p>

              <div className="flex gap-5">
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-500">Guide Price (KES)</p>
                  <p className="text-sm md:text-base font-medium">{guidePrice.toLocaleString()}</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-sm text-neutral-500">Auction Date</p>
                  <p className="text-sm md:text-base font-medium">{day} {month} {year}</p>
                </div>

                <div className="px-2 py-1 border border-black/10 rounded-full text-sm bg-neutral-50 h-max">{location}</div>
              </div>
            </div>

            <Button className='border border-black/10 rounded-full text-sm font-medium w-max
            h-max flex items-center gap-2 py-2 px-3 group-hover:bg-black group-hover:text-white transition'>
              View property
              <span className="h-5 w-5 bg-black text-white rounded-full flex items-center justify-center text-lg">
                <RiArrowRightUpLine />
              </span>
            </Button>
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