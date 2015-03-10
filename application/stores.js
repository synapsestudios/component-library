/* jshint globalstrict: true */
'use strict';

var TokenStore = require('./store/token');
var UserStore  = require('./store/user');

module.exports = {
    TokenStore : new TokenStore(),
    UserStore  : new UserStore()
};
