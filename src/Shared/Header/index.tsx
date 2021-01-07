import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
// import routes from '../../routes';
import style from './style.module.scss';

const Header: FC = (): ReactElement => {
    return (
        <header className={style.wrapper}>
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
        </header>
    );
};
export default Header;
