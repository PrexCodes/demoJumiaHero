import React from 'react'
import { RouterProvider } from 'react-router-dom'
import styled from 'styled-components'
import { mainRoute } from './router/mainRoute'
const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute}/>
    </div>
  )
}

export default App

