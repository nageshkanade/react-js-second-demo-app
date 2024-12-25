import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header=()=>{
    return <div className='Header-Nav'>
        <div className='Header-First'>
            <h1>Developer Guru</h1>
        </div>
        <div className='Header-Second'>
            <ul className='nav'>
                <li><Link to='/' className='link'>HOME</Link></li>
                <li><Link to='/About' className='link'>ABOUT</Link></li>
                <li><Link to='/Service' className='link'>SERIVCE</Link></li>
                <li><Link to='/Probuct' className='link'>PROBUCT</Link></li>
               
            </ul>
        </div>
    </div>
}

export default Header;
