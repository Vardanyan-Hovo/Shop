import Link from 'next/link'

export default function Header() {
  return (
      <header className='flex justify-between '>
        <nav className='flex items-center gap-6 font-semibold text-gray-500 '>
          <Link href='/' className='text-red-600 font-semibold text-2xl'>
            ST PIZZA
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={''}>Menu</Link>
          <Link href={''}>About</Link>
          <Link href={''}>Contact</Link>
        </nav>

        <nav className='flex items-center gap-6 font-semibold'>
          <Link href={''} className=' text-gray-500'>
                Login
          </Link>
          <Link href={'/register'} className='bg-red-600 text-white rounded-full px-6 py-2
               outline-black outline-double'>
                Register
          </Link>
        </nav>
      </header>
  )
}
