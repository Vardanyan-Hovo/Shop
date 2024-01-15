
import Hero from '../components/layout/Hero.js'
import HomeMenue from '../components/layout/HomeMenue.js'
import SectionHeaders from '../components/layout/SectionHeaders.js'

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenue />
      <section className='text-center mt-8'>
        <SectionHeaders 
            subHeader={'Our story'}
            mainHeader={'About us'}  
          />
        <p className='max-w-2xl mx-auto'>
          Imagine thin crust so crisp it shatters, topped with creamy mozzarella and juicy tomatoes bursting with flavor.
          Dive into a world of fiery pepperoni, melty cheese, and fragrant herbs.
        </p>
      </section>

    </>
  )
}
