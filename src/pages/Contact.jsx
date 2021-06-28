import React from 'react';
import {FaPhoneAlt} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

const Contact = () => {
    return (
        <>
            <div className="contact-head">
                    <h2>We’d love to hear from you</h2>
                    <p>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions</p>
            </div>
            <div className="contact-container">
                <div className="info">
                  <div className="phone info-hover">
                    <FaPhoneAlt className="contact-icon"/>
                    <h4 className="icon-head">Call:</h4>
                    <small className="icon-small">+2345678910111</small>
                  </div>
                  <div className="email info-hover">
                    <GrMail className="contact-icon"/>
                    <h4 className="icon-head">Email</h4>
                    <small className="icon-small">cheapmedicaloperations@gmail.com</small>
                  </div>
                </div>
                <div class="form">
                    <h3>Contact us</h3>
                    <hr />
                    <form  method="post" class="form-container">
                        <div className="form-group">
                            <label for="name">Your name</label>
                            <input type="text" name="name" id="name" className="form-item" required/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" className="form-item" required/>
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea cols="2" type="message" name="message" id="message" className="form-item" required/>
                        </div>
                        <button type="submit"  name="submit">
                        Send Message
                      </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
