import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({active,onclick,children}) => {

    if (active) {
        return(<span className='active'>{children}</span>)
    }

    return (
        <button className='filter' onclick={(e)=>{
            e.preventDefault()
            onclick()
        }}>
            {children}
        </button>
    );
};


Filter.propTypes = {
active: PropTypes.bool.isRequired,
onclick: PropTypes.func.isRequired,
children: PropTypes.node.isRequired
};


export default Filter;
