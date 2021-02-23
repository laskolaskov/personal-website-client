//bootstrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
//default theme
import './css/hootstrap.css'
//React
import React from 'react'
import ReactDOM from 'react-dom'
//router
import {
  BrowserRouter as Router,
} from "react-router-dom"
//App
import App from './App'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)