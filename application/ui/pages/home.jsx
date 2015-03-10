/* jshint globalstrict: true */
'use strict';

var React           = require('react');
var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var IntlHelperMixin = require('../mixins/intlHelperMixin');

var url   = require('../../media/images/raster/branding.png');

module.exports = React.createClass({

    displayName : 'HomeModule',

    mixins: [
        IntlMixin,
        IntlHelperMixin
    ],

    render : function() {
        var style1,
            style2,
            style3;

        style1 = {
            'maxWidth'    : '400px',
            'marginTop'   : '180px',
            'marginLeft'  : 'auto',
            'marginRight' : 'auto',
            'display'     : 'block'
        };

        style2 = {
            'textAlign'  : 'center',
            'marginTop'  : '40px',
            'fontSize'   : '80px',
            'fontWeight' : 'bold'
        };

        style3 = {
            'textAlign' : 'center',
            'fontSize'  : '20px'
        };

        return (
            <div className='typography'>
                <img style={style1} src={url} alt='Synapse Logo' />
                <h1 style={style2}>{this.t('home.title')}</h1>
                <h2 style={style3}>{this.t('home.content')}</h2>
            </div>
        );

    }

});
