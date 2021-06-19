import React from 'react';
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
        </div>
    )
}

export default Signup
