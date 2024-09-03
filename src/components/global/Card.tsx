import Image from 'next/image'
import React from 'react'

type CardProps = {
  name?: string
  date?: Date
  description?: string
  img: string
  type: string
}

const Card = ({
  type,
  img
}: CardProps) => {
  switch(type) {
    case 'sm':
      return (
        <div className='w-[280px] sm:w-[400px]'>
          <Image
            src={img}
            width={1920}
            height={1245}
            alt=''
            className='h-40 rounded-lg'
          />

          <div className="border border-white/10 bg-white/5 rounded-lg p-5 space-y-5 backdrop-blur-2xl
          mt-[-20px]">
            <div className="text-primary">
              <p className="text-2xl font-bold">05</p>
              <p className="text-xs uppercase">sept</p>
            </div>

            <p className="text-sm">
              Prime commercial property (Five-storey building) for sale by public auction situated along Tom Mboya Street, Nairobi City County
            </p>
          </div>
        </div>
      )

    case 'lg':
      return (
        <div className='border border-black/10 rounded-xl p-5 flex gap-5 bg-white'>
          <div className="flex items-center justify-center border-r border-black/10 pr-5">
            <span className='text-primary/30 text-4xl'>1</span>
          </div>

          <div className="space-y-3">
            <p className="text-neutral-800">
              A Triple Storey Four Bedroom (All en-suite) for Sale by Public Auction Situated Within Ngong Town (Ole Montet Villas, Kajiado County.
            </p>

            <div className="flex items-center gap-4">
              <p className="text-sm text-neutral-500 font-medium">12 Oct. 2024</p>
              <div className="px-2 py-1 border border-black/10 rounded-full text-sm bg-neutral-50">Kajiado</div>
            </div>
          </div>
        </div>
      )

    default:
      return (
        <div className="">This component has an invalid {'"type"'} prop value</div>
      )
  }
}

export default Card