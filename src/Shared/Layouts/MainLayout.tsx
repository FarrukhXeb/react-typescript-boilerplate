import React, { FC } from 'react';

import PropTypes from 'prop-types';

import Header from '../Header';
import Sidebar from '../Sidebar';

const MainLayout: FC = ({ children }) => {
  return (
    <div className='d-lg-flex'>
      <Sidebar />
      <div className='app-body'>
        <Header />
        <main>
          <div className='container-fluid py-4'>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
MainLayout.propTypes = {
  children: PropTypes.element,
};

MainLayout.defaultProps = {
  children: null,
};
