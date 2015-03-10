/* jshint globalstrict: true */
'use strict';

var React = require('react');
var RouterStateMixin = require('react-router').State;
var FluxMixin        = require('fluxxor').FluxMixin(React);
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedDate = IntlMixin.FormattedDate;
var FormattedMessage = IntlMixin.FormattedMessage;
var FormattedNumber = IntlMixin.FormattedNumber;
var FormattedTime = IntlMixin.FormattedTime;
var FormattedRelative = IntlMixin.FormattedRelative;
var IntlHelperMixin = require('../mixins/intlHelperMixin');

module.exports = React.createClass({
    displayName : 'Formatting',
    mixins      : [ IntlMixin, RouterStateMixin, FluxMixin, IntlHelperMixin ],

    render: function()
    {
        var bigNumber = 1234567;
        var price     = 33.57;
        var someDay   = new Date();
        var longAgo   = new Date('2015-01-01');
        return (
            <div className='formatting'>
                <h3>{this.t('fmt.Date')}</h3>
                <FormattedDate value={someDay} />
                <hr/>
                <h3>{this.t('fmt.Time')}</h3>
                <FormattedTime value={someDay} hour="numeric" minute="numeric" />
                <hr/>
                <h3>{this.t('fmt.Relative Time')}</h3>
                <FormattedRelative value={longAgo} />
                <hr/>
                <h3>{this.t('fmt.Number')}</h3>
                <FormattedNumber value={bigNumber} />
                <hr />
                <h3>{this.t('fmt.Currency')}</h3>
                <FormattedNumber value={price} style="currency" currency="JPY" />
                <hr />
                <h3>{this.t('fmt.Formatted Message')}</h3>
                <FormattedMessage
                    message={this.t('fmt.messages')}
                    name="Ted"
                    numMessages={3}
                />
            </div>
        );
    }
});
