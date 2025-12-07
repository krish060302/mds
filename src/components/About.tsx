import { CheckCircle2 } from 'lucide-react'

const features = [
  'Licensed and insured technician',
  'Transparent pricing with no hidden fees',
  'Same-day and emergency services available',
  '90-day warranty on all repairs',
  'Genuine replacement parts only',
  'Serving residential and commercial clients',
]

const About = () => {
  return (
    <section id='about' className='py-20 bg-secondary/50'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <span className='text-accent font-semibold text-sm uppercase tracking-wider'>
              About Us
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6'>
              Your Trusted Partner for Appliance Repairs
            </h2>
            <p className='text-muted-foreground mb-6'>
              At MDS Enterprise, we understand how important your home
              appliances are to your daily routine. That's why we're committed
              to providing fast, reliable, and affordable repair services.
            </p>
            <p className='text-muted-foreground mb-8'>
              With years of experience and expert technician, I've helped
              thousands of homeowners get their appliances back in working
              order. Our goal is simple: quality repairs at fair prices.
            </p>

            <div className='grid sm:grid-cols-2 gap-4'>
              {features.map((feature) => (
                <div key={feature} className='flex items-start gap-3'>
                  <CheckCircle2 className='w-5 h-5 text-accent flex-shrink-0 mt-0.5' />
                  <span className='text-foreground text-sm'>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center'>
              <div className='text-center'>
                <div className='font-display text-6xl md:text-7xl font-bold text-primary mb-2'>
                  10+
                </div>
                <p className='text-muted-foreground font-medium'>
                  Years of Experience
                </p>
              </div>
            </div>
            <div className='absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-card'>
              <div className='font-display text-3xl font-bold text-accent mb-1'>
                50+
              </div>
              <p className='text-muted-foreground text-sm'>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
