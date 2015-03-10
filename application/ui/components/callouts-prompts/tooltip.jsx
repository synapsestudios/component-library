/* jshint globalstrict: true */
'use strict';

var React    = require('react');

module.exports = React.createClass({
    displayName : 'Tooltip',

    propTypes : {
        position : React.PropTypes.oneOf([
            'top',
            'right',
            'bottom',
            'left'
            ]).isRequired,
        message : React.PropTypes.string.isRequired
    },

    render : function()
    {
        return (
            <a
                data-tooltip  = {this.props.message}
                tabIndex      = '0'
                data-position = {this.props.position}>
                {this.props.children}
            </a>
        );
    }
});
