/* jshint globalstrict: true */
/* globals window, Intl */
'use strict';

var React  = require('react');

// initialize i18n
if (! window.Intl) {
    window.Intl = require('intl');
}

var router = require('./router');
var flux   = require('./flux');
var i18n   = require('./intl/intl');

require('./media.js');

window.React = React;

React.initializeTouchEvents(true);

router.run(function (Handler, state) {
    var locales;

    if (typeof window.navigator.languages !== 'undefined') {
        locales = window.navigator.languages;
    } else if(typeof window.navigator.language !== 'undefined') {
        locales = [window.navigator.language];
    } else {
        locales = ['en-US'];
    }

    React.render(
        React.createElement(Handler, {flux : flux, locales : locales, messages : i18n.messages}),
        window.document.body
    );
});
