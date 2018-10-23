// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

const AdminInfoBanner = (props) => {
    return (
        <div className={'banner info'}>
            <div className='banner__content'>
                {props.children}
            </div>
        </div>
    );
};

AdminInfoBanner.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AdminInfoBanner;
