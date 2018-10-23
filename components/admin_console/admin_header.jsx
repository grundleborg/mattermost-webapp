// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

import FormattedMarkdownMessage from 'components/formatted_markdown_message';

const AdminHeader = (props) => {
    return (
        <h3 className='admin-console-header'>
            <FormattedMarkdownMessage
                id={props.id}
                defaultMessage={props.defaultMessage}
            />
        </h3>
    );
};

AdminHeader.propTypes = {
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
};

export default AdminHeader;
