import React, {useState} from 'react'

import { FaEye, FaEyeSlash } from 'react-icons/fa'

// IMAGES
const requestImg = `https://res.cloudinary.com/devsource/image/upload/v1624292520/cmo/images_2_xe3r3c.jpg`

const RequestHelp = () => {
    const [typePass, setTypePass] = useState(false)
    const [typePas, setTypePas] = useState(false)


    return (
        <>
            <div className="signup-background">
                <h1>We're on a mission of big changes.</h1> 
                <h2>To help people and the world</h2>
                <div className="signup-center">
                    <div className="signup-left">
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                        <img src={requestImg} alt="requestImg" />
                    </div>

                    <div className="signup-right">
                        <div className="signup-container">
                            {/* <h1 className="heading">Get help</h1> */}
                            <form action="" method="post">
                                <div className="form-control">
                                    <input type="text" id="fname" name="fname" required className="form-item" />
                                    <label htmlFor="fname">Full Name</label>
                                </div>

                                <div className="form-control">
                                    <input type="email" id="email" name="email" required className="form-item" />
                                    <label htmlFor="email">Email Address</label>
                                </div>
                                
                                <div className="form-control">
                                    <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" required className="form-item" />
                                    <label htmlFor="phone">Moblie Number</label>
                                </div>

                                <div className="form-control">
                                    <input type="text" id="address" name="address" required className="form-item" />
                                    <label htmlFor="address">Address</label>
                                </div>

                                <div className="form-control">
                                    <input type="text" id="ailment" name="ailment" required className="form-item" />
                                    <label htmlFor="ailment">Type of Ailment</label>
                                </div>

                                <div className="form-control">
                                    <input type={typePas ? "text" : "password"} id="password" name="password" required className="form-item" />
                                    <label htmlFor="password">Password</label>
                                    <small onClick={() => setTypePas(!typePas)}>
                                        {typePas ? <FaEyeSlash/> : <FaEye/>}
                                    </small>
                                </div>

                                <div className="form-control">
                                    <input type={typePass ? "text" : "password"} id="password" name="password" required className="form-item" />
                                    <label htmlFor="password">Confirm Password</label>
                                    <small onClick={() => setTypePass(!typePass)}>
                                        {typePass ? <FaEyeSlash/> : <FaEye/>}
                                    </small>
                                </div>

                                <div className="form-control">
                                    <input type="number" id="amount" name="amount" required className="form-item" />
                                    <label htmlFor="amount">Amount needed</label>
                                </div>

                                <div className="form-control">
                                    <input type="number" id="amount" name="amount" required className="form-item" />
                                    <label htmlFor="amount">Amount Generated</label>
                                </div>

                                <div className="form-control">
                                    <textarea id="textarea" name="textarea" required className="form-item" />
                                    <span style={{color:'red'}}>0/500</span>
                                    <label htmlFor="textarea">Decription of Ailments</label>
                                </div>

                                {/* <p>Agree to our <span><a className="inline-link" href="#terms">terms and conditions</a></span></p> */}
                                
                                <button type="submit" className="bt"><span>submit</span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestHelp
