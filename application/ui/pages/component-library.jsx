/* jshint globalstrict: true */
'use strict';

var React            = require('react');
var RouterStateMixin = require('react-router').State;
var FluxMixin        = require('fluxxor').FluxMixin(React);
var PLSidebar        = require('../components/component-library/cl-sidebar');

var Dropdown   = require('../components/component-library/sections/cl-dropdown');

require('../scss/component-library');

module.exports = React.createClass({

    displayName : 'Component Library',

    mixins : [FluxMixin, RouterStateMixin],

    getComponentConstructors : function()
    {
        return [
            Dropdown,
        ];
    },

    renderSections : function()
    {
        var section = this.getParams().section;

        return this.getComponentConstructors().map(function(Page) {
            if (section === 'all' || section === Page.displayName) {
                return <Page key={Page.displayName} />;
            }
        });
    },

    render : function()
    {
        return (
            <div className='pl'>
                <PLSidebar sections={this.getComponentConstructors()} activeSection={this.getParams().section}/>
                <div className='cl-content'>
                    <div className='cl-content__header'>
                        <h1 className='cl-content__title'>{'Pattern Library'}</h1>
                    </div>
                    {this.renderSections()}
                </div>
            </div>
        );
    }

});
