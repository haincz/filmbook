import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import {Link} from 'react-router-dom';

const ListItem = (props) => {

    const { Poster, Title, Metascore, _id} = props
    const ImageTag = Poster ? 'img' : 'div';

    return (<div className="listItem__wrapper">
        <div className="listItem__wrapper--image">
            <ImageTag src={Poster} alt={Title} onError={(e)=>{e.target.onerror = null; e.target.src="https://unsplash.it/300/300"}}/>
            <Button {...props}>ADD TO FAVOURITE</Button>
        </div>
        <div className="listItem__wrapper--content">
            <p><Link to={{ pathname: '/movie/' + _id,}}> {Title} </Link></p>
            <p>Metascore: {Metascore}</p>
        </div>
    </div>)
}

ListItem.propTypes = {
    Metascore: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Poster: PropTypes.string,
    _id: PropTypes.string.isRequired,
    submitFn: PropTypes.func.isRequired
}

ListItem.deafaultProps = {
    Poster: null
}



export default ListItem;