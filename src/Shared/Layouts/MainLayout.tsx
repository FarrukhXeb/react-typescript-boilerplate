import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <section>{children}</section>
        </div>
      </main>
    </>
  );
};

export default MainLayout;
MainLayout.propTypes = {
  children: PropTypes.element,
};

MainLayout.defaultProps = {
  children: null,
};
