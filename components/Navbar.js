import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <div>
        <nav className= "navigation">
            <Link to="/Inventory" className="title">
                Inventory         
               </Link>

            <ul className="about">
                <li>
                    <Link to ="/About">About</Link>
                    </li>

                    <li>
                        <Link to="/???">TBD</Link>
                    </li>

                    {/* <li>
                        <Link to ="/Inventory">Inventory</Link>
                    </li> */}
            </ul>
        </nav>
        </div>
    )
}
export default Navbar;