/* jshint globalstrict: true, unused: false */
/* globals __ENVIRONMENT__ */
'use strict';

var React    = require('react'); // Used in compiled js, so required even though appears unused
var Router   = require('react-router');
var Route    = Router.Route;
var Redirect = Router.Redirect;

var SiteLayout         = require('./ui/site');
var HomePage           = require('./ui/pages/home');
var PatternLibraryPage = require('./ui/pages/pattern-library');
var NotFoundPage       = require('./ui/pages/404');
var FormattingPage     = require('./ui/pages/formatting');

var getEnvironmentDependentRoutes = function()
{
    var routes = [];

    if (__ENVIRONMENT__ !== 'production') {
        routes = routes.concat([
            <Route path='/formatting' name='formatting' handler={FormattingPage} key='formatting'/>,
            <Route path='/pattern-library/:section' name='pattern-library-section' handler={PatternLibraryPage} key='pattern-library-section'/>,
            <Redirect from='/pattern-library' name='pattern-library' key='pattern-library' to='/pattern-library/all' />
        ]);
    }

    return routes;
};

var routes = (
    <Route handler={SiteLayout}>
        <Route path='/' name='home' handler={HomePage}/>
        {getEnvironmentDependentRoutes()}
        <Route path='*' name='404' handler={NotFoundPage}/>
    </Route>
);

module.exports = Router.create({
    routes   : routes,
    location : Router.HistoryLocation
});
