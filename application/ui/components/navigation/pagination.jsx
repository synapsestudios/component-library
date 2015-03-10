/* jshint globalstrict: true */
'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'PaginationItem',

    render : function()
    {
        return (
            <div className='pager'>
                <ul className='pager__list'>
                    {this.props.children}
                </ul>
            </div>
        );
    }

});
