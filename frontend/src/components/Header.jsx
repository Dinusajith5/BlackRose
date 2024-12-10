import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import { MdClose, MdMenu } from 'react-icons/md';
import { FaOpencart } from 'react-icons/fa';

const Header = () => {

  const [menuOpned, setmenuOpened] = useState(false);

  const toggleMenu = () => setmenuOpened(!menuOpned);



  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5">
      <div className="px-4 flexBetween py-3 max-xs:px-2">

        <div>
          {/* logo */}
          <Link><img src={logo} alt="" height={100} width={100} /></Link>
        </div>

        {/* Navbar implement for desktop */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"} />

        {/* navbar implement for mobile */}
        <Navbar containerStyles={`${menuOpned ? "felx item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3x1 shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 " : "felx item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3x1 shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}/>

        {/* Buttons */}
        <div className="flexBetween sm:gap-x-6 bold-16">
          {!menuOpned? (<MdMenu className="md:hidden coursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/>): (<MdClose className="md:hidden coursor-pointer hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 w-8 rounded-full" onClick={toggleMenu}/>)}

          <div className="flexBetween sm-gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}><FaOpencart className="p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full"/><span className="relative flexCenter w-3.5 h-3.5 rounded-full bg-secondary text-white medium-14 -top-2 ">0</span></NavLink>
            
          </div>

          <div className="flexBetween sm-gap-x-6">
            <NavLink to={"logout"} className={"btn_secondary_rounded flex-center"} >Logout</NavLink>

          </div>

        </div>




      </div>
    </header>
  )
}

export default Header