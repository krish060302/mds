import { Zap, Snowflake, WashingMachine, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const services = [
  {
    icon: Zap,
    title: 'Microwave Repair',
    description:
      'Expert repair for all microwave brands. We fix heating issues, door problems, turntable malfunctions, and more.',
    features: ['All major brands', 'Quick diagnostics', 'Affordable rates'],
  },
  {
    icon: Snowflake,
    title: 'Refrigerator & Freezer Repair',
    description:
      'Keep your food fresh with our professional refrigerator and freezer repair services. We handle all cooling issues.',
    features: ['Temperature issues', 'Ice maker repair', 'Seal replacement'],
  },
  {
    icon: WashingMachine,
    title: 'Washing Machine Repair',
    description:
      'From front-loaders to top-loaders, we repair all washing machine types. Get your laundry routine back on track.',
    features: ['Drum repairs', 'Motor issues', 'Drain problems'],
  },
]

const Services = () => {
  return (
    <section id='services' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <span className='text-accent font-semibold text-sm uppercase tracking-wider'>
            What We Do
          </span>
          <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4'>
            Our Repair Services
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Specialize in repairing essential home appliances with quick
            turnaround times and quality guaranteed work.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className='group bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors'>
                <service.icon className='w-7 h-7 text-primary' />
              </div>

              <h3 className='font-display text-xl font-bold text-foreground mb-3'>
                {service.title}
              </h3>

              <p className='text-muted-foreground mb-6'>
                {service.description}
              </p>

              <ul className='space-y-2 mb-6'>
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className='flex items-center gap-2 text-sm text-foreground'
                  >
                    <div className='w-1.5 h-1.5 rounded-full bg-accent' />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant='ghost'
                className='group/btn p-0 h-auto text-primary hover:bg-transparent'
              >
                Learn More
                <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
