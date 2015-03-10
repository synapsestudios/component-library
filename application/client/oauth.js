/* jshint globalstrict: true */
'use strict';

var config      = require('../config');
var HttpGateway = require('synapse-common/http/auth-gateway');
var qs          = require('querystring');
var store       = require('store');

var OAuthClient = HttpGateway.extend({

    config : config.api,

    OAUTH_TOKEN_ENDPOINT : '/oauth/token',

    OAUTH_LOGOUT_ENDPOINT : '/oauth/logout',

    login : function(email, password)
    {
        return this.apiRequest(
            'POST',
            this.OAUTH_TOKEN_ENDPOINT,
            qs.stringify({
                username      : email,
                password      : password,
                grant_type    : 'password',
                client_id     : this.config.client_id,
                client_secret : this.config.client_secret
            })
        );
    },

    logout : function()
    {
        var token = store.get('token') || {};

        return this.apiRequest(
            'POST',
            this.OAUTH_LOGOUT_ENDPOINT,
            {
                refresh_token : token.refresh_token
            }
        );
    },

    refresh : function()
    {
        var token = store.get('token') || {};

        return this.apiRequest(
            'POST',
            this.OAUTH_TOKEN_ENDPOINT,
            qs.stringify({
                grant_type    : 'refresh_token',
                client_id     : this.config.client_id,
                refresh_token : token.refresh_token
            })
        );
    },

    getRequestOptions : function(method, path)
    {
        var options;

        options = HttpGateway.prototype.getRequestOptions.call(this, method, path);

        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';

        return options;
    }
});

module.exports = new OAuthClient();
