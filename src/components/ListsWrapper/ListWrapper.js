import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';
import ListItemFavourites from './ListItem/ListItemFavourites';
import ListHeader from './ListHeader/ListHeader'
import './ListWrapper.css';

class ListWrapper extends Component {
    

    state = {
        list: [],
        isLoading: false,
        error: null,
        favourites: JSON.parse(localStorage.getItem("favourites") || "[]")
    };

    componentDidMount() {

        const { id } = this.props.match.params

        if (this.props.match.url === `/search?${id}`) {
            console.log("working")
        } else {


            fetch(`http://movies.seojoker.pl/api/movies/${id}/`)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            list: result,
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
    }

    addToFav = (movie) => {


        this.setState(state => {
            const favourites = [...state.favourites, movie].reduce((acc, x) =>
                acc.concat(acc.find(y => y._id === x._id) ? [] : [x]), []);

            localStorage.setItem("favourites", JSON.stringify(favourites))

            return {
                favourites,
            };

        })

    }

    removeFromFav = (movie) => {

        const { favourites } = this.state
        const index = favourites.findIndex(item => item._id === movie._id)

        if (index !== -1) {
            favourites.splice(index, 1);
            this.setState({ favourites: favourites });
        }

        localStorage.setItem("favourites", JSON.stringify(favourites))

    }

    render() {
        const { list, isLoading, error, favourites } = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div className="list-wrapper">
                <div className="list-wrapper__title">
                    <p className="list-wrapper__title--left">Favourites</p>
                </div>
                <div className="list-wrapper__favouriteList">
                    {favourites.map((data) => <ListItemFavourites {...data} key={data._id} removeFn={this.removeFromFav} />)}
                </div>
                <ListHeader {...this.props.match} />
                <div className="list-wrapper__category">
                    {list.map((data) => <ListItem {...data} key={data._id} submitFn={this.addToFav} />)}
                </div>
            </div>
        );
    }
}

export default ListWrapper;