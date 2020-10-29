import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/cocktai/:id'>
          <SingleCocktail />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
