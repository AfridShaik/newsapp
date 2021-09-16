import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar.js'
import News from './components/News.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component { 
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={5} country = "in" category = "sports"/>
      </div>
    )
  }
}

