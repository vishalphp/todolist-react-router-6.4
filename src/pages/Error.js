import React from 'react'
import Container from 'react-bootstrap/Container';
import { useRouteError } from 'react-router-dom'

export default function Error() {

    const error = useRouteError();
    const errorData = error.data;

    let defultError = 'Something went wrong.';

    if(error.status === 500){
       defultError = JSON.parse(errorData).message;
    }

  return (
    <>
    <Container className='text-center'>
        <h1 className='fs-2 fw-bolder'>Error</h1>
        <p className='fs-3'>{defultError}</p>
    </Container>
    </>
  )
}
