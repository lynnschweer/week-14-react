import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './Root'
import NutritionPage from './NutritionPage'
import RecipesPage from './RecipesPage'

const router = createBrowserRouter
([ { path: "/", 
  element: <App />, }, 
  { path: "/RecipesPage", 
    element: <RecipesPage />, },
   { path: "/NutritionPage", 
    element: <NutritionPage/>} ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)


//react does a process between the actual dom and the virtual dom
//this is called reconciliation/dom manipulation

//listen, state, render
//when app first loads in, react automatically renders based on when the state changes