import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdCategory, MdHomeFilled } from 'react-icons/md'
// import { MdCottage } from "react-icons/md";

const Navbar = ({ containerStyles }) => {
  return (
   <nav className={`${containerStyles}`}>

    <NavLink to={'/'} ><div className="flexCenter gap-x-1"><MdHomeFilled/>Home</div></NavLink>
    <NavLink to={'/Posey'} ><div className="flexCenter gap-x-1"><MdCategory/>Posey</div></NavLink>
    <NavLink to={'/Long Bouqet'} ><div className="flexCenter gap-x-1"><MdCategory/>Long Bouqet</div></NavLink>

    
   </nav>
  )
}

export default Navbar