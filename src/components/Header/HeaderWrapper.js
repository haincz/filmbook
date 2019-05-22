import React from 'react';
import Logo from './HeaderItem/Logo';
import Nav from './HeaderItem/Nav';
import Search from './HeaderItem/Search';
import styles from './HeaderWrapper.module.scss';


const HeaderWrapper = () => (



    <header className={styles.header}>
        <div className={styles.nav}>
            <Logo />
            <Nav />
        </div>
        <Search />
    </header>

);

export default HeaderWrapper;