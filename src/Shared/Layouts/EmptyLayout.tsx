import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface EmptyLayoutProps {
    children?: React.ReactNode;
}

const EmptyLayout: FC<EmptyLayoutProps> = ({ children }) => {
    return <section>{children}</section>;
};

export default EmptyLayout;
EmptyLayout.propTypes = {
    children: PropTypes.element,
};

EmptyLayout.defaultProps = {
    children: null,
};
