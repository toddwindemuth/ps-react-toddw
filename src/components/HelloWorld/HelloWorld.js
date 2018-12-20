import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({message}) {
    return <div>Hello {message}</div>
}

HelloWorld.propTypes = {
    /** Message to Display */
    message: PropTypes.string
};

HelloWorld.defaultProps = {
    message: 'World'
};

export default HelloWorld;