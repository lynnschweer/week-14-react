import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


//react does a process between the actual dom and the virtual dom
//this is called reconciliation/dom manipulation

//listen, state, render
//when app first loads in, react automatically renders based on when the state changes