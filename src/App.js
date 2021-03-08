import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Views/About';
import Home from './Views/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/library'>
            <Home />
          </Route>
          <Route path='/library/about'>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
