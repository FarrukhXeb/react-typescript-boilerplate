import React from 'react';

import style from './style.module.scss';

const Sidebar = (): JSX.Element => {
  return (
    <aside className={`${style.wrapper} px-4 d-sm-none d-md-none d-none d-lg-block`}>
      <h2 className='m-0'>Side Bar</h2>
    </aside>
  );
};
export default Sidebar;
