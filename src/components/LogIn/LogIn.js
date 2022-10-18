import React from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';
import { FaGoogle} from 'react-icons/fa';

const LogIn = () => {
    return (
        <div className="form_container">
            <div className="form-div">
                <h2>Log In</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email" >Email</label>
                        <input type="email" name='email' required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name='password' required/>
                    </div>
                    <div>
                        <input className='btn btn-submit' type="submit" value="Log In" />
                    </div>
                </form>
                <p>New to Ema-john?  <span><Link to="/signUp">Create New Account</Link></span> </p>
                <div className="divider">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <div>
                    <button className='btn btn-google'> <FaGoogle /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;