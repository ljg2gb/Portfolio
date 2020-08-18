import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return(
    <nav>
      <Link className='name' to='/'>LYDIA GREGORY</Link>
      <div>
        <Link className='nav-link' to='/'>Home</Link>
        <Link className='nav-link' to='/about'>About</Link>
        <Link className='nav-link' to="/resume/">Resume</Link>
        <Link className='nav-link' to="/contact/">Contact</Link>
      </div>
    </nav>
  )
}