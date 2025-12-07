import mdsLogo from '@/assets/footer_logo.png'

const Footer = () => {
  return (
    <footer className='bg-foreground py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-2'>
            <img
              src={mdsLogo}
              alt='MDS Enterprise Logo'
              className='h-8 w-auto'
            />
            <span className='font-display font-bold text-lg text-primary-foreground'>
              Enterprises
            </span>
          </div>

          <nav className='flex items-center gap-6'>
            <a
              href='#services'
              className='text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm'
            >
              Services
            </a>
            <a
              href='#about'
              className='text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm'
            >
              About
            </a>
            <a
              href='#contact'
              className='text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm'
            >
              Contact
            </a>
          </nav>

          <p className='text-primary-foreground/40 text-sm'>
            © {new Date().getFullYear()} MDS Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
