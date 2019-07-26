import React, { Component } from 'react';
import styles from './Detail.module.scss';
import Rating from '../Rating/Rating';
import MetaTags from 'react-meta-tags';


class DetailWrapper extends Component {

    state = {
        details: [],
        isLoading: false,
        error: null,
    };

    componentDidMount() {


        const { id } = this.props.match.params

        fetch(`http://movies.seojoker.pl/api/movies/${id}/`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        details: result,
                        isLoading: false,
                        error: null,
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { details, isLoading, error } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div className={styles.Wrapper}>
                <MetaTags>
                    <title>{details.Title} - filmsbook - movie library</title>
                    <meta name="description" content={details.Plot} />
                </MetaTags>
                <div className={styles.WrapperHeader}>
                    <div className="detail-wrapper__header--image">
                        <img src={details.Poster} alt={details.Title}></img>
                    </div>
                    <div className="detail-wrapper__header--title">
                        <h1>{details.Title} ({details.Year})</h1>
                        <h2>Released: {details.Released}</h2>
                        <h2>Genre: {details.Genre}</h2>
                        <h2>Metascore: {details.Metascore}</h2>
                        <h2>Runtime: {details.Runtime}</h2>
                        <h2>Country: {details.Country}</h2>
                    </div>
                    <div className={styles.ratings}>
                        <Rating max={5} value={0} onChange={(rating) => console.log(rating)} />
                    </div>
                </div>
                <div className="detail-wrapper__description">
                    <h3>Description:</h3>
                    <p>{details.Plot}</p>
                </div>
                <div className="detail-wrapper__cast">
                    <h3>Actors:</h3>
                    <p>{details.Actors}</p>
                    <h3>Directed by:</h3>
                    <p>{details.Director}</p>
                    <h3>Writing Credits:</h3>
                    <p>{details.Writer}</p>
                </div>
                <div className="detail-wrapper__restdata">
                    <h3>Production: {details.Production}</h3>
                    <h3>Rated: {details.Rated}</h3>
                </div>
            </div>
        );
    }
}

export default DetailWrapper;