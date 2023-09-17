import React from 'react'
import Header from '../ui/Header'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/esm/Container'
import Footer from '../ui/Footer'

export default function Layout() {
  return (
    <>
     <Header />
     <Container className='mt-2'>
       <Outlet />
     </Container>
     <Footer />
    </>
  )
}
