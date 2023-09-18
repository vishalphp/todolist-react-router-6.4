import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

export default function Document() {
  return (
    <>
     <Container>
        <Row>
            <Col>
              <h2>Title: </h2>
            </Col>
        </Row>
        
        <Row>
            <Col>
              <p>React Router 6.4 Based Todo List</p>
            </Col>
        </Row>
        <Row>
            <Col>
              <h2>Project Goals and Objectives:</h2>
            </Col>
        </Row>
        <Row>
            <Col>
              <p>The project is designed and developed by React router 6.4 which is the latest routing approach of React router. The project covers the all necessary hooks to create a web app with the listing, editing, deleting, viewing, and same-page submit form features.</p>
              <p>The main goal of the project is to learn new things that may not covered while working in a product-based company. The project will enhance the knowledge in react.</p>
            </Col>
        </Row>
        <Row>
            <Col>
              <h2>Project Scope:</h2>
            </Col>
        </Row>
        <Row>
            <Col>
            <ol>
                <li> The Common section covers the navigation, logo, and footer, which is the root layout for all pages.</li>
                <li>The UI/UX was designed with the help of sass and bootstrap5.</li>
                <li>Home page cover image & url changed using webpack 5 on build run and link to connect with listing via button click.</li>
                <li>The List page has a list of todo that cover fetch, userouteerror, useloaderdata, action loader, etc. hooks. The list will come through custom node backend todolist.json file.</li>
                <li>List Detail page to show respective listing data based on list id and cover, params, useroutedata, edit button with relative & absolute path, delete, fetch API to get data, action loader.</li>
                <li>Add a list page covering the userouteloaderdata with respective ID to get data at edit mode and add mode will work accordingly. Here we use dynamic post, and patch methods for form.</li>
                <li>Add list by useFetcher and useSubmit hook method where when we submit the data page will not reload on submit the data.</li>
            </ol>  
            </Col>
        </Row>
        <Row>
            <Col>
              <h2>WebPack Used: </h2>
            </Col>
        </Row>
        <Row>
            <Col>
               <ol>
                <li>Entry point</li>
                <li>Output</li>
                <li>HtmlWebpackPlugin</li>
                <li>MiniCssExtractPlugin</li>
                <li>CssMinimizerWebpackPlugin</li>
                <li>CopyWebpackPlugin</li>
                <li>babelrc</li>
                <li>css-loader</li>
                <li>file-loader</li>
                <li>sass-loader</li>
                <li>style-loader</li>
               </ol>
            </Col>
        </Row>
        <Row>
            <Col>
              <h2>How to run code on locally:</h2>
            </Col>
        </Row>
        <Row>
            <Col>
              <h4>Frontend-</h4>
            </Col>
        </Row>
        <Row>
            <Col>
              <ol>
                <li>Need to make a clone of the branch from https://github.com/vishalphp/todolist-react-router-6.4.git</li>
                <li>Fire the command npm i locally to install all dependencies.</li>
                <li>Fire the command npm run start to start the server.</li>
                <li>Fire the URL (http://localhost:8081/) on the browser.</li>
              </ol>
            </Col>
        </Row>
        <Row>
            <Col>
              <h4>Backend-</h4>
            </Col>
        </Row>
        <Row>
            <Col>
              <ol>
                <li>Need to make a clone of the branch from  https://github.com/vishalphp/todo-list-backend.git</li>
                <li>Fire the command npm i locally to install all dependencies.</li>
                <li>Fire the command npm run start to start the server.</li>
                <li>Fire the URL (http://localhost:8080/todolist) on the browser to check server's response</li>
              </ol>
            </Col>
        </Row>
        <Row>
            <Col>
              <p>** Note: Need to run backend on local to get response on frontend otherwise dummy list will come and detai page may give error.</p>
            </Col>
        </Row>

     </Container>
    
    </>
  )
}
