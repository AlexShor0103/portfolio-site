import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import {MenuItems} from './MenuItems';

function Navbar() {
    


    return(
        <nav className="NavBarItems">
            <h1 className="NavBarTitle">Alexandr Shor</h1>
            <div className="menu-icon"></div>
            <ul className="MenuChoices">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar;