import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
        <div className="container">
          <div className="manu_row">
            <Link to={'/'} className="manu_logo"><img src="/imge/Logo.png" alt="logo" /></Link>
            <div className="main_manu_row">
              <ul>
                <li><Link to={'#'}>About</Link></li>
                <li><Link to={'#'}>Features</Link></li>
                <li><Link to={'#'}>Pricing</Link></li>
                <li><Link to={'#'}>Testimonials</Link></li>
                <li><Link to={'#'}>Help</Link></li>
              </ul>
            </div>
            <div className="Manu_button">
              <Link className='button1' to={"/"}>Sign In</Link>
              <Link className='button2' to={"/"}>Sign Up</Link>
            </div>
          </div>

        </div>
    </nav>
    </>
  )
}

export default Navbar