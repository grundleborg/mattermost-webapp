// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import GroupRow from 'components/admin_console/group_settings/group_row.jsx';
import AdminMarkdownInfoBanner from 'components/admin_console/AdminMarkdownInfoBanner.jsx';
import AdminHeader from 'components/admin_console/admin_header.jsx';
import AdminPanel from 'components/admin_console/admin_panel.jsx';

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
            <AdminPanel
                id='ldap_groups'
                titleId='admin.groups.ldapGroupsTitle'
                titleDefaultMessage='AD/LDAP Groups'
                subtitleId='admin.groups.ldapGroupsDescription'
                subtitleDefaultMessage='Link and configure groups from your AD/LDAP to Mattermost. Please ensure you have configured a [group filter](#).'
            >
                <div className='groups-tree'>
                    <div className='groups-tree--header'>
                        <div className='group-name'>
                            <FormattedMessage
                                id='admin.groups.groupsTree.nameHeader'
                                defaultMessage='Name'
                            />
                        </div>
                        <div className='group-description'>
                            <FormattedMessage
                                id='admin.permissions.groupsTree.mappingHeader'
                                defaultMessage='AD/LDAP Mapping'
                            />
                        </div>
                    </div>
                    <div className='groups-tree--body group-children'>
                        {this.props.ldapGroups.map((item, index) => {
                            return (
                                <GroupRow
                                    key={index}
                                    primary_key={item.primary_key}
                                    name={item.name}
                                    mattermost_group_id={item.mattermost_group_id}
                                    childGroups={item.children}
                                    nestingDepth={0}
                                />
                            );
                        })}
                    </div>
                </div>
            </AdminPanel>
        );
    };

    render = () => {
        return (
            <div className='wrapper--fixed'>
                <AdminHeader
                    id='admin.groups.groupsPageTitle'
                    defaultMessage='Groups'
                />

                <AdminMarkdownInfoBanner
                    id='admin.groups.introBanner'
                    defaultMessage={'Groups are a way to organize users and apply actions to all users within that group.\nFor more information on Groups, please see [documentation](!https://about.mattermost.com).'}
                />

                {this.renderLdapGroupsPanel()}

            </div>
        );
    };
}
