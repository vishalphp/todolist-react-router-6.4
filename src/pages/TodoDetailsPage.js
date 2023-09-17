import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';
import { useParams, Link, useRouteLoaderData, useSubmit, redirect } from 'react-router-dom';

export default function TodoDetailsPage() {

  const data = useRouteLoaderData('todo-detail');
  //console.log(data.todolist); 
  const submit = useSubmit();
 
 const deleteTodo = () =>{
  const processDelete = window.confirm("are you sure?"); 
  if(processDelete){
    submit(null,{method:'DELETE'});
  }

 }

  return (
    <>
    <Container>
        <h1 className='text-center text-capitalize fw-normal fs-2 mb-5'>Todo Details</h1>
    </Container>
    <Container className='border-gray border-gray rounded'>
      <Row className='text-capitalize fw-normal px-2 py-3 bglightgreen'>
        <Col>
          Title: {data?.todolist.title}
        </Col>
      </Row>
      <Row  className='text-capitalize fw-normal px-2 py-3'>
        <Col>
          Description: {data?.todolist.description}
        </Col>
      </Row>
      <Row  className='text-capitalize fw-normal px-2 py-3'>
        <Col>
         <Link to="edit" className='makebtn px-4 py-2 rounded text-center text-capitalize bglightgreen text-black me-2'>Edit</Link>
         <Button onClick={deleteTodo} className='makebtn pedd rounded text-center text-capitalize delete text-white'>Delete</Button>
        </Col>
      </Row>
    </Container>
    <br/>
    <Link to=".." relative='path'>Back</Link>
    </>
  )
}

export const loader = async({request, params})=>{
 //console.log(params);
 const todoID = params?.todoId;

 const response = await fetch('http://localhost:8080/todolist/'+todoID);

 if(!response.ok){
     throw new Response(JSON.stringify({message:'Todo record not found...'}),{status: 500});
 }else{
 return response;
 }

}

export const action = async({request, params}) =>{

  const method = request?.method;
  const todoId = params?.todoId;

  const response = await fetch('http://localhost:8080/todolist/'+todoId ,{
    method: method,
    headers:{
      'Content-Type': 'application/json'
    }
  });

  if(!response.ok){
      throw new Response(JSON.stringify({message:'Todo not deleted.'}),{status: 500});
  }else{
  return redirect("/todolist/");
  }

}