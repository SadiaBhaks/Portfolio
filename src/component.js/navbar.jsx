import React,{useState} from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Link } from 'react-scroll';


export default function Navbar(){
    const [toggle,setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    return(
        <div name='navbar' className="bg-black p-4 fixed w-full">
            <div className="max-w-[1240px] py-[12px] items-center  flex justify-between  mx-auto">
                <div className="text-3xl font-bold text-gray-700 underline m-3 ">
                    SB
                </div>
                {
                    toggle ?
                <IoIosMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block"/>
                :
                <IoIosClose onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
                }
                <ul className=" hidden md:flex cursor-pointer text-white gap-40 ">
                    <li className="hover:underline">
                    <Link to='home' smooth={true} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li className="hover:underline">
                    <Link to='about' smooth={true} duration={500}>
                        About
                        </Link>
                    </li>
                    <li className="hover:underline">
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                        </Link>
                    </li>
                    <li className="hover:underline">
                    <Link to='work' smooth={true} duration={500}>
                        Work
                        </Link>
                    </li>
                    <li className="hover:underline">
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                        </Link>
                    </li>
                </ul>
                
                <ul className={`duration-300 md:hidden w-full h-screen  text-black fixed bg-white top-[92px] ${toggle?'left-[0]':'left-[-100%]'}`}>
                <li className="hover:underline p-5">
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li  className="hover:underline p-5">
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                        </Link>
                    </li>
                    <li className="hover:underline p-5">
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        Skills
                        </Link>
                    </li>
                    <li className="hover:underline p-5">
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        Work
                        </Link>
                    </li>
                    <li className="hover:underline p-5">
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                        </Link>
                    </li>
                </ul>
                
            </div>
        </div>
    );
}
