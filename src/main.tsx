import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import BaseRouter from "./router";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseRouter></BaseRouter>
    </BrowserRouter>
  </React.StrictMode>
)
