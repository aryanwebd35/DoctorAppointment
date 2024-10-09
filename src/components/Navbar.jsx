import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();

    const [showMenu,setShowMenu]=useState(false)
    const [token,setToken]=useState(true)



  return (
    <div className='flex item-center justify-between text-sm py-4 mb-5 border-b border-b-grey-400'>
        <img className='w-44 cursor-pointer'src={assets.logo} alt="" />
        <ul className='hidden md:flex item-start gap-5 font-medium '>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'></hr>
            </NavLink>
        </ul>
        <div className='flex item-center gap-4'>
            {
                token
                ? <div>
                    <img classNamesrc={assets.profile_pic} alt="" />
                    <img src={assets.dropdown_icon} alt="" />
                </div>
                :  <button onClick={()=>navigate('/login')} className='bg-primary text-white py-3 px-8 rounded-full font-light hidden md:block'>Create Account</button>
            }
           
        </div>
    </div>
  )
}

export default Navbar