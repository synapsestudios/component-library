/* jshint globalstrict: true */
'use strict';

var React = require('react');
var cx    = require('react/lib/cx');

var Back   = require('./icons/back');
var Cancel = require('./icons/cancel');
var Caret  = require('./icons/caret');
var Save   = require('./icons/save');
var Search = require('./icons/search');
var Trash  = require('./icons/trash');
var Heart  = require('./icons/heart');
var Group  = require('./icons/group');

module.exports = React.createClass({
    displayName : 'Icon',

    propTypes : {
        icon : React.PropTypes.oneOf([
            'back',
            'cancel',
            'caret',
            'save',
            'search',
            'trash',
            'heart',
            'group'
        ]),
        size : React.PropTypes.oneOf([
            'default',
            'x-large',
            'large',
            'medium',
            'small',
            'x-small'
        ]),
        rotate : React.PropTypes.oneOf([
            0,
            45,
            90,
            180,
            270
        ]),
        color : React.PropTypes.oneOf([
            'white',
            'black',
            'primary',
            'secondary',
            'tertiary'
        ])
    },

    getDefaultProps : function()
    {
        return {
            size   : 'default',
            rotate : 0,
            color  : 'black'
        };
    },

    render : function()
    {
        var Component,
            modifierClasses,
            classes,
            thisIcon      = this.props.icon,
            thisIconClass = 'icon--' + thisIcon;

        switch (thisIcon) {
            case 'back':
                Component = Back;
                break;
            case 'cancel':
                Component = Cancel;
                break;
            case 'caret':
                Component = Caret;
                break;
            case 'save':
                Component = Save;
                break;
            case 'search':
                Component = Search;
                break;
            case 'trash':
                Component = Trash;
                break;
            case 'heart':
                Component = Heart;
                break;
            case 'group':
                Component = Group;
                break;
        }

        modifierClasses = cx({
            'icon--x-large'    : this.props.size   === 'x-large',
            'icon--large'      : this.props.size   === 'large',
            'icon--medium'     : this.props.size   === 'medium',
            'icon--small'      : this.props.size   === 'small',
            'icon--x-small'    : this.props.size   === 'x-small',
            'icon--rotate-0'   : this.props.rotate === 0,
            'icon--rotate-45'  : this.props.rotate === 45,
            'icon--rotate-90'  : this.props.rotate === 90,
            'icon--rotate-180' : this.props.rotate === 180,
            'icon--rotate-270' : this.props.rotate === 270,
            'icon--white'      : this.props.color  === 'white',
            'icon--black'      : this.props.color  === 'black',
            'icon--primary'    : this.props.color  === 'primary',
            'icon--secondary'  : this.props.color  === 'secondary',
            'icon--tertiary'   : this.props.color  === 'tertiary'
        });

        classes = [
            'icon',
            thisIconClass,
            modifierClasses
        ].join(' ');

        return (
            <span className={classes}>
                <Component />
            </span>
        );
    }
});
