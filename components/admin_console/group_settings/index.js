// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import GroupSettings from './group_settings.jsx';

function mapStateToProps(state) {
    const ldapGroups = [
        {
            primary_key: 'cfcc7d24-628b-1038-8439-eb56a8b15249',
            name: 'executive',
            mattermost_group_id: null,
            children: [
                {
                    primary_key: 'cfcd1d56-628b-1038-843a-eb56a8b15249',
                    name: 'board',
                    mattermost_group_id: 'uzj59auocbfxpmi5t4sdace4nc',
                    children: null,
                },
            ],
        },
        {
            primary_key: 'cfcd72a6-628b-1038-843b-eb56a8b15249',
            name: 'tgroup',
            mattermost_group_id: null,
            children: null,
        },
        {
            primary_key: 'cfce5a86-628b-1038-843c-eb56a8b15249',
            name: 'developers',
            mattermost_group_id: null,
            children: [
                {
                    primary_key: 'cfcf171e-628b-1038-843d-eb56a8b15249',
                    name: 'team-one',
                    mattermost_group_id: null,
                    children: null,
                },
                {
                    primary_key: 'cfcfdcc6-628b-1038-843e-eb56a8b15249',
                    name: 'team-two',
                    mattermost_group_id: null,
                    children: [
                        {
                            primary_key: 'asdfg',
                            name: 'another-sub-team',
                            mattermost_group_id: null,
                            children: null,
                        },
                    ],
                },
            ],
        },
        {
            primary_key: 'cfd065c4-628b-1038-843f-eb56a8b15249',
            name: 'qa',
            mattermost_group_id: null,
            children: null,
        },
    ];

    return {
        ldapGroups,
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupSettings);
