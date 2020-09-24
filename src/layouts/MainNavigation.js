import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/MainNavigation.css';

class MainNavigation extends Component {
    links = [
        { name: 'websites', path: '/websites' },
        { name: 'texts', path: '/texts' },
        { name: 'start', path: '/start', id: "navlink_start" }
    ]

    menuSwitch = <div className="main_nav_switch" id="main_nav_switchId">
        <div className="block1"></div>
        <div className="block2"></div>
        <div className="block3"></div>
    </div>;

    render() {
        const linksList = this.links.map(link =>
            <li key={link.name} id={link.id ? link.id : null}>
                <NavLink className='nav_links' to={link.path}>{link.name}</NavLink>
            </li>
        )

        return (
            <>
                <div id="main_header">
                    <div className="totem" id="totemId">
                        <nav>
                            {linksList}
                            {this.menuSwitch}
                        </nav>
                    </div>
                </div>

            </>
        );
    }
}

export default MainNavigation;