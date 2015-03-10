/* jshint globalstrict: true */
'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName : 'HeartIcon',

    render : function()
    {
        return (
            <svg xmlns='http://www.w3.org/2000/svg' version='1.1' x='0px' y='0px' viewBox='0 0 25 25' enable-background='new 0 0 25 25'>
                <path d='M11.9,22.1l-8-7.7C3.8,14.3,1,11.7,1,8.6c0-3.8,2.3-6,6.1-6c2.3,0,4.4,1.8,5.4,2.8c1-1,3.1-2.8,5.4-2.8
                    c3.8,0,6.1,2.3,6.1,6c0,3.1-2.8,5.7-2.9,5.8l-8,7.7c-0.2,0.2-0.4,0.2-0.6,0.2S12.1,22.3,11.9,22.1z'/>
            </svg>
        );
    }
});
