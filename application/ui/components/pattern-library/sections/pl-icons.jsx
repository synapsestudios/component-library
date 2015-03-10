/* jshint globalstrict: true */
'use strict';

var React = require('react');
var Icon  = require('../../icon/icon');

module.exports = React.createClass({

    displayName : 'Icons',

    render : function()
    {
        return (
            <div className='pl-page'>
                <h1 className='pl-h1'>{'Icons'}</h1>
                <div className='pl-icons row'>
                    <span className='pl-icon small-4 medium-3'>
                        <Icon icon='back' />
                        <span className='pl-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'back'}
                        </span>
                    </span>
                    <span className='pl-icon small-4 medium-3'>
                        <Icon icon='cancel' />
                        <span className='pl-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'cancel'}
                        </span>
                    </span>
                    <span className='pl-icon small-4 medium-3'>
                        <Icon icon='caret' />
                        <span className='pl-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'caret'}
                        </span>
                    </span>
                    <span className='pl-icon small-4 medium-3'>
                        <Icon icon='save' />
                        <span className='pl-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'save'}
                        </span>
                    </span>
                    <span className='pl-icon small-4 medium-3'>
                        <Icon icon='search' />
                        <span className='pl-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'search'}
                        </span>
                    </span>
                    <span className='pl-icon small-4 medium-3'>
                        <Icon icon='trash' />
                        <span className='pl-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'trash'}
                        </span>
                    </span>
                    <span className='pl-icon small-4 medium-3'>
                        <Icon icon='heart' />
                        <span className='pl-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'heart'}
                        </span>
                    </span>
                    <span className='pl-icon small-4 medium-3'>
                        <Icon icon='group' />
                        <span className='pl-icon__name'>
                            <strong className='strong'>Icon: </strong>
                            {'group'}
                        </span>
                    </span>
                </div>
                <hr className='pl-hr' />
                <div className='row'>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{'Icon sizes'}</h2>
                        <Icon icon='caret' size='x-small' /> Extra Small
                        <br />
                        <br />
                        <Icon icon='caret' size='small' /> Small
                        <br />
                        <br />
                        <Icon icon='caret' size='medium' /> Medium
                        <br />
                        <br />
                        <Icon icon='caret' size='large' /> Large
                        <br />
                        <br />
                        <Icon icon='caret' size='x-large' /> Extra Large
                        <br />
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{'Icon rotation'}</h2>
                        <Icon icon='caret' size='small' rotate={0} /> 0deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={45} /> 45deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={90} /> 90deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={180} /> 180deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={270} /> 270deg Rotation
                        <br />
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{'Icon colors'}</h2>
                        <Icon icon='caret' size='small' color='black' /> Black fill
                        <br />
                        <br />
                        <Icon icon='caret' size='small' color='white' /> White fill
                        <br />
                        <br />
                        <Icon icon='caret' size='small' color='primary' /> Primary fill
                        <br />
                        <br />
                        <Icon icon='caret' size='small' color='secondary' /> Secondary fill
                        <br />
                        <br />
                        <Icon icon='caret' size='small' color='tertiary' /> Tertiary fill
                        <br />
                        <br />
                    </div>
                </div>

                <hr className='pl-hr' />
            </div>
        );
    }

});
