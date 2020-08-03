import React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return(
    <nav>
      <Link className='name' to='/'>LYDIA GREGORY</Link>
      <div>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to="/contact/">Contact</Link>
      </div>
    </nav>
  )
}