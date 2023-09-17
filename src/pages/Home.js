import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Figure from 'react-bootstrap/Figure';
import To_Do_List_image from '../assets/To_Do_List.webp'; 

const Home =()=>{

    const navigate = useNavigate();

    const RedirectToddolist=()=>{
        navigate("/todolist");
    }

return(
    <>
    <h1>Home</h1>
    
    <Figure>
      <Figure.Image 
        alt="to do list"
        src={To_Do_List_image}
      />
    </Figure>

    
    <Link to="/todolist">Todo List</Link>
    <br/><br/>
    <Button variant="secondary" onClick={RedirectToddolist}>Todo List</Button>
    </>
);

}

export default Home;