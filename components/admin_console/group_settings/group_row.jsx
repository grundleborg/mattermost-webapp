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
        nestingDepth: PropTypes.number.isRequired,
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
        let rowIndent = 25 * this.props.nestingDepth;
        if (!this.props.childGroups || this.props.childGroups.length < 1) {
            rowIndent += 23;
        }

        const style = {
            paddingLeft: rowIndent + 'px',
        };

        return (
            <div className='group'>
                <div
                    className='group-row'
                    style={style}
                >
                    {this.renderArrow()}
                    <GroupCheckbox value={this.state.checkboxState}/>
                    <span className='group-name'>
                        {this.props.name}
                    </span>
                    <span className='group-description'>
                        {this.props.primary_key}
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
                                    nestingDepth={this.props.nestingDepth + 1}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        );
    };
}
