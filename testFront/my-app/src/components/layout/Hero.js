import Image from 'next/image'
import Right from '../icons/Right'

export default function Hero(){
    return (
        <section className='flex items-center justify-between'>
            <div className='w-2/5'>
                <h1 className='font-semibold text-4xl mt-4'> 
                    Ecreyting<br/>
                    is better<br/>
                    with a&nbsp;
                    <span className='text-red-500'>
                        Pizza
                    </span>
                </h1>
                <p className='mt-4 text-gray-500'>
                    Pizza is the missing pice tat makes every
                    day complete, a simple yet delicious joy in life
                </p>
                <div className='flex gap-4 font-semibold 
                        items-center mt-2 text-sm '>
                    <button className='flex bg-red-600 py-3  
                            px-4 rounded-full uppercase text-white gap-2'>
                        Order now
                        <Right />
                    </button>
                    <button className='flex items-center gap-2 px-4 py-3
                            rounded-full font-semibold text-gray-500'>
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>

            <div className=' w-72 min-h-96 mr-14 '>
                <div className='mt-14 '>
                    <Image src={'/pizza.png'} priority={true} width={300} 
                            height={300} alt="pizza"  />
                </div>
            </div>
        </section>
    )
}
