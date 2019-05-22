import React from 'react';
import styles from '../HeaderWrapper.module.scss'
import buttonStyles from '../../Button/Button.module.scss'

const Search = () => (

    <div>
        <hr></hr>
        <div className={styles.search}>

            <input type="search"></input>
            <button className={buttonStyles.button}>GO!</button>

        </div>
        <hr></hr>
    </div>
)

export default Search;
