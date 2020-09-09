import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/MainNavigation.css';

const links = [
    { name: 'websites', path: '/websites' },
    { name: 'texts', path: '/texts' },
    { name: 'start', path: '/', exact: true }
]

const menuSwitch = <div className="main_nav_switch" id="main_nav_switchId">
    <div className="block1"></div>
    <div className="block2"></div>
    <div className="block3"></div>
</div>;

const MainNavigation = (props) => {
    const linksList = links.map(link =>
        <li key={link.name} >
            <NavLink className='nav_links' to={link.path} exact={link.exact ? link.exact : false}>{link.name}</NavLink>
        </li>
    )

    return (
        <>
            <div id="main_header">
                <div className="totem" id="totemId">
                    <nav>
                        {linksList}
                        {menuSwitch}
                    </nav>
                </div>
            </div>

        </>
    );
}

export default MainNavigation;