import React from 'react'
import './footer.css'

function Footer() {
    return(
        <>
            <footer className='footer'>
                <div className='foot-title'>
                    <h2>Subscribe</h2>
                </div>
                <form className='foot-form'>
                    <input type='email' name='email' placeholder='Email' />
                    <button className='foot-btn'>Send</button>
                </form>
                <div className='foot-info'>
                    <div className='foot-rows'>
                        <div className='foot-row'>
                            <h3>Contact us</h3>
                            <p>12345678-677</p>
                            <p>info@paperbag.co</p>
                        </div>
                        <div className='foot-row'>
                            <h3>Paperbag</h3>
                            <p>Account Profile</p>
                            <p>Store Support</p>
                            <p>Terms of use</p>
                            <p>Trademarks</p>
                        </div>
                        <div className='foot-row'>
                            <h3>Company</h3>
                            <p>Terms and conditions</p>
                            <p>Privacy Policy</p>
                            <p>Careers</p>
                            <p>Company news</p>
                            <p>Security</p>
                        </div>
                    </div>
                </div>
                
            </footer>
        </>
    )
}
export default Footer