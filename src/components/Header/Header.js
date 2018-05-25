import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            Houser
            <button><Link to='/wizard'>Add New Property</Link></button>
        </div>
    );
};

export default Header;