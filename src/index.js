import './i18n/config'
//React
import React from 'react'
import ReactDOM from 'react-dom'
//router
import {
    //BrowserRouter as Router,
    HashRouter as Router,
} from "react-router-dom"
//App
import App from './App'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)