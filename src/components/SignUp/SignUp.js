import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { FaGoogle} from 'react-icons/fa';

const SignUp = () => {
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="email" >Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input type="password" name='password' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm" >Confirm Password</label>
                    <input type="password" name='confirm' required/>
                </div>
                <div>
                    <button className='btn btn-submit'>Sign Up</button>
                </div>
                <p>Already have an account? <Link to="/logIn">Log In</Link> </p>
                <div className="divider">
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <div>
                    <button className='btn btn-google'><FaGoogle /> Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;