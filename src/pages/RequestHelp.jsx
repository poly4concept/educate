import React from 'react'

const RequestHelp = () => {
    return (
        <>
            <div className="signup-background">
                <div className="signup-container">
                    <h1 className="heading">Get help</h1>
                    <form action="" method="post">
                        <div className="form-control">
                            <input type="text" id="fname" name="fname" required className="form-item" />
                            <label htmlFor="fname">Full Name</label>
                        </div>
                        <div className="form-control">
                            <input type="email" id="email" name="email" required   className="form-item" />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        <div className="form-control">
                            <input type="password" id="password" name="password" required  className="form-item" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-control">
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{11}" required className="form-item"/>
                            <label htmlFor="phone">Moblie Number</label>
                        </div>
                        <div className="form-control">
                            <input type="text" id="address" name="address" required className="form-item"/>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-control">
                            <input type="text" id="ailment" name="ailment" required className="form-item"/>
                            <label htmlFor="ailment">Type of Ailment</label>
                        </div>
                        <div className="form-control">
                            <input type="number" id="amount" name="amount" required className="form-item"/>
                            <label htmlFor="amount">Amount needed</label>
                        </div>
                        <p>Agree to our <span><a  className="inline-link" href="#terms">terms and conditions</a></span></p>
                        <button type="submit" className="btn"><span>submit</span></button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RequestHelp
