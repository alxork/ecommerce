import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/Homepage'
import ShopPage from './pages/shoppage/Shop'
import Header from './components/header/header'
import './App.css'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App
