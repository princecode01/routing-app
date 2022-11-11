import React, { Component } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from '../MasterLayout/MasterLayout'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import Contact from '../Contact/Contact'



export default class App extends Component {

  routes = createBrowserRouter([{
    path: '/', element: <MasterLayout />, errorElement: <h2>not found</h2>, children: [
      { index: true, element: <Home /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      
    ]
  }])

  render() {
    return (
      <>
        <RouterProvider router={this.routes} />
      </>
    )
  }
}




