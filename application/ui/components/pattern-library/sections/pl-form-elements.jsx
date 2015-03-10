/* jshint globalstrict: true */
'use strict';

var React           = require('react');
var TextInput       = require('../../form/inputs/text');
var TextareaInput   = require('../../form/inputs/textarea');
var SelectInput     = require('../../form/inputs/select');
var RadioInput      = require('../../form/inputs/radio');
var RadioInputGroup = require('../../form/inputs/radio-group');
var CheckboxInput   = require('../../form/inputs/checkbox');
var CheckboxGroup   = require('../../form/inputs/checkbox-group');
var SwitchToggle    = require('../../form/inputs/switch');

var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var IntlHelperMixin = require('../../../mixins/intlHelperMixin');

module.exports = React.createClass({

    displayName : 'Form Elements',

    mixins: [IntlMixin, IntlHelperMixin],

    render : function()
    {
        var mockValidationObj1,
            mockValidationObj2,
            mockValidationObj3,
            mockSelectInputData,
            mockRadioGroupData,
            mockCheckboxGroupData,
            mockRadioGroupData2,
            mockCheckboxGroupData2;

        mockValidationObj1 = {
          status   : 'warning',
          messages : [this.t('sg.form-elements.validation-warning')]
        };

        mockValidationObj2 = {
          status   : 'error',
          messages : [this.t('sg.form-elements.validation-error')]
        };

        mockValidationObj3 = {
          status   : 'success',
          messages : [this.t('sg.form-elements.validation-success')]
        };

        mockSelectInputData = [
            {
                text  : this.t('sg.form-elements.option-1'),
                value : 'option-1'
            },
            {
                text  : this.t('sg.form-elements.option-2'),
                value : 'option-2'
            },
            {
                text  : this.t('sg.form-elements.option-3'),
                value : 'option-3'
            },
            {
                text  : this.t('sg.form-elements.option-4'),
                value : 'option-4'
            }
        ];

        mockRadioGroupData = [
            {
                text    : this.t('sg.form-elements.radio-option-1'),
                value   : 'radio-option-1',
                checked : true
            },
            {
                text    : this.t('sg.form-elements.radio-option-2'),
                value   : 'radio-option-2',
                checked : false
            },
            {
                text    : this.t('sg.form-elements.radio-option-3'),
                value   : 'radio-option-3',
                checked : false
            }
        ];

        mockCheckboxGroupData = [
            {
                text    : this.t('sg.form-elements.checkbox-option-1'),
                value   : 'checkbox-option-1',
                checked : true
            },
            {
                text    : this.t('sg.form-elements.checkbox-option-2'),
                value   : 'checkbox-option-2',
                checked : false
            },
            {
                text    : this.t('sg.form-elements.checkbox-option-3'),
                value   : 'checkbox-option-3',
                checked : false
            }
        ];

        mockRadioGroupData2 = [
            {
                text    : this.t('sg.form-elements.radio-option-1-2'),
                value   : 'radio-option-1-2',
                checked : true
            },
            {
                text    : this.t('sg.form-elements.radio-option-2-2'),
                value   : 'radio-option-2-2',
                checked : false
            },
            {
                text    : this.t('sg.form-elements.radio-option-3-2'),
                value   : 'radio-option-3-2',
                checked : false
            }
        ];

        mockCheckboxGroupData2 = [
            {
                text    : this.t('sg.form-elements.checkbox-option-1-2'),
                value   : 'checkbox-option-1-2',
                checked : true
            },
            {
                text    : this.t('sg.form-elements.checkbox-option-2-2'),
                value   : 'checkbox-option-2-2',
                checked : false
            },
            {
                text    : this.t('sg.form-elements.checkbox-option-3-2'),
                value   : 'checkbox-option-3-2',
                checked : false
            }
        ];

        return (
            <div className='pl-page'>
                <h1 className='pl-h1'>{'Form Elements'}</h1>
                <h2 className='pl-h2'>{'Text Input types'}</h2>
                <div className='row'>
                    <div className='medium-6 columns'>
                        <TextInput
                            label       = {this.t('sg.form-elements.basic-label')}
                            id          = 'text-input'
                            type        = 'text'
                            placeholder = {this.t('sg.form-elements.basic-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.email-label')}
                            id          = 'email-text-input'
                            type        = 'email'
                            placeholder = {this.t('sg.form-elements.email-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.pwd-label')}
                            id          = 'pwd-text-input'
                            type        = 'password'
                            placeholder = {this.t('sg.form-elements.pwd-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.search-label')}
                            id          = 'search-text-input'
                            type        = 'search'
                            placeholder = {this.t('sg.form-elements.search-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.url-label')}
                            id          = 'url-text-input'
                            type        = 'url'
                            placeholder = {this.t('sg.form-elements.url-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.phone-label')}
                            id          = 'phone-text-input'
                            type        = 'tel'
                            placeholder = {this.t('sg.form-elements.phone-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.number-label')}
                            id          = 'number-text-input'
                            type        = 'number'
                            placeholder = 'Enter your lucky number' />
                    </div>
                    <div className='medium-6 columns'>
                        <TextInput
                            label       = {this.t('sg.form-elements.date-label')}
                            id          = 'date-text-input'
                            type        = 'date'
                            placeholder = {this.t('sg.form-elements.date-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.datetime-label')}
                            id          = 'datetime-text-input'
                            type        = 'datetime'
                            placeholder = {this.t('sg.form-elements.datetime-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.datetime-local-label')}
                            id          = 'datetime-local-text-input'
                            type        = 'datetime-local'
                            placeholder = {this.t('sg.form-elements.datetime-local-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.month-label')}
                            id          = 'month-text-input'
                            type        = 'month'
                            placeholder = {this.t('sg.form-elements.month-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.week-label')}
                            id          = 'week-text-input'
                            type        = 'week'
                            placeholder = {this.t('sg.form-elements.week-placeholder')} />
                        <TextInput
                            label       = {this.t('sg.form-elements.day-label')}
                            id          = 'day-text-input'
                            type        = 'day'
                            placeholder = {this.t('sg.form-elements.day-placeholder')} />
                        <SelectInput
                            label   = {this.t('sg.form-elements.select-label')}
                            id      = 'select-input'
                            options = {mockSelectInputData} />
                    </div>
                </div>
                <div className='row'>
                    <div className='medium-6 columns'>
                        <TextareaInput
                        label       = 'Textarea:'
                        id          = 'textarea-input'
                        rows        = {10}
                        placeholder = 'Tell us a bit about yourself...' />
                    </div>
                </div>

                <h2 className='pl-h2'>{'Checkboxes & Radios'}</h2>
                <div className='row'>
                    <div className='medium-6 columns'>
                        <RadioInput
                            id      = 'radio-1-input'
                            name    = 'radio-input'
                            checked = {true}
                            value   = 'option 1'
                            label   = 'Single radio input' />
                        <RadioInputGroup
                            label   = 'Radio Group'
                            name    = 'radio-group-1'
                            options = {mockRadioGroupData} />
                    </div>
                    <div className='medium-6 columns'>
                        <CheckboxInput
                            id      = 'checkbox-single-1-input'
                            checked = {true}
                            value   = 'option 1'
                            label   = 'Single checkbox-single input' />
                        <CheckboxGroup
                            label   = 'Checkbox Group'
                            name    = 'checkbox-group-1'
                            options = {mockCheckboxGroupData} />
                    </div>
                </div>
                <div className='row'>
                    <div className=' medium-12 columns'>
                        <RadioInputGroup
                            label   = 'Inline Radio Group'
                            name    = 'radio-group-3'
                            inline  = {true}
                            options = {mockRadioGroupData2} />
                        <CheckboxGroup
                            label   = {this.t('sg.form-elements.checkbox-group-inline-label')}
                            name    = 'checkbox-group-3'
                            inline  = {true}
                            options = {mockCheckboxGroupData2} />
                    </div>
                </div>
                <div className='row'>
                    <div className='medium-4 columns'>
                        <SwitchToggle
                            id      = 'switch-1-input'
                            label   = 'Square Switch'
                            name    = 'single-switch-1'
                            value   = 'switch-1'
                            round   = {false}
                            checked = {true} />
                    </div>
                    <div className='medium-4 columns'>
                        <SwitchToggle
                            id      = 'switch-2-input'
                            label   = 'Rounded Switch'
                            name    = 'single-switch-2'
                            value   = 'switch-2'
                            round   = {true}
                            checked = {true} />
                    </div>
                </div>


                <h2 className='pl-h2'>{'Validation'}</h2>
                <div className='row'>
                    <div className='medium-6 columns'>
                        <TextInput
                            label             = {this.t('sg.form-elements.input-validation-warning-label')}
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = {this.t('sg.form-elements.input-validation-warning-placeholder')}
                            validationDisplay = 'default'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj1} />
                        <TextInput
                            label             = {this.t('sg.form-elements.input-validation-error-label')}
                            id                = 'error-validation-input'
                            type              = 'text'
                            placeholder       = {this.t('sg.form-elements.input-validation-error-placeholder')}
                            validationDisplay = 'default'
                            value             = 'horse'
                            validation        = {mockValidationObj2} />
                        <TextInput
                            label             = {this.t('sg.form-elements.input-validation-success-label')}
                            id                = 'success-validation-input'
                            type              = 'text'
                            placeholder       = {this.t('sg.form-elements.input-validation-success-placeholder')}
                            validationDisplay = 'default'
                            value             = 'anybody@anywhere.com'
                            validation        = {mockValidationObj3} />
                    </div>
                    <div className='medium-6 columns'>
                        <TextInput
                            label             = {this.t('sg.form-elements.input-validation-warning-pos-label')}
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = {this.t('sg.form-elements.input-validation-warning-pos-placeholder')}
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj1} />
                        <TextInput
                            label             = {this.t('sg.form-elements.input-validation-error-pos-label')}
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = {this.t('sg.form-elements.input-validation-error-pos-placeholder')}
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj2} />
                        <TextInput
                            label             = {this.t('sg.form-elements.input-validation-success-pos-label')}
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = {this.t('sg.form-elements.input-validation-success-pos-placeholder')}
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj3} />
                    </div>
                </div>

            </div>
        );
    }

});
