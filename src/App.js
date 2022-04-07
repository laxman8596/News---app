import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';




function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path='/' component={Home}></Route>

      </Switch>


    </div>
  )
}

export default App