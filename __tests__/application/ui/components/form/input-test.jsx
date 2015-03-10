/** @jsx React.DOM */
/* globals describe, it, beforeEach, sinon */
/* jshint expr: true, globalstrict: true */
'use strict';

var expect    = require('chai').expect;
var React     = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('Application\\UI\\Components\\Form\\Input', function() {
    var Input = require('../../../../../application/ui/components/form/input.jsx');

    var input, spy, tag;

    beforeEach(function() {
        spy = sinon.spy();
        tag = TestUtils.renderIntoDocument(
            <Input onChange={spy} value={'test'} />
        );

        input = TestUtils.findRenderedDOMComponentWithTag(tag, 'input');
    });

    it('sets default value', function() {
        expect(input.getDOMNode().value).to.equal('test');
    });

    it('calls onChange function', function() {
        TestUtils.Simulate.change(input);

        expect(spy.called);
    });
});
