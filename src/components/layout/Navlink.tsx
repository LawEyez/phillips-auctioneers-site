import React from 'react'
import Link from 'next/link'

type NavlinkProps = {
  url: string
  name: string
}

const Navlink = ({ name, url }: NavlinkProps) => {
  return (
    <Link
      href={url}
      className='text-sm font-medium text-gray-500 hover:text-black transition'
    >
      {name}
    </Link>
  )
}

export default Navlink