import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';


const ListHeader = (props) => {


    const { id } = props.params
    const { url } = props

    const header = `${id.split("-").join(" ").toUpperCase()}`

    return (

        <div className="list-wrapper__title">
            <MetaTags>
                <title>{header} - Filmsbook</title>
            </MetaTags>
            <p className="list-wrapper__title--left">{url === `/search?${id}` ? `SEARCH: ${header}` : header}</p>
        </div>
    )
}

ListHeader.propTypes = {
    params: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
}



export default ListHeader;