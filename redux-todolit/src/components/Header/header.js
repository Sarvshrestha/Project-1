import React from 'react';
import {Link} from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
function Header() {
    return(
        <>
        <div className='header'>
            <div className='header-logo'>
                <span>Testing</span>
            </div>
            <ul>
                <li><Link className='Link' href='#'>Products</Link></li>
                <li><Link className='Link' href='#'>Home</Link></li>
               
            </ul>
        </div>
        </>
    )
}
export default Header;