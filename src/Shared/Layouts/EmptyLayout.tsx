import React, { FC } from 'react';
import PropTypes from 'prop-types';

const EmptyLayout: FC = ({ children }) => {
  return <main>{children}</main>;
};

export default EmptyLayout;
EmptyLayout.propTypes = {
  children: PropTypes.element,
};

EmptyLayout.defaultProps = {
  children: null,
};
