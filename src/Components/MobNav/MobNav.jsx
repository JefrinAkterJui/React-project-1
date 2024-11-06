import React, { useState } from 'react'
import './MobNav.css'
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const MobNav = () => {
  // -----------------usestate------------
  const [show , setShow]=useState(false)
  return (
    <>
      <nav className='resNav'>
        <div className="container">
          <div className="res_manu">
            <Link className="res_m_logo"> <img src="/imge/Logo.png" alt="logo" /></Link>
            <div onClick={()=>setShow(!show)} className="manu_icon">
                <FaBarsStaggered />
            </div>
          </div>
          {
            show ?

          <ul className='res_manu_row'>
            <li><Link to={''}>About</Link></li>
            <li><Link to={''}>Features</Link></li>
            <li><Link to={''}>Pricing</Link></li>
            <li><Link to={''}>Testimonials</Link></li>
            <li><Link to={''}>Help</Link></li>
          </ul>
            :
            ''
          }
        </div>
      </nav>
    </>
  )
}

export default MobNav