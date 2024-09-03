import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Brand = () => {
  return (
    <Link href='/'>
      <Image
        src='https://properties.phillipsauctioneers.co.ke/wp-content/uploads/2022/06/logo-pia.png'
        width={1000}
        height={200}
        alt='Phillips Auctioneers'
        className='h-10 w-auto object-contain'
      />
    </Link>
  )
}

export default Brand