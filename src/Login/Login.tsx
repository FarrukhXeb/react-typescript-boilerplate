import React, { FC } from 'react';

import LoginForm from './LoginForm';
import style from './style.module.scss';

const Login: FC = () => {
  return (
    <div className='row no-gutters min-vh-100'>
      <div className='col-lg-6 col-md-12 offset-lg-6'>
        <div className={`d-flex flex-column px-5 justify-content-center h-100 ${style.wrapper}`}>
          <h1 className='mb-5'>Login</h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
export default Login;
