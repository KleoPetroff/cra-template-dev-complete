import React from 'react'
import { useRoutes } from 'react-router-dom'
import { PartialRouteObject } from 'react-router'

import { App } from 'src/components/App/App'
import { Login } from 'src/components/Login/Login'

const routes: PartialRouteObject[] = [
  { path: '/', element: <App /> },
  { path: 'login', element: <Login /> }
]

export const Routes = () => useRoutes(routes)
