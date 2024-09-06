import Brand from '@/components/global/Brand'
import Link from 'next/link'
import { PiGithubLogoDuotone } from 'react-icons/pi'
import { RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiTwitterXLine } from 'react-icons/ri'

import { footerData } from './footerData'

type FooterLinkProps = {
  name: string
  url: string
  external?: boolean
}

type FooterLinkGroupProps = {
  title: string
  links: FooterLinkProps[]
}

const FooterLink = ({ name, url, external }: FooterLinkProps) => {
  return (
    <Link
      href={url}
      className='text-[12px] text-neutral-500 hover:text-black hover:underline transition w-max font-primary'
      target={external ? "_blank" : ""}
    >
      {name}
    </Link>
  )
}

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => {
  return (
    <div className="space-y-2.5 font-secondary">
      <h5 className="text-sm font-medium text-black">{title}</h5>

      <div className="flex flex-col space-y-1">
        {links.map((link, i) => (
          <FooterLink key={i} name={link.name} url={link.url} external={link.external} />
        ))}              
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='border-t border-white/10 w-full relative z-10 bg-neutral-100 py-16'>
      <div className="container space-y-16">
        {/* ********* TOP ********* */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3">
            <Brand />
            {/* <p className="text-content !text-sm">Building products that matter</p> */}
            {/* <Modal
              param="showContact"
              opener={
                <button className="btn btn-default w-max">
                  Work with us
                </button>
              }
            >
              <ContactForm />
            </Modal> */}
          </div>

          <div className="flex gap-10 flex-wrap">
            <FooterLinkGroup
              title='Company'
              links={footerData.company}
            />
            
            <FooterLinkGroup
              title='Contact'
              links={footerData.contact}
            />
          </div>
        </div>
        
        {/* ********* BOTTOM ********* */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center justify-between relative pt-5
        border-t border-black/10">
          <p className="text-[12px] font-medium text-neutral-500">
            &copy; {new Date().getFullYear()} Phillips Auctioneers. All rights reserved.
          </p>

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
    </footer>
  )
}

export default Footer