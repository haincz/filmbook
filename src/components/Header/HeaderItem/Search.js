import React from 'react';
import styles from '../HeaderWrapper.module.scss'

const Search = () => (

    <div>
        <hr></hr>
        <div className={styles.search}>

            <input type="search"></input>
            <button>GO!</button>

        </div>
        <hr></hr>
    </div>
)

export default Search;
