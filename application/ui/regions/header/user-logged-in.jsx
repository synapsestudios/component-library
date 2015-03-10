/* jshint globalstrict: true */
'use strict';

var React           = require('react');
var FluxMixin       = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;
var navigation      = require('react-router').Navigation;

module.exports = React.createClass({

    displayName : 'LoggedInHeaderSection',

    mixins : [navigation, FluxMixin, new StoreWatchMixin('UserStore')],

    getStateFromFlux : function()
    {
        var userStore;

        userStore = this.getFlux().store('UserStore');

        return {
            loggedIn : !! userStore.data.email,
            email    : userStore.data.email
        };
    },

    logout : function(event)
    {
        event.preventDefault();

        this.getFlux().actions.auth.logout();

        this.transitionTo('home');
    },

    render : function() {
        return (
            <div>
                <p>{'Logged in as '}<strong>{this.state.email}</strong>{'.'}</p>
                <p>
                    <a href='' onClick={this.logout}>{'Logout'}</a>
                </p>
            </div>
        );
    }
});
