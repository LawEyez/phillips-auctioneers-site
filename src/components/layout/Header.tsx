import Image from 'next/image'
import { RiFacebookLine, RiInstagramLine, RiMailLine, RiPhoneLine } from 'react-icons/ri'

import Navlink from '@/components/layout/Navlink'
import Brand from '@/components/global/Brand'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full border-b border-black/5'>
      {/* CONTACT BANNER */}
      <div className="py-3 bg-gradient-to-b from-neutral-800
      to-neutral-900 text-white">
        <div className="container flex items-center justify-end w-full gap-5">
          <div className="flex items-center gap-3">
            <RiMailLine />
            <span className='text-xs sm:text-sm'>info@phillipsauctioneers.co.ke</span>
          </div>

          <div className="flex items-center gap-3">
            <RiPhoneLine />
            <span className='text-xs sm:text-sm'>+254 (0)20 553 701/2/3</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className='w-full bg-white py-2'>
        <div className="container flex items-center justify-between">
          <Brand />

          <div className="hidden sm:flex items-center gap-5">
            <Navlink name='Home' url='/' />
            <Navlink name='Properties on sale' url='/#propertiesOnSale' />
            {/* <Navlink name='Use' url='/' />
            <Navlink name='Contact' url='/' /> */}
            <div className="border border-black/10 rounded-xl py-2 px-3 flex gap-4 w-max">
              <Link
                href='https://www.facebook.com/Phillipsauctioneers/'
                className='text-gray-600 hover:text-black transition'
                target="_blank"
              >
                <RiFacebookLine />
              </Link>
              
              <Link
                href='https://www.instagram.com/phillipsauctioneers/'
                className='text-gray-600 hover:text-black transition'
                target="_blank"
              >
                <RiInstagramLine />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
