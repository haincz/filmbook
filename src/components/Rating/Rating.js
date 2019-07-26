import React, { Component } from 'react';
import styles from './Rating.module.scss'

class Rating extends Component {

    constructor() {
        super()

        this.state = {
            indicator: this.makeIndicator(3, 5),
            rating: 3,
            numOfRatings: 1,
            actualAverage: 3,
            averageSum: 3
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

    onClick = (i, numOfRatings, average) => {
        return () => this.setRating(i, numOfRatings, average)
    }

    setRating = (rating, numOfRatings, averageSum) => {

        let average = (averageSum + rating) / numOfRatings

        this.setState({
            rating: rating,
            numOfRatings: numOfRatings + 1,
            actualAverage: average,
            averageSum: averageSum + rating
        })
        this.setIndicator(rating)
        this.props.onChange(rating)
    }
 
    render() {

        const {numOfRatings, actualAverage, averageSum} = this.state


        return (

            <>
                {this.state.indicator.map((item, i) => (<span key={i}
                    className={(item ? styles.starSelected : styles.star)}
                    onMouseEnter={this.onMouseEnter(i+1)} onMouseLeave={this.onMouseLeave(i+1)} onClick={this.onClick(i+1, numOfRatings, averageSum)}> &#9733;</span>))}
                <p>Number of ratings: {numOfRatings}</p>
                <p>Average rating: {actualAverage.toFixed(1)}</p>
            </>
        );
    }

}

export default Rating
