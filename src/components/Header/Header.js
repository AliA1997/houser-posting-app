import React from 'react';
import { Link } from 'react-router-dom';
import GoHome from 'react-icons/lib/go/home'
import './Header.css';

const Header = () => {
    return (
        <div className='header-div'>
            <div></div>
            <p clasName='header'><GoHome className='logo' /> Houser</p>
            <button className='add-new-property-button'><Link to='/wizard'>Add New Property</Link></button>
        </div>
    );
};

export default Header;