import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';

const ListItemFavourites = (props) => {

    const { Poster, Title, Metascore} = props
    const ImageTag = Poster ? 'img' : 'div';

    return (<div className="listItem__wrapper">
        <div className="listItem__wrapper--image">
            <ImageTag src={Poster} alt={Title} onError={(e)=>{e.target.onerror = null; e.target.src="https://unsplash.it/300/300"}}/>
            <Button {...props}>REMOVE</Button>
        </div>
        <div className="listItem__wrapper--content">
            <p>{Title}</p>
            <p>Metascore: {Metascore}</p>
        </div>
    </div>)
}

ListItemFavourites.propTypes = {
    Metascore: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string,
    submitFn: PropTypes.func
}

ListItemFavourites.deafaultProps = {
    Poster: null
}

export default ListItemFavourites;