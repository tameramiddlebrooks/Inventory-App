import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <div>
        <nav className= "navigation">
            {/* <Link to="/Inventory">
                Inventory         
               </Link> */}

            <ul className="nav">

        {/* <li>
            <Link to="/"></Link>

        </li> */}

            <li>
                <Link to ="/Inventory" className="title">
                    Inventory         
                        </Link>
                            </li>


                <li>
                    <Link to ="/About">About</Link>
                    </li>

                    <li>
                        <Link to="/Quotes">Daily Quotes</Link>
                    </li>

                    <li>
                        <Link to ="/EmailPage">Contact</Link>
                    </li>
            </ul>
        </nav>
        </div>
    )
}
export default Navbar;
