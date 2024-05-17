import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";




export default function Home(){
    return(
   <div  name='home' className="w-full h-screen bg-black">
    <div className="  hidden lg:flex fixed inset-0  items-center  ">
    <ul>
        <li className="text-white  w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500"><a className="flex justify-between items-center w-full p-4" href="/">Linkedin<CiLinkedin size={38}/></a></li>
        <li className="text-white w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700 "><a className="flex justify-between items-center w-full p-4" href="/">Github<FaGithub size={38}/></a></li>
        <li className="text-white w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700 "><a className="flex justify-between items-center w-full p-4" href="/">Email<MdOutlineMail size={38}/></a></li>
    </ul>
    </div>
    {/*container*/}
    <div className="max-w-[1000px] mx-auto ml-[4rem] flex flex-col justify-center h-full   ">
        <p className="text-blue-800">Hi,my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Sadia Bhaks</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-700">I'm a Front-end Developer</h2>
        <p className="text-gray-700 py-4 max-w-[700px]">I'm a Front-end Developer  specializing in building exceptional digital experience.Currentl, I'm focused on building responsive Front-end websites</p>
        <div>
            <botton className="text-white font-bold  group border-2 flex px-3 py-6 my-2 items-center hover:bg-blue-600 h-10 w-[150px]">View Work <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight size={20}className=" ml-2"/></span></botton>
        </div>
    </div>
   </div>
    );
}