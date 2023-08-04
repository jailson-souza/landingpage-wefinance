import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import Router from './views/pages/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   </React.StrictMode>
)
