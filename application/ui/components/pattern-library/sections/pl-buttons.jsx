/* jshint globalstrict: true */
'use strict';

var React           = require('react');
var Button          = require('../../buttons/button');
var Icon            = require('../../icon/icon');

var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var IntlHelperMixin = require('../../../mixins/intlHelperMixin');

module.exports = React.createClass({

    displayName : 'Buttons',

    mixins: [ IntlMixin, IntlHelperMixin ],

    render : function()
    {
        return (
            <div className='pl-page'>
                <h1 className='pl-h1'>{this.t('sg.section.Buttons')}</h1>
                <div>
                    <Button>
                        <a>
                            {this.t('sg.buttons.a')}
                            <span> Span</span>
                        </a>
                    </Button>
                </div>
                <div>
                    <Button>
                        <button>
                            {this.t('sg.buttons.button')}
                        </button>
                    </Button>
                </div>
                <hr className='pl-hr' />
                <div className='row'>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{this.t('sg.buttons.sizes')}</h2>
                            <Button size='tiny'>
                                <a>
                                    {this.t('sg.buttons.tiny')}
                                </a>
                            </Button>
                            <br />
                            <Button size='small'>
                                <a>
                                    {this.t('sg.buttons.small')}
                                </a>
                            </Button>
                            <br />
                            <Button size='medium'>
                                <a>
                                    {this.t('sg.buttons.medium')}
                                </a>
                            </Button>
                            <br />
                            <Button size='large'>
                                <a>
                                    {this.t('sg.buttons.large')}
                                </a>
                            </Button>
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{this.t('sg.buttons.split-right')}</h2>
                        <Button size='tiny' split='right'>
                            <a>
                                {this.t('sg.buttons.split')}
                                <Icon icon='caret' color='white' size='x-small' />
                            </a>
                        </Button>
                        <br />
                        <Button size='small' split='right'>
                            <a>
                                {this.t('sg.buttons.split')}
                                <Icon icon='caret' color='white' size='x-small' />
                            </a>
                        </Button>
                        <br />
                        <Button size='medium' split='right'>
                            <a>
                                {this.t('sg.buttons.split')}
                                <Icon icon='caret' color='white' size='x-small' />
                            </a>
                        </Button>
                        <br />
                        <Button size='large' split='right'>
                            <a>
                                {this.t('sg.buttons.split')}
                                <Icon icon='caret' color='white' size='x-small' />
                            </a>
                        </Button>
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='pl-h2'>{this.t('sg.buttons.split-left')}</h2>
                        <Button size='tiny' split='left'>
                            <a>
                                {this.t('sg.buttons.split')}
                                <Icon icon='caret' color='white' size='x-small' rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='small' split='left'>
                            <a>
                                {this.t('sg.buttons.split')}
                                <Icon icon='caret' color='white' size='x-small' rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='medium' split='left'>
                            <a>
                                {this.t('sg.buttons.split')}
                                <Icon icon='caret' color='white' size='x-small' rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='large' split='left'>
                            <a>
                                {this.t('sg.buttons.split')}
                                <Icon icon='caret' color='white' size='x-small' rotate={180} />
                            </a>
                        </Button>
                        <br />
                    </div>
                </div>

                <hr className='pl-hr' />
                <h2 className='pl-h2'>{this.t('sg.buttons.themes')}</h2>
                <Button color='primary'>
                    <a>
                        {this.t('sg.buttons.primary-color')}
                    </a>
                </Button>
                <Button color='secondary'>
                    <a>
                        {this.t('sg.buttons.secondary-color')}
                    </a>
                </Button>
                <Button color='tertiary'>
                    <a>
                        {this.t('sg.buttons.tertiary-color')}
                    </a>
                </Button>
                <Button color='inherit'>
                    <a>
                        {this.t('sg.buttons.inherit')}
                    </a>
                </Button>
                <h2 className='pl-h2'>{this.t('sg.buttons.status')}</h2>
                <Button status='warning'>
                    <a>
                        {this.t('sg.buttons.warning')}
                    </a>
                </Button>
                <Button status='warning-alt'>
                    <a>
                        {this.t('sg.buttons.warning-alt')}
                    </a>
                </Button>
                <hr className='pl-hr' />
                <h2 className='pl-h2'>{this.t('sg.buttons.display-types')}</h2>
                <Button block={true}>
                    <a>
                        {this.t('sg.buttons.block-level')}
                    </a>
                </Button>
                <Button disabled={true}>
                    <a>
                        {this.t('sg.buttons.disabled')}
                    </a>
                </Button>
            </div>
        );
    }

});
