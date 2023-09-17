import React from 'react';
import './header.scss';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (

     <Container fluid className='bgblue'>
        <Container>
       <Stack direction="horizontal" gap={3}> 
                <Navbar.Brand className='p-2 text-white navlogo'>
                <NavLink className={({ isActive }) => (isActive ? 'active text-white' : 'inactive text-white')} to='/' end >
                    Logo
                    </NavLink>
                    </Navbar.Brand>
                <Nav className="p-2 ms-auto">
                    <NavLink className={({ isActive }) => (isActive ? 'active text-white px-2' : 'inactive text-white px-2')} to='/' end >Home</NavLink>
                    <div className="vr" />
                    <NavLink className={({ isActive }) => (isActive ? 'active text-white px-2' : 'inactive text-white px-2')} to='todolist'>Todo List</NavLink>
                    <div className="vr text-white" />
                    <NavLink className={({ isActive }) => (isActive ? 'active text-white px-2' : 'inactive text-white px-2')} to='addtodolist'>Add List</NavLink>
                    <div className="vr text-white" />
                    <NavLink className={({ isActive }) => (isActive ? 'active text-white px-2' : 'inactive text-white px-2')} to='addtodolistviafetcher'>Add List Via Fetcher</NavLink>
                    
                </Nav> 
        </Stack>
        </Container>
</Container>

           
  )
}
