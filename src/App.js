import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { PageSearch } from './Pages/PageSearch'

const NotFound = () => (
  <div>
    Error 404
  </div>
)

const Home = () => (
  <div>
    <h1>HomePage</h1>
    <Link to='/search'>Search</Link>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/search' component={ PageSearch } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
