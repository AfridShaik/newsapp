import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component { 
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Switch>
            <Route exact key="sports" path="/"><News pageSize={this.pageSize} country = "in" category = "sports"/></Route>
            <Route exact key="business" path="/business"><News pageSize={this.pageSize} country = "in" category = "business"/></Route>
            <Route exact key="entertainment" path="/entertainment"><News pageSize={this.pageSize} country = "in" category = "entertainment"/></Route>
            <Route exact key="general" path="/General"><News pageSize={this.pageSize} country = "in" category = "general"/></Route>
            <Route exact key="health" path="/Health"><News pageSize={this.pageSize} country = "in" category = "health"/></Route>
            <Route exact key="science" path="/Science"><News pageSize={this.pageSize} country = "in" category = "science"/></Route>
            <Route exact key="sports" path="/Sports"><News pageSize={this.pageSize} country = "in" category = "sports"/></Route>
            <Route exact key="technology" path="/Technology"><News pageSize={this.pageSize} country = "in" category = "technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

