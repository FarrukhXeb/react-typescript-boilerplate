import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../routes';
import style from './style.module.scss';

const Header: FC = (): ReactElement => {
    return (
        <header className={style.wrapper}>
            <ul>
                {routes.map((route) => {
                    const { path, name } = route;
                    return (
                        <li key={name}>
                            <Link to={path}>{name}</Link>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
};
export default Header;
