import  React  from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Breeds from './pages/Breeds';
import About from './pages/About';
import Contact from './pages/Contact.js';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/breed' exact component={Breeds}/>
          <Route path='/about' exact component={About}/>
          <Route path='/contact' exact component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
     </div>
  );
}

export default App;


