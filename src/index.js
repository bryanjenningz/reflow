import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router'
import people from './data/people'
import talks from './data/talks'

function Nav(props) {
  const { children } = props
  const currentPath = props.route.path
  const activePath = path => currentPath === path ? 'active' : ''
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <ul className="nav navbar-nav text-center">
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
            <div className="col-sm-6 col-sm-offset-3 panel panel-default" style={{height: '100px'}}>
              <div className="panel-body">
                <div className="col-xs-2">
                  <div><Link to={'/people/' + person._id}><img src={person.picture} style={{border: '1px solid black'}} /></Link></div>
                  <div>{person.name}</div>
                </div>
                <div className="col-xs-3">
                  <div>Speaks: <span className="label label-primary">{person.speaks}</span></div>
                  <div>Learning: <span className="label label-primary">{person.learning}</span></div>
                </div>
                <div className="col-xs-7">{person.intro.length > 80 ? person.intro.slice(0, 80) + '...' : person.intro}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Talks(props) {
  const id = Number(props.params.id)
  const talk = talks.filter(p => p._id === id)[0]

  if (isNaN(id) || !talk) {
    return (
      <div>
        {talks.map(talk => {
          const messages = talk.messages.slice(0, -1).split('.')
          return (
            <div key={talk._id}>
              <Link to={`/talks/${talk._id}`}>
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-3">
                    <div className="col-xs-3">
                      <div><img src="https://robohash.org/errorinventorelaudantium.png?size=50x50&set=set1" /></div>
                      <div>{talk.name}</div>
                    </div>
                    <div className="col-xs-9">{messages[messages.length - 1]}</div>
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }

  const messages = talk.messages.slice(0, -1).split('.')
  return (
    <div>
      <div>{talk.name}</div>
      <div>
        {messages.map((message, i) => {
          return (
            <div key={i}>
              <div className="col-xs-2">{i % 2 === 0 ? 'You' : talk.name}:</div>
              <div className="col-xs-10">{message}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Learn() {
  return (
    <div>Learn</div>
  )
}

function Profile(props) {
  const id = Number(props.params.id)
  const person = isNaN(id) ? people[0] : (people.filter(p => p._id === id)[0] || people[0])
  return (
    <div className="text-center">
      <div>{person.name}</div>
      <img src={person.picture} style={{border: '1px solid black'}} />
      <div>Speaks: <span className="label label-primary">{person.speaks}</span></div>
      <div>Learning: <span className="label label-primary">{person.learning}</span></div>
      <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">{person.intro}</div>
    </div>
  )
}

const routes = (
  <Router history={hashHistory}>
    <Route path={'/'} component={Nav}>
      <IndexRoute component={Search} />
    </Route>
    <Route path={'/people/:id'} component={Nav}>
      <IndexRoute component={Profile} />
    </Route> 
    <Route path={'/talks'} component={Nav}>
      <IndexRoute component={Talks} />
    </Route>
    <Route path={'/talks/:id'} component={Nav}>
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
