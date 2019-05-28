import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styles from '../HeaderWrapper.module.scss'
import buttonStyles from '../../Button/Button.module.scss'

class Search extends Component {


    state = {value: ''}

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {


        return (<div>
            <hr></hr>
            <div className={styles.search}>

                <input type="search" value={this.state.value} onChange={this.handleChange}></input>
                <Link className={buttonStyles.button} to={{ pathname: '/search?' + this.state.value,}}>GO!</Link>
                
            </div>
            <hr></hr>
        </div>
        )
    }
}

export default Search;
