import React, { FC } from 'react';
import PropTypes from 'prop-types';

const EmptyLayout: FC = ({ children }) => {
    return <section>{children}</section>;
};

export default EmptyLayout;
EmptyLayout.propTypes = {
    children: PropTypes.element,
};

EmptyLayout.defaultProps = {
    children: null,
};
