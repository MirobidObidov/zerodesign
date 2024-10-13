import Image from 'next/image'
import logo from '../public/logo.png'
import search from '../public/search.png'
import cart from '../public/cart.png'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-[5%]'>
        <div className='flex items-center'>
            <Image src={logo} className='w-40 h-15 cursor-pointer'/>
            <ul className='flex gap-5'>
                <li className='cursor-pointer'>Landing</li>
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>CMS Pages</li>
                <li className='cursor-pointer'>Utility</li>
            </ul>
        </div>
        <div className='flex items-center'>
            <button className='px-7 py-3 bg-black text-white'>$129 Buy Now</button>
            <Image src={search} className='w-10 h-10 ml-5 cursor-pointer'/>
            <Image src={cart} className='w-10 h-10 mx-3 cursor-pointer'/>
        </div>
    </nav>
  )
}

export default Navbar