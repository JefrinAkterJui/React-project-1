import React from 'react'
import './Counter.css'
import { FaUser } from "react-icons/fa";
import CountUp from 'react-countup';
import { FaLocationDot } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";

const Counter = () => {
  return (
    <>
    <section className='Counter'>
        <div className="container">
            <div className="jui_Counter">
                <div className="main_counter">
                    <div className="single_counter">
                        <div className="Counter_icon">
                            <FaUser />
                        </div>
                        <div>
                            <div className="count_div">
                                <CountUp end={90} className='count'/>
                                <p>+</p>
                            </div>
                                <h6>Users</h6>
                        </div>
                    </div>
                    <div className="counter_line">
                        
                    </div>
                </div>
                <div className="main_counter">
                    <div className="single_counter">
                        <div className="Counter_icon">
                        <FaLocationDot />
                        </div>
                        <div>
                            <div className="count_div">
                                <CountUp end={30} className='count'/>
                                <p>+</p>
                            </div>
                                <h6>Locations</h6>
                        </div>
                    </div>
                    <div className="counter_line">
                        
                    </div>
                </div>
                <div className="main_counter">
                    <div className="single_counter">
                        <div className="Counter_icon">
                        <FaServer />
                        </div>
                        <div>
                            <div className="count_div">
                                <CountUp end={50} className='count'/>
                                <p>+</p>
                            </div>
                                <h6>Servers</h6>
                        </div>
                    </div>
                    {/* <div className="counter_line">
                        
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Counter