/* jshint globalstrict: true */
'use strict';

var React          = require('react');
var Pagination     = require('../../navigation/pagination');
var PaginationItem = require('../../navigation/pagination-item');
var TabNav         = require('../../tabs/tab-nav');
var TabNavItem     = require('../../tabs/tab-nav-item');

module.exports = React.createClass({
    displayName : 'Navigation',

    getInitialState : function()
    {
        return {
            activeTab : 'tab-1'
        };
    },

    handleTabClick : function(id)
    {
        this.setState({activeTab : id});
    },

    render : function()
    {
        return (
            <div className='pl-page'>
                <h1 className='pl-h1'>{'Navigation'}</h1>
                <h2 className='pl-h2'>{'Tab Navigation'}</h2>
                <div className='row'>
                    <TabNav align='left'>
                        <TabNavItem
                            title     = 'Tab 1'
                            isCurrent = {this.state.activeTab === 'tab-1'}
                            tabId     = {'tab-1'}
                            onClick   = {this.handleTabClick} />
                        <TabNavItem
                            title     = 'Tab 2'
                            isCurrent = {this.state.activeTab === 'tab-2'}
                            tabId     = {'tab-2'}
                            onClick   = {this.handleTabClick} />
                        <TabNavItem
                            title     = 'Tab 3'
                            isCurrent = {this.state.activeTab === 'tab-3'}
                            tabId     = {'tab-3'}
                            onClick   = {this.handleTabClick} />
                        <TabNavItem
                            title     = 'Tab 4'
                            isCurrent = {this.state.activeTab === 'tab-4'}
                            tabId     = {'tab-4'}
                            onClick   = {this.handleTabClick} />
                    </TabNav>
                </div>
                <h2 className='pl-h2'>{'Pagination'}</h2>
                <div className='row'>
                    <Pagination>
                        <PaginationItem disabled={true}>
                            {'First'}
                        </PaginationItem>
                        <PaginationItem>
                            {'Previous'}
                        </PaginationItem>
                        <PaginationItem current={true}>
                            {'1'}
                        </PaginationItem>
                        <PaginationItem>
                            {'2'}
                        </PaginationItem>
                        <PaginationItem>
                            {'3'}
                        </PaginationItem>
                        <PaginationItem>
                            {'4'}
                        </PaginationItem>
                        <PaginationItem>
                            {'5'}
                        </PaginationItem>
                        <PaginationItem disabled={true}>
                            {'...'}
                        </PaginationItem>
                        <PaginationItem>
                            {'Next'}
                        </PaginationItem>
                        <PaginationItem>
                            {'Last'}
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        );
    }
});
