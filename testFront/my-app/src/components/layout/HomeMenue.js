import Image from 'next/image'

export default function HomeMenue()
{
    return (
        <section className="">
            <div className=''>
                <div className=''>
                    <Image src={'/sallad1.png'} alt="sallad" layout={'fill'} objectFit={'contain'}/>
                </div>
                {/* <div className='absolute w-64 h-64'>
                    <Image src={'/sallad2.png'} width={180}  height={180 } alt='sallad'/>
                </div> */}
            </div>
            <div className="text-center outline-dashed">
                <h3 className="font-semibold text-gray-500 uppercase leading-4">
                    Check out
                </h3>
                <h2 className="text-red-500 font-bold italic text-4xl">
                    Menu
                </h2>
            </div>
        </section>
    )
}