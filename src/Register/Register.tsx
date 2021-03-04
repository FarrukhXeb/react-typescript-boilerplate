import React, { FC } from 'react';

import RegisterForm from './RegisterForm';
import style from './style.module.scss';

const Register: FC = () => {
  return (
    <div className='row no-gutters min-vh-100'>
      <div className='col-lg-6 col-md-12 offset-lg-6'>
        <div className={`d-flex flex-column px-5 justify-content-center h-100 ${style.wrapper}`}>
          <h1 className='mb-5'>Register</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};
export default Register;
