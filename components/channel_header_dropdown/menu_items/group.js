// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

const DropdownMenuItemGroup = ({children, showDivider = true}) => (
    <React.Fragment>
        {children}
        {children.length && children.reduce((result, child) => (child && child.props.children && child.props.children.length) || result, false) && showDivider && (
            <li className='divider'/>
        )}
    </React.Fragment>
);

DropdownMenuItemGroup.propTypes = {
    children: PropTypes.any,
    showDivider: PropTypes.bool,
};

export default DropdownMenuItemGroup;
