import { ArrowRight, Shield, Clock, Wrench, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import heroImage from '@/assets/hero-image.png'

const Hero = () => {
  return (
    <section className='relative min-h-[90vh] flex items-center bg-primary overflow-hidden'>
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl' />
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-4 pt-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div>
            <div
              className='inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6 opacity-0 animate-fade-up'
              style={{ animationDelay: '0.1s' }}
            >
              <Shield className='w-4 h-4 text-accent' />
              <span className='text-primary-foreground/80 text-sm font-medium'>
                Trusted Appliance Repair Experts
              </span>
            </div>

            <h1
              className='font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up'
              style={{ animationDelay: '0.2s' }}
            >
              Professional Appliance Repair Services
            </h1>

            <p
              className='text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-2xl opacity-0 animate-fade-up'
              style={{ animationDelay: '0.3s' }}
            >
              Fast, reliable repairs for your home appliances. From microwaves
              to washing machines, fix it all with expertise and care.
            </p>

            <div
              className='flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-up'
              style={{ animationDelay: '0.4s' }}
            >
              <a
                href='https://wa.me/919850507173?text=Hello!%20I%20need%20help%20with%20an%20appliance%20repair%20service.%20Kindly%20assist%20me%20with%20the%20details.'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button
                  variant='hero'
                  size='xl'
                  className='bg-green-500 text-white flex items-center gap-2'
                >
                  <MessageCircle className='w-7 h-7 text-white' />
                  Connect on WhatsApp
                  <ArrowRight className='w-5 h-5' />
                </Button>
              </a>
            </div>

            <div
              className='flex flex-wrap gap-6 opacity-0 animate-fade-up'
              style={{ animationDelay: '0.5s' }}
            >
              <div className='flex items-center gap-2'>
                <Clock className='w-5 h-5 text-accent' />
                <span className='text-primary-foreground/80 text-sm'>
                  Same-Day Service
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Shield className='w-5 h-5 text-accent' />
                <span className='text-primary-foreground/80 text-sm'>
                  90-Day Warranty
                </span>
              </div>
              <div className='flex items-center gap-2'>
                <Wrench className='w-5 h-5 text-accent' />
                <span className='text-primary-foreground/80 text-sm'>
                  Expert Technician
                </span>
              </div>
            </div>
          </div>

          {/* Responsive Hero Image — Visible on ALL screens */}
          <div
            className='opacity-0 animate-fade-up flex justify-center lg:justify-end'
            style={{ animationDelay: '0.3s' }}
          >
            <div className='relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-full'>
              <div className='absolute inset-0 bg-accent/20 rounded-2xl blur-2xl transform translate-x-3 translate-y-3' />
              <img
                src={heroImage}
                alt='Professional appliance repair technician'
                className='relative rounded-2xl shadow-2xl w-full h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
