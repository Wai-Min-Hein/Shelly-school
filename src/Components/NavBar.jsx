import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

    const nav = useNavigate()
  return (
    <div className=' container px-[5rem] mx-auto'>
        <div className="flex items-center justify-between gap-24">
            <div className="flex justify-start items-center gap-2">
                <img src="https://shelly.merku.love/wp-content/uploads/2021/07/logo.png" className='w-[2.5rem] h-[2.5rem]' alt="" />
            </div>
            <ul className='flex items-center justify-start gap-10 flex-1'>
                <Link to={'/'}>
                
                <li className="capitalize text-md font-medium nav-link relative inline-block hover:text-primary duration-150 text-secondary">Home</li>

                </Link>
                
                <li onClick={() => nav('/about-us')} className="capitalize text-md font-medium nav-link relative inline-block hover:text-primary duration-150 text-secondary">about us</li>


                <li className="capitalize text-md nav-link font-medium  relative  group flex items-center  justify-start gap-2">
                    <span  onClick={() => nav('/classes')} className='hover:text-primary duration-150 text-secondary'>classes</span>
                    <AiOutlineCaretDown className='text-xs text-secondary'/>
                    <span className='absolute top-[2rem] left-0 w-[10rem] bg-white h-[2rem] hidden group-hover:inline-block'>
                        <span  onClick={() => nav('/single-class')} className='text-secondary shadow-lg px-5 py-2  '>Single Class</span>
                    </span>
                </li>
                
                <li className="capitalize text-md nav-link font-medium  relative flex items-center  justify-start gap-2 group">
                    <span  onClick={() => nav('/teachers')} className='hover:text-primary duration-150 text-secondary'>teacher</span>
                    <AiOutlineCaretDown className='text-xs text-secondary'/>

                    <span className='absolute top-[2rem] left-0 w-[10rem] bg-white h-[2rem] hidden group-hover:inline-block'>
                        <span  onClick={() => nav('/single-teacher')} className='text-secondary shadow-lg px-5 py-2  '>teacher single</span>
                    </span>
                </li>
                <li className="capitalize text-md nav-link font-medium  relative flex items-center  justify-start gap-2 group">
                    <span  onClick={() => nav('/events')} className='hover:text-primary duration-150 text-secondary'>events</span>
                    <AiOutlineCaretDown className='text-xs text-secondary'/>

                    <span className='absolute top-[2rem] left-0 w-[10rem] bg-white h-[2rem] hidden group-hover:inline-block'>
                        <span  onClick={() => nav('/single-event')} className='text-secondary shadow-lg px-5 py-2  '>event single</span>
                    </span>
                </li>

                {/* <li className="capitalize text-md font-medium nav-link relative inline-block hover:text-primary duration-150 text-secondary">blog</li> */}
                
                <li  onClick={() => nav('/contact')} className="capitalize text-md font-medium nav-link relative inline-block hover:text-primary duration-150 text-secondary">contact</li>
                
            </ul>
            <div className="flex items-center justify-start gap-5">
                <span className=' w-[2rem] h-[2rem] rounded-full border-2 border-primary grid place-items-center'>

                <AiOutlineTwitter className='text-primary text-xl'/>
                </span>
                <span  className=' w-[2rem] h-[2rem] rounded-full border-2 border-primary grid place-items-center'>

                <FaFacebookF  className='text-primary text-xl'/>
                </span>
                <span  className=' w-[2rem] h-[2rem] rounded-full border-2 border-primary grid place-items-center'>

                <FaLinkedinIn  className='text-primary text-xl'/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default NavBar
