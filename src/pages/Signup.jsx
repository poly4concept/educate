import React from 'react';
import '../styles/Signup.css';
import { FcGoogle } from 'react-icons/fc'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { GrTwitter } from 'react-icons/gr'
function Signup() {
    return (
        <div>
            <div className="social-signup">
                <p>Register with</p>
                <RiFacebookCircleFill className="facebook"/>
                <FcGoogle className="google"/>
                <GrTwitter className="twitter" />
            </div>
            <div className="signup-container">
                <h1 class="heading">Create your account</h1>
                <form action="" method="post">
                    <div class="form-control">
                        <input type="text" required value="First Name" />
                        <label for="">FIRST NAME</label>
                    </div>
                    <div class="form-control">
                        <input type="text" required value="Last Name" />
                        <label for="">LAST NAME</label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup; 