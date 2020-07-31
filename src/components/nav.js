import React from "react"
import { Link } from "gatsby";

export default function Nav() {
  return (
    <nav>
      <p>LYDIA GREGORY</p>
      <div>
        <Link className='link' to='/'>Home</Link>
        <Link className='link' to='/about'>About</Link>
        <Link className='link' to="/contact/">Contact</Link>
      </div>
    </nav>
  )
}