import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContest';
import './Header.css';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                { user?.uid ?
                     <span onClick={logOut}>Log Out</span>
                    :
                    <>
                        <Link to="/logIn">Log In</Link>
                        <Link to="/signUp">Sign Up</Link>
                    </>

                }
            </div>
        </nav>
    );
};

export default Header;