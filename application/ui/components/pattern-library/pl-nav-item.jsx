/* jshint globalstrict: true */
'use strict';

var React     = require('react');
var FluxMixin = require('fluxxor').FluxMixin(React);
var classSet  = require('react/lib/cx');

var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var IntlHelperMixin = require('../../mixins/intlHelperMixin');

module.exports = React.createClass({
    displayName : 'PatternLibraryNavItem',

    mixins : [FluxMixin, IntlMixin, IntlHelperMixin],

    propTypes : {
        active      : React.PropTypes.bool,
        displayName : React.PropTypes.string,
        i18nPrefix  : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            active      : false,
            displayName : '',
            i18nPrefix  : ''
        };
    },

    onClick : function()
    {
        if (this.props.displayName) {
            this.getFlux().actions.route.navigate(
                'pattern-library-section',
                {section : this.props.displayName}
            );
        } else {
            this.getFlux().actions.route.navigate('pattern-library');
        }
    },

    render : function()
    {
        var linkClasses, display;

        linkClasses = classSet({
            'pl-nav__menu-link'             : true,
            'pl-nav__menu-link--is-current' : this.props.active
        });

        if (this.props.children) {
            display = this.props.children;
        } else if(this.props.i18nPrefix !== '') {
            display = this.t(this.props.i18nPrefix + this.props.displayName);
        } else {
            display = this.props.displayName;
        }
        return (
            <li className='pl-nav__menu-item'>
                <a className={linkClasses} onClick={this.onClick}>
                    {display}
                </a>
            </li>
        );
    }

});
