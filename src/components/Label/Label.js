import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and blocking styling */
function Label({htmlFor, label, required}) {
    return (
        <label style={{display: 'block'}} htmlFor={htmlFor}>
            {label} {required && <span style={{color: 'red'}}> *</span>}
        </label>
    )
}

Label.PropTypes = {
    /** HTML ID for associated input */
    htmlFor: PropTypes.string.isRequired,

    /** Label text */
    label: PropTypes.string.isRequired,

    /** Display asterisk after label if true */
    required: PropTypes.bool
}

export default Label;