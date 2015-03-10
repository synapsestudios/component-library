/* jshint globalstrict: true */
'use strict';

var React           = require('react');
var RouteHandler    = require('react-router').RouteHandler;
var FluxMixin       = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;
var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;

var LoggedIn        = require('./regions/header/user-logged-in');
var LoggedOut       = require('./regions/header/user-logged-out');

module.exports = React.createClass({

    displayName : 'SiteLayout',

    mixins : [ FluxMixin, new StoreWatchMixin('TokenStore'), IntlMixin ],

    getStateFromFlux : function()
    {
        var store = this.getFlux().store('TokenStore');

        return {
            loggedIn : store.loggedIn
        };
    },

    render : function() {
        var Component = (this.state.loggedIn) ? LoggedIn : LoggedOut;
        return (
            <div className='l--app-wrapper'>
                <div className='l--user'>
                    <Component user={this.state.user} />
                </div>
                <RouteHandler />
            </div>
        );
    }
});
