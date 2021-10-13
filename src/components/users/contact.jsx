import React from 'react'
import {MdLocationOn, MdSmartphone, MdEmail} from 'react-icons/md'
import './contact.css'
import Navbar from '../home/navbar'
import Footer from '../home/footer'

function Contact() {
    return(
        <>
            <Navbar />
            <div className='contact-title'>
                <h2>Contact Us</h2>
                <p>Send us your compliments or complaints</p>
            </div>
            <form className='contact-form'>
                <input type='text' name='name' placeholder='Name' />
                <input type='email' name='email' placeholder='Email' />
                <textarea rows='5' placeholder='Message' />
                <button className='contact-btn'>Send</button>
            </form>
            <div className='contact-info'>
                <div className='contact-rows'>
                    <div className='contact-item'>
                        < MdLocationOn className='md-icon'/>
                        <p>India</p>
                    </div>
                    <div className='contact-item'>
                        <MdSmartphone  className='md-icon'/>
                        <p>+91-9867542312</p>
                    </div>
                    <div className='contact-item'>
                        < MdEmail  className='md-icon'/>
                        <p>info@paperbag.co</p>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}
export default Contact;