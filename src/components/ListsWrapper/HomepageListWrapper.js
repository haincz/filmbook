import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ListItem from './ListItem/ListItem';
import ListItemFavourites from './ListItem/ListItemFavourites';
import './ListWrapper.css';

class HomepageListWrapper extends Component {

    state = {
        hitsRe: [],
        hitsBest: [],
        isLoading: false,
        error: null,
        favourites: JSON.parse(localStorage.getItem("favourites") || "[]")
    };


    componentDidMount() {
        this.setState({ isLoading: true });

        Promise.all([
            fetch('http://movies.seojoker.pl/api/movies/rewarded/'),
            fetch('http://movies.seojoker.pl/api/movies/best-ratings/')
        ])
            .then((response) => {

                return Promise.all(response.map(res => res.json()))

            })
            .then((response) => {

                const rewarded = response[0]
                const bestRatings = response[1]

                this.setState({
                    hitsRe: rewarded,
                    hitsBest: bestRatings,
                    isLoading: false,
                    error: null,
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    addToFav = (props) => {
    

        this.setState(state => {
            const favourites = [...state.favourites, props].reduce((acc, x) =>
            acc.concat(acc.find(y => y._id === x._id) ? [] : [x]), []);

            localStorage.setItem("favourites", JSON.stringify(favourites))

            return {
                favourites,
            };

        })

    }

    removeFromFav = (props) => {

        const { favourites } = this.state
        const index = favourites.findIndex(item => item._id === props._id)
        
        if (index !== -1) {
            favourites.splice(index, 1);
            this.setState({ favourites: favourites });
        }

        localStorage.setItem("favourites", JSON.stringify(favourites))

    }

    render() {
        const { hitsBest, hitsRe, isLoading, error, favourites } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        const rewardedList = hitsRe.slice(0, 6);
        const bestRatingsList = [...hitsBest, ...hitsRe];
        const bestRatingsListUniq = Array.from(new Set(bestRatingsList.map(s => s._id)))
            .map(id => {
                return {
                    _id: id,
                    Title: bestRatingsList.find(s => s._id === id).Title,
                    Poster: bestRatingsList.find(s => s._id === id).Poster,
                    Metascore: bestRatingsList.find(s => s._id === id).Metascore,
                }
            }).slice(0, 6);

        return (
            <div className="list-wrapper">
                <div className="list-wrapper__title">
                    <p className="list-wrapper__title--left">Favourites</p>
                </div>
                <div className="list-wrapper__favouriteList">
                    {favourites.map((data) => <ListItemFavourites {...data} key={data._id} removeFn={this.removeFromFav} />)}
                </div>
                <div className="list-wrapper__title">
                    <p className="list-wrapper__title--left">Rewarded</p>
                    <p className="list-wrapper__title--right"><Link to="/category/rewarded" >See All</Link></p>
                </div>
                <div className="list-wrapper__list">
                    {rewardedList.map((data) => <ListItem {...data} key={data._id} submitFn={this.addToFav} />)}
                </div>
                <div className="list-wrapper__title">
                    <p className="list-wrapper__title--left">Top Ratings</p>
                    <p className="list-wrapper__title--right"><Link to="/category/best-ratings">See All</Link></p>
                </div>
                <div className="list-wrapper__list">
                    {bestRatingsListUniq.map((data) => <ListItem {...data} key={data._id} submitFn={this.addToFav} />)}
                </div>
            </div>
        );
    }
}

export default HomepageListWrapper;