import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <section className='Jui_Banner'>
      <div className="container">

      <div className="Banner-row flex flex-wrap md:flex-nowrap justify-between ">
        <div className="banner_text">
          <h1>Want anything to be easy with <span>LaslesVPN</span>.</h1>
          <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.

          </p>
          <div className="Banner_button">

          <Link to={'/'}>Get Started</Link>
          </div>
        </div>
        <div className="Banner_imge ">
          <img src="/imge/banner.png" alt="banner" />
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Banner