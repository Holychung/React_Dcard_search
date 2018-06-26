import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { PageSearch } from './Pages/PageSearch'
import Navbar from './Components/Navbar'

const NotFound = () => (
  <div>
    Error 404
  </div>
)

const Home = () => (
  <div className='container jumbotron'>
    <h1 className='text-center'>This is HomePage</h1>
    <div className='mt-5 text-center'>
      <Link to='/search'>
        <button className='btn btn-success'><h3>Let's search !</h3></button>
      </Link>
    </div>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={ Navbar }/>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/search' component={ PageSearch } />
            <Route component={ NotFound } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
