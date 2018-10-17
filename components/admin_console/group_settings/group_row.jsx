// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import FormattedMarkdownMessage from 'components/formatted_markdown_message';

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
            expanded: true,
        };
    }

    render = () => {
        return (
            <div className='permission-group'>
                <div
                    className={'permission-group-row'}
                >
                    <span className='permission-name'>
                        {this.props.name}
                    </span>
                </div>
            </div>
        );
    };
}
