import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import async from "./components/Async";

const Layout = async(() => import('./pages'))
const Page404 = async(() => import('./pages/error/Page404'))
const Page500 = async(() => import('./pages/error/Page500'))

const ForgotPassword = async(() => import('./pages/auth/ForgotPassword'))
const SignIn = async(() => import("./pages/auth/SignIn"))
const SignUp = async(() => import("./pages/auth/SignUp"))
//const UserEdit = async(() => import("./pages/user/Edit"))

export const routes = [
  {
    path: '/error/404',
    component: Page404,
    exact: true
  },
  {
    path: '/error/500',
    component: Page500,
    exact: true
  },
  {
    path: '/auth/forgot-password',
    component: ForgotPassword,
    exact: true
  },
  {
    path: '/auth/sign-in',
    component: SignIn,
    exact: true
  },
  {
    path: '/auth/sign-up',
    component: SignUp,
    exact: true
  },
  {
    path: '/',
    component: Layout,
    routes: [
      {
        title: '계정',
        path: '/edit',
        component: null,
        exact: true
      },
    ]
  }
]

function RouteWithSubRoutes(route: { path: any; component: any; routes?: any[]; key: number; state: any; }) {
  return (
    <Route
      path={route.path}
      render={(props) => {
        return (
          <>
            <route.component {...props} routes={route.routes}>
              {route.routes && (
                <Switch>
                  {route.routes.map((route, index: number) => (
                    <RouteWithSubRoutes key={index} {...route} state={route.state} />
                  ))}
                  <Route path='*' component={Page404} />
                </Switch>
              )}
            </route.component>
          </>
        )
      }}
    />
  )
}

export default function RouteConfig() {
  return <Router>
    <Switch>
      {routes.map((route, index: number, state:any) => (
        <RouteWithSubRoutes key={index} {...route} state={state} />
      ))}
    </Switch>
  </Router>
}
