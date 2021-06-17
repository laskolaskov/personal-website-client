import Home from './pages/Home'
import Contacts from './pages/Contacts'
import Sketches from './pages/Sketches'
import Test from './pages/Test'
import NotFound from './pages/NotFound'


//components
import Header from './components/Header'
import Footer from './components/Footer'

//CSS
import './css/main.css'

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
                <Route path="/contacts" component={Contacts} />
                <Route path="/sketches" component={Sketches} />
                <Route path="/test" component={Test} />
                <Route exact path="/" component={Home} />
                <Route path="/" component={NotFound} />
            </Switch>
            <Footer />
        </div >
    )
}

export default App