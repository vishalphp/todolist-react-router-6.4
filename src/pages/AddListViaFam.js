import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useFetcher } from 'react-router-dom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function AddListViaFam() {
    const fetcher = useFetcher();
    const {data, state} = fetcher;
    const [stateFetch, setStateFetch ] = useState("");

  useEffect(()=>{
    
    if(state === 'idle' && data?.message){
        setStateFetch(data?.message);
    }

  },[data, state]);


  return (
    <>
    <Container>
       <h1 className='text-center text-capitalize fw-normal fs-2 mb-5'>Add Todo Via Fetcher</h1>
   </Container>
   
       <Container> 
       <Row>
        <Col className='p-2'>
        {stateFetch}
         </Col>
    </Row> 
    <fetcher.Form method="post" action='/addtodolistviafetcher'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <textarea rows="3" name="description" id="exampleForm.ControlTextarea1" className="form-control" ></textarea>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date"  name="date" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </fetcher.Form>

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
  
   return {message: "todo submited successfully"};
  
  } 
