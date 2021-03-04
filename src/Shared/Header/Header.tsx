import React, { FC, ReactElement } from 'react';

import { Link } from 'react-router-dom';

import style from './style.module.scss';

const Header: FC = (): ReactElement => {
  return (
    <header className={style.wrapper}>
      <div className='container-fluid'>
        <div className={style.inner}>
          <div className={style.leftNav}>
            <h1>Logo</h1>
          </div>
          <div className={style.rightNav}>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
