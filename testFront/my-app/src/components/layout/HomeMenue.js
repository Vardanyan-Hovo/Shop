import Image from 'next/image'
import MenuItem from './MenuItem/MenueItem.js'
import SectionHeaders from './SectionHeaders.js'

export default function HomeMenue()
{
    return (
        <section className="">
            <div className='absolute left-0 right-0'>
                <div className='absolute left-[7.5%] -top-[150px] -z-10'>
                    <Image src={'/sallad1.png'} width={190} height={330} alt="sallad"/>
                </div>
                <div className='absolute right-[7.5%] -top-32 -z-10'>
                    <Image src={'/sallad2.png'} width={190} height={347}  alt="sallad"/>
                </div>
            </div>
            <div className="text-center ">
                <SectionHeaders 
                     subHeader={'check out'} 
                     mainHeader={'Meny'}
                 />
            </div>
            <div className='flex justify-center mt-24'>
                <div className='grid grid-cols-3 gap-6 w-10/12 py-4'>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                    <MenuItem/>
                </div>
            </div>
        </section>
    )
}