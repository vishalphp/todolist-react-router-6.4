import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { Form as Fm, redirect, useActionData } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function FormTodo({method, todo}) {

    const actionData = useActionData();

  return (
     <>
       <Container>
      { actionData ?
    <Row>
      <Col className='error p-2'>
      <ul>
        { Object.values(actionData?.errors).map(err => <li key={err}>{err}</li>)}
       </ul>
      </Col>
    </Row>
  :'' }
    <Fm method={method}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" defaultValue={todo?.todolist.title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <textarea rows="3" name="description" id="exampleForm.ControlTextarea1" className="form-control" defaultValue={todo?.todolist.description}></textarea>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date"  name="date" defaultValue={todo?.todolist.date}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Fm>

    </Container>
     </>
  )
}

export const action = async({request, params})=>{

    const data = await request.formData();
    const bodyData = {
      title: data.get('title'),
      description: data.get('description'),
      date: data.get('date')
    }


    let url = 'http://localhost:8080/todolist';

    if(request.method === 'PATCH'){
      url = 'http://localhost:8080/todolist/'+ params.todoId;
    }
 
  
    const response = await fetch( url,{
      method: request.method,
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(bodyData)
    });
  
    if(response.status === 422){
      return response;
    }
  
   if(!response.ok){
       throw new Response(JSON.stringify({message:'Todo not submitted...'}),{status: 500});
   } 
  
   return redirect("/todolist");
  
  } 