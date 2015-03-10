/* jshint globalstrict: true */
'use strict';

var React    = require('react');
var classSet = require('react/lib/cx');

module.exports = React.createClass({
    displayName: 'Alerts',

    propTypes : {
        alertType : React.PropTypes.oneOf([
            'alert',
            'info',
            'warning',
            'success'
            ]).isRequired,
        message : React.PropTypes.string.isRequired
    },

    render : function()
    {
        var classes = classSet({
            'alert-box' : true,
            'alert'     : this.props.alertType === 'alert',
            'info'      : this.props.alertType === 'info',
            'warning'   : this.props.alertType === 'warning',
            'success'   : this.props.alertType === 'success'
        });

        return(
            <div className={classes}>
              {this.props.message}
              <a href="#" className="close">&times;</a>
            </div>
        );
    }
});
