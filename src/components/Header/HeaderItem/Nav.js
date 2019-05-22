import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../HeaderWrapper.module.scss';



const Nav = () => (

    <nav>
        <ul>
            <li><NavLink exact activeClassName={styles.navActive} to="/">HOME</NavLink></li>
            <li><NavLink activeClassName={styles.navActive} to="/contact"> CONTACT</NavLink></li>
            <li>ADVERTISE</li>
        </ul>
    </nav>

)

export default Nav;
