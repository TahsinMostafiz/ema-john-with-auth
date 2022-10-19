import React, { useContext} from 'react';
import './LogIn.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle} from 'react-icons/fa';
import { AuthContext } from '../Context/UserContest';

const LogIn = () => {
    

    const {signIn, googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleSignIn = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            form.reset()
            navigate(from, {replace : true});
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
        
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then((result) => {
    
            // The signed-in user info.
            const user = result.user;
            console.log(user)
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }

    return (
        <div className="form_container">
            <div className="form-div">
                <h2>Log In</h2>
                <form onSubmit={handleSignIn}>
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
                    <button onClick={handleGoogleSignIn} className='btn btn-google'> <FaGoogle /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;