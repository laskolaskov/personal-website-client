import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Sketches from './pages/Sketches'
import NotFound from './pages/NotFound'


//components
import Header from './components/Header'




//router components
import {
    Switch,
    Route,
} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="/sketches">
                    <Sketches />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/">
                    <NotFound />
                </Route>
            </Switch>
        </div >
    )
}

export default App