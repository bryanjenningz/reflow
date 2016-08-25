import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

function App() {
  return <div>hello</div>
}

const routes = (
  <Router history={hashHistory}>
    <Route path={'/'} component={App} />
  </Router>
)

render(routes, document.querySelector('#root'))
