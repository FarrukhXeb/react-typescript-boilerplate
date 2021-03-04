import React, { FC } from 'react';

import PropTypes from 'prop-types';

const EmptyLayout: FC = ({ children }) => {
  return (
    <div className='app-body'>
      <main>{children}</main>
    </div>
  );
};

export default EmptyLayout;
EmptyLayout.propTypes = {
  children: PropTypes.element,
};

EmptyLayout.defaultProps = {
  children: null,
};
