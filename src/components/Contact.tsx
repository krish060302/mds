import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <section id='contact' className='py-20 bg-primary'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12'>
          <div>
            <span className='text-accent font-semibold text-sm uppercase tracking-wider'>
              Get In Touch
            </span>
            <h2 className='font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-6'>
              Ready to Fix Your Appliance?
            </h2>
            <p className='text-primary-foreground/70 mb-8'>
              Contact us today. Ready to help you get your appliances working
              like new again.
            </p>

            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center'>
                  <Phone className='w-5 h-5 text-accent' />
                </div>
                <div>
                  <p className='text-primary-foreground/60 text-sm'>Call Us</p>
                  <p className='text-primary-foreground font-semibold'>
                    (+91) 98505 07173
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center'>
                  <Mail className='w-5 h-5 text-accent' />
                </div>
                <div>
                  <p className='text-primary-foreground/60 text-sm'>Email Us</p>
                  <p className='text-primary-foreground font-semibold'>
                    info@mdsenterprise.com
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center'>
                  <MapPin className='w-5 h-5 text-accent' />
                </div>
                <div>
                  <p className='text-primary-foreground/60 text-sm'>Location</p>
                  <p className='text-primary-foreground font-semibold leading-relaxed'>
                    Washing machine Repairing MDS enterprises,
                    <br />
                    8, Popular Nagar Rd,
                    <br />
                    Popular-Giridhar Nagar,
                    <br />
                    Warje, Pune-411058
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-card rounded-2xl p-8 shadow-card'>
            <div className='w-full h-[300px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.987201867195!2d73.7939180793457!3d18.48423889999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1be5e2b7ed%3A0x6c2e41a24070e632!2sWashing%20machine%20Repairing%20MDS%20enterprises!5e0!3m2!1sen!2sin!4v1765113454330!5m2!1sen!2sin'
                className='w-full h-full border-0 rounded-xl'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
