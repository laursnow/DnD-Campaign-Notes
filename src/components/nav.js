import React from 'react';
import './nav.css';

const Nav = () => {
 return (
     <nav>
         <ul>
             <li className="nav-links"><h1>DnD Notes</h1></li>
             {this.props.isLoggedIn}
             <li className="nav-links">Dashboard</li>
             <li className="nav-links">Dashboard</li>
             <li className="nav-links">Logout</li>
         </ul>
     </nav>
 )
}

export default Nav