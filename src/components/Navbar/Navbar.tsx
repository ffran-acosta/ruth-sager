// import Logo from '@/assets/logo.png';
import RuthSager from '@/assets/ruth-sager.png';

const Navbar = () => {
    return (
        <div className="fixed w-full h-[80px] flex justify-center px-4 bg-[#e7e7e7] shadow-lg">
            <div className='flex h-full items-center w-[90%] justify-between'>
            <div>
                <a href="/">
                    <img src={RuthSager} alt="Logo-Img" style={{ width: '250px', cursor: 'pointer' }} />
                </a>
            </div>
            <div>
                <ul className='flex text-xl font-semibold cursor-pointer'>
                    <li className='mx-3 hover:text-[#1e7438] duration-300'>
                        PRODUCTOS
                    </li>
                    <li className='mx-3 hover:text-[#1e7438] duration-300'>
                        LA EMPRESA
                    </li>
                    <li className='mx-3 hover:text-[#1e7438] duration-300'>
                        ATENCION AL CLIENTE
                    </li>
                    <li className='mx-3 hover:text-[#1e7438] duration-300'>
                        CONTACTO
                    </li>
                </ul>
            </div>
            {/* <div className='flex justify-center items-center'>
                <a href="/">
                    <img src={Logo} alt="Logo-Img" style={{ width: '65px', cursor: 'pointer' }} />
                </a>
            </div> */}
            </div>
            </div>
    )
}
export default Navbar