import React from 'react'
import './Footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="left-box">
                <div className="box">
                    <div className="icon_box">
                     <FaPiggyBank />
                    </div>
                    <div className="detail">
                        <h3>Great Saving</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <FaShippingFast />
                    </div>
                    <div className="detail">
                        <h3>free delivery</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <FaHeadphonesAlt />
                    </div>
                    <div className="detail">
                        <h3>24X7 support</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon_box">
                    <FaWallet />
                    </div>
                    <div className="detail">
                        <h3>money back</h3>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className="right_box">
                <div className="header">
                    <img src="image/logo.webp" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, soluta debitis. Neque, reprehenderit sequi vel, officia provident repellendus totam aut veritatis quam natus eius recusandae odit magni omnis deserunt dolorum?</p>
                </div>
                <div className="bottom">
                    <div className="box">
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>Sales</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Order</li>
                            <li>new product</li>
                            <li>old product</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>contact us</h3>
                        <ul>
                            <li>4000, Silver Business PointIndia</li>
                            <li>+(212)6875644</li>
                            <li>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer