import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdCategory, MdHomeFilled } from 'react-icons/md'
// import { MdCottage } from "react-icons/md";

const Navbar = () => {
  return (
   <nav className={'${containerStyles}'}>

    <NavLink to={'/'} ><div className="flexCenter gap-x-1"><MdHomeFilled/>Home</div></NavLink>
    <NavLink to={'/'} ><div className="flexCenter gap-x-1"><MdCategory/>Posey</div></NavLink>
    <NavLink to={'/'} ><div className="flexCenter gap-x-1"><MdCategory/>Long Bouqet</div></NavLink>

    
   </nav>
  )
}

export default Navbar