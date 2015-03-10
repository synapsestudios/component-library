/* jshint globalstrict: true */
'use strict';

var React    = require('react');
var classSet = require('react/lib/cx');

module.exports = React.createClass({

    displayName : 'TabNav',

    propTypes : {
        title     : React.PropTypes.string.isRequired,
        tabId     : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]).isRequired,
        isCurrent : React.PropTypes.bool,
        onClick   : React.PropTypes.func,
        className : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            isCurrent : false,
            className : null
        };
    },

    onClick : function(id)
    {
        this.props.onClick(id);
    },

    render : function()
    {
        var classes,
            groupedClasses,
            linkClasses;

        classes = classSet({
            'tab-nav__item' : true
        });
        groupedClasses = [classes, this.props.className].join(' ');

        linkClasses = classSet({
            'tab-nav__item-link'          : true,
            'tab-nav__item-link--current' : this.props.isCurrent
        });

        return (
            <li className={groupedClasses} >
                <span
                    className = {linkClasses}
                    onClick   = {this.onClick.bind(this, this.props.tabId)} >
                    {this.props.title}
                </span>
            </li>
        );

    }

});
