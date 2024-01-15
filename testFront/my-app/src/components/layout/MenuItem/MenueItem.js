export default function MenuItem(){
    return(
        <>
            <div className='bg-gray-200 p-2 rounded-2xl text-center
                    hover:bg-white transition-all hover:shadow-md hover:shadow-black/50'>
                <div className='flex justify-center max-h-48'>
                    <img src={'/pizza.png'} alt="pizza" width={'50%'}/>
                </div>
                <h4 className='font-semibold text-xl'>
                    Pepperoni pizza
                </h4>
                <p className='font-semibold text-gray-500 text-sm mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </p>
                <button className='bg-red-500 font-semibold mt-2 rounded-full p-2
                                w-40 text-white'>
                    Add to cart $12
                </button>
            </div>
        </>
    )
}