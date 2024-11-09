import React from 'react'
import './Provide.css'
import { MdCheckCircle } from "react-icons/md";

const Provide = () => {
  return (
    <>
    <section className='provider_banner'>
        <div className="container">

        <div className="Jui_provider">
            <div className="Main_provider">
                <div className="provider_imge">
                    <img src="imge/b.png" alt="banner" />
                </div>
                <div className="provider_text">
                    <h1>We Provide Many Features You Can Use</h1>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.
                    </p>
                    <div className="provider_icon">
                      <MdCheckCircle className='icon' />
                      <p>Powerfull online protection.</p>
                    </div>
                    <div className="provider_icon">
                      <MdCheckCircle className='icon' />
                      <p>Powerfull online protection.</p>

                    </div>
                    <div className="provider_icon">
                      <MdCheckCircle className='icon' />
                      <p>Powerfull online protection.</p>
                    </div>
                    <div className="provider_icon">
                      <MdCheckCircle className='icon' />
                      <p>Powerfull online protection.</p>
                    </div>
                </div>

            </div>

        </div>
        </div>
    </section>
    </>
  )
}

export default Provide