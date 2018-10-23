// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

import GroupCheckbox from 'components/admin_console/group_settings/group_checkbox.jsx';

export default class GroupRow extends React.Component {
    static propTypes = {
        primary_key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        mattermost_group_id: PropTypes.string,
        childGroups: PropTypes.arrayOf(
            PropTypes.object
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            checkboxState: 'clear',
        };
    }

    toggleExpanded = () => {
        this.setState({
            expanded: !this.state.expanded,
        });
    };

    renderArrow = () => {
        if (!this.props.childGroups || this.props.childGroups.length < 1) {
            return null;
        }

        return (
            <div
                className={'fa fa-caret-right group-arrow ' + (this.state.expanded ? 'open' : '')}
                onClick={this.toggleExpanded}
            />
        );
    };

    render = () => {
        let classes = 'group-row';
        if (!this.props.childGroups || this.props.childGroups.length < 1) {
            classes += ' no-children';
        }

        return (
            <div className='group'>
                <div
                    className={classes}
                >
                    {this.renderArrow()}
                    <GroupCheckbox value={this.state.checkboxState}/>
                    <span className='group-name'>
                        {this.props.name}
                    </span>
                </div>
                {this.props.childGroups && (
                    <div className={'group-children ' + (this.state.expanded ? 'open' : '')}>
                        {this.props.childGroups.map((item, index) => {
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
                )}
            </div>
        );
    };
}
