import React from 'react';
import { Spinner } from 'react-bootstrap';
// Animated Spinner Component
export default () => {
  return (
    <div className='d-flex justify-content-center m-5'>
      <Spinner animation='border' role='status'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  );
};
