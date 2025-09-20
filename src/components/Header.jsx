import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/images/mami-nickz-logo.png"

export default function Header(){


    return(
      <header>
        <Link className='site-logo' to="/"><img src={logoImg} alt="Mami Nickz Logo" /></Link>
        <nav>
          <NavLink to="/host" className={({isActive}) => isActive? "active-link": null}>Host</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive? "active-link": null}>About</NavLink>
          <NavLink to="/snacks" className={({isActive}) => isActive? "active-link": null}>Snacks</NavLink>
        </nav>
      </header>
    )
}