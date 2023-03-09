// import Logo from '@/assets/logo.png';
import RuthSager from '@/assets/ruth-sager.png';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-center px-4 bg-[#e7e7e7] shadow-lg">
            <div className='flex h-full items-center w-[90%] justify-between'>
                {/* LOGO */}
                <div>
                    <a href="/">
                        <img src={RuthSager} alt="Logo-Img" style={{ width: '250px', cursor: 'pointer' }} />
                    </a>
                </div>
                {/* NAVBAR */}
                <div>
                    <ul className='text-xl font-semibold cursor-pointer hidden md:flex'>
                        <li className='mx-3 hover:text-[#1e7438] duration-300'>
                            <Link to='/products'>PRODUCTOS</Link>
                        </li>
                        <li className='mx-3 hover:text-[#1e7438] duration-300'>
                            <Link to='/company'>LA EMPRESA</Link>
                        </li>
                        <li className='mx-3 hover:text-[#1e7438] duration-300'>
                            <Link to='/customer-support'>ATENCION AL CLIENTE</Link>
                        </li>
                        <li className='mx-3 hover:text-[#1e7438] duration-300'>
                            <Link to='/contact'>CONTACTO</Link>
                        </li>
                    </ul>
                </div>
                {/* <div className='flex justify-center items-center'>
                    <a href="/">
                        <img src={Logo} alt="Logo-Img" style={{ width: '65px', cursor: 'pointer' }} />
                    </a>
                </div> */}
            </div>

            {/* MOBILE MENU */}
            <div className='flex justify-center items-center'>
                {/* HAMBURGER MENU */}
                <div onClick={handleClick} className='md:hidden z-10 text-3xl cursor-pointer  hover:text-[#1e7438] duration-300'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
                <ul className={!nav ? 'hidden' : 'bg-white absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
                    <li className='py-6 text-3xl mx-3 hover:text-[#1e7438] duration-300'>
                        <Link to='/products'>PRODUCTOS</Link>
                    </li>
                    <li className='py-6 text-3xl mx-3 hover:text-[#1e7438] duration-300'>
                        <Link to='/company'>LA EMPRESA</Link>
                    </li>
                    <li className='py-6 text-3xl mx-3 hover:text-[#1e7438] duration-300'>
                        <Link to='/customer-support'>ATENCION AL CLIENTE</Link>
                    </li>
                    <li className='py-6 text-3xl mx-3 hover:text-[#1e7438] duration-300'>
                        <Link to='/contact'>CONTACTO</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar