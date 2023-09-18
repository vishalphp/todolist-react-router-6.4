import React from "react";
import './App.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import TodoListPage, { loader as todolistLoader, action as deleteListAction} from './pages/TodoListPage';
import AddTodoListPage from './pages/AddTodoListPage';
import Layout from './layout/Layout';
import TodoDetailsPage, { loader as todoDetailsLoader, action as deleteAction } from './pages/TodoDetailsPage';
import Error from './pages/Error';
import TodoListRootLayout from './layout/TodoListRootLayout';
import EditTodo  from './pages/EditTodo';
import { action as addtodoListAction} from './component/FormTodo';
import AddListViaFam, { action as addtodoListViaFamAction}  from './pages/AddListViaFam';
import Document from "./pages/Document";

function App() {


const createRouteObjects = createBrowserRouter([
      {
        path: '/',
        element: <Layout/>,
        errorElement: <Error />,
        children: [
                 {
                  index: true,
                  element: <Home />,
                  },
                  {
                    path: 'document',
                    element: <Document />,
                    },
                  {
                   path: 'todolist',
                   element: <TodoListRootLayout />,
                   children: [
                     {
                     index:true,
                     element: <TodoListPage />,
                     loader: todolistLoader,
                     action: deleteListAction
                    },
                    {
                      path: ':todoId',
                      id: 'todo-detail',
                      loader: todoDetailsLoader,
                      children:[
                        {
                          index: true,
                          element: <TodoDetailsPage />,
                          action: deleteAction
                        },
                        {
                          path: 'edit',
                          element: <EditTodo />,
                          action: addtodoListAction
                        }
                      ]
                    },
                   ]
                  },
                  {
                    path: 'addtodolist',
                    element: <AddTodoListPage />,
                    action: addtodoListAction
                  },
                  {
                    path: 'addtodolistviafetcher',
                    element: <AddListViaFam />,
                    action: addtodoListViaFamAction
                  }
        ]
      }
      
    ]);
  

  return (
    <>
       <RouterProvider router={createRouteObjects} />
    </>

  
  );
}

export default App;
