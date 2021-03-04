import React, { FC } from 'react';

import { Formik } from 'formik';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { object, string, ref } from 'yup';

interface IRegisterInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const initialValues: IRegisterInput = {
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = object().shape({
  email: string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: string().min(8, '*Password must contain more then 8').required('*Password is required'),
  confirmPassword: string().oneOf([ref('password'), null], '*Passwords must match'),
});

const RegisterForm: FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          resetForm();
          setSubmitting(false);
        }, 500);
      }}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
        return (
          <Form className='w-100' onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                type='text'
                name='email'
                placeholder='Email'
                value={values.email}
                className={touched.email && errors.email ? 'error' : ''}
              />
              {touched.email && errors.email ? (
                <div className='error-message'>{errors.email}</div>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                type='password'
                name='password'
                placeholder='Password'
                className={touched.password && errors.password ? 'error' : ''}
              />
              {touched.password && errors.password ? (
                <div className='error-message'>{errors.password}</div>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                className={touched.confirmPassword && errors.confirmPassword ? 'error' : ''}
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <div className='error-message'>{errors.confirmPassword}</div>
              ) : null}
            </Form.Group>
            <Button className='w-50' disabled={isSubmitting} variant='primary' type='submit'>
              Submit
            </Button>
            <Form.Group className='mt-5'>
              <Link to='/login'>Already Registered? Click here</Link>
            </Form.Group>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegisterForm;
