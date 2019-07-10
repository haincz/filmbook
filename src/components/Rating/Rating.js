import React, { Component } from 'react';
import styles from './Rating.module.scss'

class Rating extends Component {

    constructor() {
        super()

        this.state = {
            indicator: this.makeIndicator(3, 5),
            rating: 3
        }

        this.makeIndicator = this.makeIndicator.bind(this)
    }

    makeIndicator = (rating, max) => {
        return [...Array(rating).fill(true), ...Array(max - rating).fill(false)]
    }

    setIndicator = (rating) => {
        this.setState({
            indicator: this.makeIndicator(rating, this.props.max)
        })
    }

    onMouseEnter = (i) => {
        return () => this.setIndicator(i)
    }

    onMouseLeave = (i) => {
        return () => this.setIndicator(this.state.rating)
    }

    onClick = (i) => {
        return () => this.setRating(i)
    }

    setRating = (rating) => {
        this.setState({
            rating: rating
        })
        this.setIndicator(rating)
        this.props.onChange(rating)
    }
 
    render() {

        return (

            <>
                {this.state.indicator.map((item, i) => (<span key={i}
                    className={(item ? styles.starSelected : styles.star)}
                    onMouseEnter={this.onMouseEnter(i+1)} onMouseLeave={this.onMouseLeave(i+1)} onClick={this.onClick(i+1)}> &#9733;</span>))}
                <p>Number of ratings: 0</p>
                <p>Average rating: 0</p>
            </>
        );
    }

}

export default Rating
