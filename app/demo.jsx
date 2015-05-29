'use strict';

var React  = require('react');

module.exports = React.createClass({

    render : function()
    {
        var styles = {
            maxWidth : '720px',
            margin   : '0 auto',
            padding  : '20px'
        }

        return (
            <div style={styles}>
                <div>
                    <span>Component Library</span>
                </div>
            </div>
        );
    }

});
