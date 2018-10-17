// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import FormattedMarkdownMessage from 'components/formatted_markdown_message';
import GroupRow from 'components/admin_console/group_settings/group_row.jsx'

export default class GroupSettings extends React.PureComponent {
    static propTypes = {
        ldapGroups: PropTypes.arrayOf(PropTypes.object),
    };

    static defaultProps = {
        ldapGroups: [],
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    renderLdapGroupsPanel = () => {
        return (
            <div
                className={'permissions-block'}
                id='ldap_groups'
            >
                <div
                    className='header'
                >
                    <div>
                        <h3>
                            <FormattedMessage
                                id='admin.groups.ldapGroupsTitle'
                                defaultMessage='AD/LDAP Groups'
                            />
                        </h3>
                        <span>
                            <FormattedMessage
                                id='admin.groups.ldapGroupsDescription'
                                defaultMessage='Link and configure groups from your AD/LDAP to Mattermost'
                            />
                        </span>
                    </div>
                </div>
                <div className='permissions-tree'>
                    <div className='permissions-tree--header'>
                        <div className='permission-name'>
                            <FormattedMessage
                                id='admin.groups.groupsTree.nameHeader'
                                defaultMessage='Name'
                            />
                        </div>
                        <div className='permission-description'>
                            <FormattedMessage
                                id='admin.permissions.groupsTree.mappingHeader'
                                defaultMessage='AD/LDAP Mapping'
                            />
                        </div>
                    </div>
                    <div className='permissions-tree--body'>
                        {this.props.ldapGroups.map(function(item, index) {
                            return (
                                <GroupRow
                                    key={index}
                                    primary_key={item.primary_key}
                                    name={item.name}
                                    mattermost_group_id={item.mattermost_group_id}
                                    childGroups={item.children}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    render = () => {
        return (
            <div className='wrapper--fixed'>
                <h3 className='admin-console-header'>
                    <FormattedMessage
                        id='admin.groups.groupsPageTitle'
                        defaultMessage='Groups'
                    />
                </h3>

                <div className={'banner info'}>
                    <div className='banner__content'>
                        <span>
                            <FormattedMarkdownMessage
                                id='admin.groups.introBanner'
                                defaultMessage='Lorem Ipsum [documentation](!https://about.mattermost.com).'
                            />
                        </span>
                    </div>
                </div>

                {this.renderLdapGroupsPanel()}

            </div>
        );
    };
}
