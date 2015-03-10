/* jshint globalstrict: true */
'use strict';

var React    = require('react');
var classSet = require('react/lib/cx');

module.exports = React.createClass({

    displayName : 'TabNav',

    propTypes : {
        align     : React.PropTypes.oneOf([
            'right',
            'left',
            'center',
            null
        ]),
        className : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            align     : null,
            className : null
        };
    },

    render : function()
    {
        var classes,
            groupedClasses;

        classes = classSet({
            'tabs__nav'        : true,
            'tabs__nav--right' : this.props.align === 'right'
        });

        groupedClasses = [classes, this.props.className].join(' ');

        return (
            <div className={groupedClasses}>
                <ul className='tabs__nav__list tab-nav'>
                    {this.props.children}
                </ul>
            </div>
        );
    }

});
