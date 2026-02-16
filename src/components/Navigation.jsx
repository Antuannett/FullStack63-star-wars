import React from 'react';
import NavItem from "./NavItem.jsx";
import {navItems} from '../utils/constants.js';

const Navigation = ({changePage}) => {
    return (
        <nav className="fixed-top mt-2 ms-4">
            <ul className="nav gap-2">
                {navItems.map(item => <NavItem changePage={changePage} key={item} itemTitle={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;