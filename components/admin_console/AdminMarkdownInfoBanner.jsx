// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

import AdminInfoBanner from 'components/admin_console/AdminInfoBanner.jsx';
import FormattedMarkdownMessage from 'components/formatted_markdown_message';

const AdminMarkdownInfoBanner = (props) => {
    return (
        <AdminInfoBanner>
            <FormattedMarkdownMessage
                id={props.id}
                defaultMessage={props.defaultMessage}
            />
        </AdminInfoBanner>
    );
};

AdminMarkdownInfoBanner.propTypes = {
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
};

export default AdminMarkdownInfoBanner;
