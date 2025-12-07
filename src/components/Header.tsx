import { Phone } from 'lucide-react'
import { Button } from './ui/button'
import mdsLogo from '@/assets/header_logo.png'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img
            src={mdsLogo}
            alt='MDS Enterprise Logo'
            className='h-10 w-auto'
          />
          <span className='font-display font-bold text-xl text-foreground'>
            Enterprises
          </span>
        </div>

        <nav className='hidden md:flex items-center gap-8'>
          <a
            href='#services'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            Services
          </a>
          <a
            href='#about'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            About
          </a>
          <a
            href='#contact'
            className='text-muted-foreground hover:text-foreground transition-colors'
          >
            Contact
          </a>
        </nav>

        <a href='tel:9850507173'>
          <Button variant='accent' size='sm' className='gap-2'>
            <Phone className='w-4 h-4' />
            <span className='hidden sm:inline'>Call Now</span>
          </Button>
        </a>
      </div>
    </header>
  )
}

export default Header
