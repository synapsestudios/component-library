/* jshint globalstrict: true */
'use strict';

var React   = require('react');
var Tooltip = require('../../callouts-prompts/tooltip');
var Alert   = require('../../callouts-prompts/alerts');

module.exports = React.createClass({

    displayName : 'Callouts & Prompts',

    render : function()
    {
        return (
            <div className='pl-page'>
                <h1 className='pl-h1'>Callouts & Prompts</h1>
                <h2 className='pl-h2'>Tooltips</h2>
                    <div className='row'>
                        <div className='medium-3 columns'>
                            <Tooltip message='Tooltip left' position='left'>
                                Example Tooltip Left
                            </Tooltip>
                        </div>
                        <div className='medium-3 columns'>
                            <Tooltip message='Tooltip Top' position='top'>
                                Example Tooltip Top
                            </Tooltip>
                        </div>
                        <div className='medium-3 columns'>
                            <Tooltip message='Tooltip Bottom' position='bottom'>
                                Example Tooltip Bottom
                            </Tooltip>
                        </div>
                        <div className='medium-3 columns'>
                            <Tooltip message='Tooltip Right' position='right'>
                                Example Tooltip Right
                            </Tooltip>
                        </div>
                    </div>
                <h2 className='pl-h2'>Alerts</h2>
                    <div className='row'>
                        <div className="small-12">

                            <Alert message='This is an alert indicating an alert' alertType='alert'>
                            </Alert>

                            <Alert message='This is an alert indicating information' alertType='info'>
                            </Alert>

                            <Alert message='This is an alert indicating a warning' alertType='warning'>
                            </Alert>

                            <Alert message='This is an alert indicating a success' alertType='success'>
                            </Alert>

                        </div>
                    </div>
            </div>
        );
    }

});
