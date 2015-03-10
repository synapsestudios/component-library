/* jshint globalstrict: true */
'use strict';

var React    = require('react');
var classSet = require('react/lib/cx');

module.exports = React.createClass({

    displayName : 'Pagination',

    propTypes : {
        current   : React.PropTypes.bool,
        disabled  : React.PropTypes.bool,
        className : React.PropTypes.string,
        onClick   : React.PropTypes.func
    },

    getDefaultProps : function()
    {
        return {
            current   : false,
            disabled  : false,
            className : null,
            onClick   : function() {}
        };
    },

    render : function()
    {
        var classes,
            groupedClasses;

        classes = classSet({
            'pager__item'           : true,
            'pager__item--current'  : this.props.current,
            'pager__item--disabled' : this.props.disabled
        });

        groupedClasses = [this.props.className, classes].join(' ');

        return (
            <li className={groupedClasses} onClick={this.props.onClick}>
                <span className='pager__link'>
                    {this.props.children}
                </span>
            </li>
        );
    }

});
