/* jshint globalstrict: true */
'use strict';

var React            = require('react');
var RouterStateMixin = require('react-router').State;
var FluxMixin        = require('fluxxor').FluxMixin(React);
var PLSidebar        = require('../components/pattern-library/pl-sidebar');

var TypographySection   = require('../components/pattern-library/sections/pl-typography');
var ButtonSection       = require('../components/pattern-library/sections/pl-buttons');
var IconSection         = require('../components/pattern-library/sections/pl-icons');
var FormElementsSection = require('../components/pattern-library/sections/pl-form-elements');
var CalloutsPrompts     = require('../components/pattern-library/sections/pl-callouts-prompts');
var GridLayout          = require('../components/pattern-library/sections/pl-grid');
var Navigation          = require('../components/pattern-library/sections/pl-navigation');

require('../scss/pattern-library');

module.exports = React.createClass({

    displayName : 'Pattern Library',

    mixins : [FluxMixin, RouterStateMixin],

    getComponentConstructors : function()
    {
        return [
            TypographySection,
            ButtonSection,
            IconSection,
            FormElementsSection,
            CalloutsPrompts,
            GridLayout,
            Navigation
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
                <div className='pl-content'>
                    <div className='pl-content__header'>
                        <h1 className='pl-content__title'>{'Pattern Library'}</h1>
                    </div>
                    {this.renderSections()}
                </div>
            </div>
        );
    }

});
