import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Kedar Kalate.',
    location: 'Bavdhan',
    rating: 5,
    text: 'My refrigerator stopped cooling and MDS had it fixed the same day. The technician was professional and explained everything clearly. Highly recommend!',
    appliance: 'Refrigerator Repair',
  },
  {
    name: 'Jayashri Pol.',
    location: 'Warje',
    rating: 5,
    text: "Fast, affordable, and honest service. They fixed our washing machine when another company said it couldn't be repaired. Saved us hundreds on a new unit.",
    appliance: 'Washing Machine Repair',
  },
  {
    name: 'Vedant Pawar.',
    location: 'Warje',
    rating: 5,
    text: 'Called about a microwave issue and they were at my door within 2 hours. Fair pricing and great communication throughout. Will definitely use again.',
    appliance: 'Microwave Repair',
  },
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-accent text-accent' : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  )
}

const Testimonials = () => {
  return (
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <span className='text-accent font-semibold text-sm uppercase tracking-wider'>
            Testimonials
          </span>
          <h2 className='font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4'>
            What Our Customers Say
          </h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our repair services.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className='bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative'
            >
              {/* Quote mark */}
              <div className='absolute top-6 right-6 text-6xl font-serif text-primary/10 leading-none'>
                "
              </div>

              <StarRating rating={testimonial.rating} />

              <p className='text-foreground mt-4 mb-6 relative z-10'>
                "{testimonial.text}"
              </p>

              <div className='border-t border-border pt-4'>
                <p className='font-semibold text-foreground'>
                  {testimonial.name}
                </p>
                <p className='text-sm text-muted-foreground'>
                  {testimonial.location} • {testimonial.appliance}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className='mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16'>
          <div className='text-center'>
            <div className='font-display text-3xl font-bold text-primary'>
              4.9
            </div>
            <div className='flex justify-center mt-1 mb-1'>
              <StarRating rating={5} />
            </div>
            <p className='text-sm text-muted-foreground'>Average Rating</p>
          </div>
          <div className='w-px h-12 bg-border hidden md:block' />
          <div className='text-center'>
            <div className='font-display text-3xl font-bold text-primary'>
              30+
            </div>
            <p className='text-sm text-muted-foreground mt-2'>5-Star Reviews</p>
          </div>
          <div className='w-px h-12 bg-border hidden md:block' />
          <div className='text-center'>
            <div className='font-display text-3xl font-bold text-primary'>
              98%
            </div>
            <p className='text-sm text-muted-foreground mt-2'>
              Customer Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
