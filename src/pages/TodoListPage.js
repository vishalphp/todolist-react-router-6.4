import React, {useState} from 'react';
import { Link, useLoaderData, useSubmit, redirect } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
 

export default function TodoListPage() {

  const numbFormate = (n)=>{
    return n > 9 ? "" + n: "0" + n;
   }

  const data = useLoaderData();
  const curentdate = new Date();
  const date = curentdate.getDate();
  const month = curentdate.getMonth() + 1;
  const year = curentdate.getFullYear();
  const combDate = year+'-'+numbFormate(month)+'-'+numbFormate(date); //yyyy-mm-dd
  //console.log(data.todolists);
  const [allTodoListData, setAllTodoListData] = useState(data.todolists);
  //filter
  const [allTodoFilter, setAllTodoFilter] = useState(true);
  const [doneTodoFilter, setDoneTodoFilter] = useState(false);
  const [activeTodoFilter, setActiveTodoFilter] = useState(false);
  let filteredData='';

  const submit = useSubmit();
 
  const deleteTodo = (todo) =>{
  //console.log(todo.currentTarget.dataset.id);
   const processDelete = window.confirm("are you sure?"); 
   if(processDelete){
     submit({id: todo.currentTarget.dataset.id},{method:'DELETE'});
   }
 
  }

  const allTodoData =()=>{
    setAllTodoFilter(true);
    setDoneTodoFilter(false);
    setActiveTodoFilter(false);
  }

  const doneTodoData=()=>{
    setAllTodoFilter(false);
    setDoneTodoFilter(true);
    setActiveTodoFilter(false);
  }

  const activeTodoData =()=>{
    setAllTodoFilter(false);
    setDoneTodoFilter(false);
    setActiveTodoFilter(true);
  }

  filteredData = allTodoFilter ?
                         allTodoListData.filter(filterData=> filterData.date > '1971-01-01' ) 
                               : 
                                 doneTodoFilter ? 
                                          allTodoListData.filter(filterData=> filterData.date < combDate ) 
                                               : activeTodoFilter ?
                                               allTodoListData.filter(filterData=> filterData.date >= combDate ) : 'No todo list found.';
  
  //allTodoListData.filter(filterData=> filterData.date >= combDate );
   
  return (
    <>
    <h1 className='text-center text-capitalize fw-normal fs-2 mb-2'>Todo List</h1>
   
    <Container fluid>
      <Row className='row justify-content-around'>
        <Col className="col-md-6 offset-md-2"> 
        <ButtonGroup className="mb-2 ms-auto">
          <Button variant="secondary" className="px-5" onClick={allTodoData}>All</Button>
          <Button variant="secondary" className="px-5" onClick={doneTodoData}>Done</Button>
          <Button variant="secondary" className="px-5" onClick={activeTodoData}>Todo</Button>
        </ButtonGroup>
        </Col>
      </Row>
    </Container>

    <Container>
  
    <Stack gap={3} className='mt-5'>

   {
    filteredData.map((toList) =>  <div key={toList.id} className="px-2 py-3 border-gray rounded">
                  <Container>
                    <Row className='row justify-content-around text-capitalize'>
                      <Col className="col-md-8 fs-6 fw-normal"> 
                        <Link to={toList.id} className='anchortodo' >{toList.title}</Link>
                      </Col>
                      <Col className="col-md-2 fs-6"> 
                        {toList.date}
                      </Col>
                      <Col className="col-md-2 fs-6"> 
                          <Link to={`${toList.id}/edit`}><PencilSquare className='pencil'/></Link>
                          <div className="vr text-white px-2" />
                          <Trash3Fill onClick={deleteTodo} data-id={toList.id} className='remove'/>
                      </Col>
                    </Row>
                </Container>
              </div>
      )
   }

      
      
    </Stack>

    </Container>
  
   <br/>
    <Link to=".." relative='path'>Back</Link>
    </>
  )
}

export const loader = async() => {

  const response = await fetch('http://localhost:8080/todolist');

  if(!response.ok){
      throw new Response(JSON.stringify({message:'API Not working...'}),{status: 500});
  }else{
  return response;
  }

}

export const action = async({request, params}) =>{
const fmData = await request.formData();
const method = request.method;
const todoId = fmData.get("id");

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