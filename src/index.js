import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
import people from './data'

function App() {
  return <div>hello</div>
}

function Nav(props) {
  const { children } = props
  const currentPath = props.route.path
  const activePath = path => currentPath === path ? 'active' : ''
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav">
          <li className={activePath('/') + ' col-xs-3'}><Link activeClassName="active" to="/">Home</Link></li>
          <li className={activePath('/talks') + ' col-xs-3'}><Link activeClassName="active" to="/talks">Talks</Link></li>
          <li className={activePath('/learn') + ' col-xs-3'}><Link activeClassName="active" to="/learn">Learn</Link></li>
          <li className={activePath('/profile') + ' col-xs-3'}><Link activeClassName="active" to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  )
}

function Search() {
  return (
    <div>
      {people.slice(0, 5).map(person => {
        return (
          <div key={person._id} className="row">
            <div className="col-sm-6 col-sm-offset-3" style={{height: '100px'}}>
              <div className="col-xs-2">
                <div><img src={person.picture} style={{border: '1px solid black'}} /></div>
                <div>{person.name}</div>
              </div>
              <div className="col-xs-3">
                <div>Speaks: <span className="label label-primary">{person.speaks}</span></div>
                <div>Learning: <span className="label label-primary">{person.learning}</span></div>
              </div>
              <div className="col-xs-7">{person.intro.length > 80 ? person.intro.slice(0, 80) + '...' : person.intro}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Talks() {
  return (
    <div>Talks</div>
  )
}

function Learn() {
  return (
    <div>Learn</div>
  )
}

function Profile() {
  return (
    <div>Profile</div>
  )
}

const routes = (
  <Router history={hashHistory}>
    <Route path={'/'} component={Nav}>
      <IndexRoute component={Search} />
    </Route>
    <Route path={'/talks'} component={Nav}>
      <IndexRoute component={Talks} />
    </Route>
    <Route path={'/learn'} component={Nav}>
      <IndexRoute component={Learn} />
    </Route>
    <Route path={'/profile'} component={Nav}>
      <IndexRoute component={Profile} />
    </Route>
  </Router>
)

render(routes, document.querySelector('#root'))
