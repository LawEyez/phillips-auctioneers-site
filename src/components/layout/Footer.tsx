import Brand from '@/components/global/Brand'

const Footer = () => {
  return (
    <footer className='bg-neutral-100 py-10'>
      <div className="container flex flex-col sm:flex-row justify-between gap-10">
        <div className="">
          <Brand />
        </div>
      </div>
    </footer>
  )
}

export default Footer