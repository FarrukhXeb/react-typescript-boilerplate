import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

interface MainLayoutProps {
    children?: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <section>{children}</section>
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
