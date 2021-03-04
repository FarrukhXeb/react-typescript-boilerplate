import React, { ReactElement } from 'react';

import { Spinner } from 'react-bootstrap';

const FullScreenLoader = (): ReactElement => {
  return (
    <div className='min-vh-100 d-flex align-items-center justify-content-center'>
      <Spinner animation='grow' variant='primary' style={{ width: '6rem', height: '6rem' }} />
    </div>
  );
};
export default FullScreenLoader;
