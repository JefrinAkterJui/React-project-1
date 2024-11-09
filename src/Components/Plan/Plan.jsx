import React from 'react'
import './Plan.css'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Plan = () => {
  return (
    <>
    <section className='Plan'>
        <div className="container">
            <div className="Jui_Plan">
                <div className="main_plan">
                    <div className="Plan_text">
                        <h1>Choose Your Plan</h1>
                        <p>Let's choose the package that is best for you and explore it happily and cheerfully.
                        </p>
                    </div>
                    <div className="main_plan_cards">
                        <div className="plan_card">
                        <div className="plan_img">
                            <img src="/imge/Free.png" alt="free" />
                            <h2>Free Plan</h2>
                        </div>
                        <div className="free_card_text">
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Unlimited Bandwitch</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Encrypted Connection</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>No Traffic Logs</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Works on All Devices</p>
                            </div>
                        </div>
                        <div className="plan_button">
                            <h3>Free</h3>
                            <div className="P_button">

                            <Link to={'/'}>Select</Link>
                            </div>
                        </div>
                        </div>
                        <div className="plan_card">
                        <div className="plan_img">
                            <img src="/imge/Free.png" alt="free" />
                            <h2>Free Plan</h2>
                        </div>
                        <div className="free_card_text">
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Unlimited Bandwitch</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Encrypted Connection</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>No Traffic Logs</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Works on All Devices</p>
                            </div>
                        </div>
                        <div className="plan_button">
                            <h3>$9 <span>/mo</span></h3>
                            <div className="P_button">

                            <Link to={'/'}>Select</Link>
                            </div>
                        </div>
                        </div>
                        <div className="plan_card">
                        <div className="plan_img">
                            <img src="/imge/Free.png" alt="free" />
                            <h2>Free Plan</h2>
                        </div>
                        <div className="free_card_text">
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Unlimited Bandwitch</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Encrypted Connection</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>No Traffic Logs</p>
                            </div>
                            <div className="free_text">
                                <FaCheck className='f_icon'/>
                                <p>Works on All Devices</p>
                            </div>
                        </div>
                        <div className="plan_button">
                            <h3>$12 <span>/mo</span></h3>
                            <div className="P_button">

                            <Link to={'/'}>Select</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Plan