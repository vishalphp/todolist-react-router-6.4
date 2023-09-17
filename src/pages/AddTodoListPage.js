import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import FormTodo from '../component/FormTodo';

export default function AddTodoListPage() {

  return (
    <>
     <Container>
        <h1 className='text-center text-capitalize fw-normal fs-2 mb-5'>Add Todo</h1>
    </Container>
    
    <FormTodo method="POST" />
   
    </>
  )
}
