/* jshint globalstrict: true */
'use strict';

var router = require('../router');

module.exports = {
    navigate : function(routeName, params)
    {
        router.transitionTo(routeName, params);
    }
};
