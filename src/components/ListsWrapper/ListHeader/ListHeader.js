import React from 'react';
import PropTypes from 'prop-types';

const ListHeader = (props) => {


    const { id } = props.params
    const { url } = props

    const header = `${id.split("-").join(" ").toUpperCase()}`

    return (

        <div className="list-wrapper__title">
            <p className="list-wrapper__title--left">{url === `/search?${id}` ? `SEARCH: ${header}` : header}</p>
        </div>
    )
}

ListHeader.propTypes = {
    params: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
}



export default ListHeader;