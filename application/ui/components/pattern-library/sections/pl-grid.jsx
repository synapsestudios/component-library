/* jshint globalstrict: true */
'use strict';

var React = require('react');

module.exports = React.createClass ({

    displayName : 'Grid',

    render : function()
    {
        return (
            <div className='pl-page example'>
                <h1 className='pl-h1'>Grid</h1>
                <div className="row">.row</div>
                <div className="row">
                    <div className="large-2 columns">.large-2</div>
                    <div className="large-10 columns">.large-10.columns</div>
                </div>
                <div className="row">
                    <div className="large-3 columns">.large-3.columns</div>
                    <div className="large-9 columns">.large-9.columns</div>
                </div>
                <div className="row">
                    <div className="large-4 columns">.large-4.columns</div>
                    <div className="large-8 columns">.large-8.columns</div>
                </div>
                <div className="row">
                    <div className="large-5 columns">.large-5.columns</div>
                    <div className="large-7 columns">.large-7.columns</div>
                </div>
                <div className="row">
                    <div className="large-6 columns">.large-6.columns</div>
                    <div className="large-6 columns">.large-6.columns</div>
                </div>
                <div className="row">
                    <div className="large-7 columns">.large-7.columns</div>
                    <div className="large-5 columns">.large-5.columns</div>
                </div>
                <div className="row">
                    <div className="large-8 columns">.large-8.columns</div>
                    <div className="large-4 columns">.large-4.columns</div>
                </div>
                <div className="row">
                    <div className="large-9 columns">.large-9.columns</div>
                    <div className="large-3 columns">.large-3.columns</div>
                </div>
                <div className="row">
                    <div className="large-10 columns">.large-10.columns</div>
                    <div className="large-2 columns">.large-2</div>
                </div>
                <div className="row">
                    <div className="large-12 columns">.large-12.columns</div>
                </div>
                <div className="row">
                    <div className="large-6 columns">.large-6.columns</div>
                    <div className="large-6 columns">.large-6.columns</div>
                </div>
                <div className="row">
                    <div className="large-4 columns">.large-4.columns</div>
                    <div className="large-4 columns">.large-4.columns</div>
                    <div className="large-4 columns">.large-4.columns</div>
                </div>
                <div className="row">
                    <div className="large-3 columns">.large-3.columns</div>
                    <div className="large-3 columns">.large-3.columns</div>
                    <div className="large-3 columns">.large-3.columns</div>
                    <div className="large-3 columns">.large-3.columns</div>
                </div>
                <div className="row">
                    <div className="large-2 columns">.large-2.columns</div>
                    <div className="large-2 columns">.large-2.columns</div>
                    <div className="large-2 columns">.large-2.columns</div>
                    <div className="large-2 columns">.large-2.columns</div>
                    <div className="large-2 columns">.large-2.columns</div>
                    <div className="large-2 columns">.large-2.columns</div>
                </div>
            </div>
        );
    }
});
