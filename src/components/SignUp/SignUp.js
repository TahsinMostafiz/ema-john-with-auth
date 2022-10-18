import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';
import { FaGoogle} from 'react-icons/fa';
import { AuthContext } from '../Context/UserContest';

const SignUp = () => {
    const [error, setError] = useState(null)

    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if(password < 6) {
            setError("Password should be gater than 6");
            return;
        }

        if(password !== confirm) {
            setError("Password did not match");
            return;
        }

        createUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });


    }


    return (
        <div className="form_container">
            <div className="form-div">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
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
                    <p>{error}</p>
                    <div>
                        <input className='btn btn-submit' type="submit" value="Sign Up" />
                    </div>
                </form>
                <p>Already have an account? <span><Link to="/logIn">Log In</Link></span> </p>
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

export default SignUp;