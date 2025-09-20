import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/images/mami-nickz-logo.png"

export default function Header(){
    return(
      <header>
        <Link className='site-logo' to="/"><img src={logoImg} alt="Mami Nickz Logo" /></Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/snacks">Snacks</Link>
        </nav>
      </header>
    )
}