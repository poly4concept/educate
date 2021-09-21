import React from 'react';
import Login from '../assets/hero.png'

const Contact = () => {
    return (
        <>
            <div className='login-container'>
            <div className='login-img'>
                <img src={Login} alt='login'/>
            </div>
                <div class="form">
                    <hr />
                    <form action="action_page.php" method="post">

                        <div class="container">
                            <label for="uname"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required/>

                            <label for="psw"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required/>

                            <button type="submit">Login</button>
                            <label>
                            <input type="checkbox" checked="checked" name="remember"/> Remember me
                            </label>
                        </div>

                        </form>
                </div>
            </div>
        </>
    )
}

export default Contact
