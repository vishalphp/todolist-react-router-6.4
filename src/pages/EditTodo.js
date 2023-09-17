import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FormTodo from '../component/FormTodo';
import { useRouteLoaderData } from 'react-router-dom';

export default function EditTodo() {

    const data = useRouteLoaderData("todo-detail");

  return (
    <>
    <Container>
     <h1 className='text-center text-capitalize fw-normal fs-2 mb-5'>Edit Todo</h1>
    </Container>

    <FormTodo method='PATCH' todo={data} /> 
    </>
  )
}
