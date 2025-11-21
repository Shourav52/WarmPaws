import React from 'react'
import MyContainer from './MyContainer'
import logo from '../assets/logo.jpeg'
import { Link, NavLink } from 'react-router'
import MyLink from './MyLink'
const Navbar = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 border-b' >
        <MyContainer className="flex items-center justify-between">
            <figure>
                <img className='w-[50px] rounded-4xl' src={logo}  alt="" />
            </figure>
            <ul className={"flex items-center gap-2"}>
                <li>
                    <MyLink to={"/"}>Home</MyLink>
                </li>
                <li>
                   <MyLink to={"/services"}>Services</MyLink>
                </li>
                <li>
                   <MyLink to={"/myProfile"}>MyProfile</MyLink>
                </li>

            </ul>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md font-semibold'>
                <Link to={"/login"}>Login</Link>

            </button>

        </MyContainer>
       
    </div>
  )
}

export default Navbar
