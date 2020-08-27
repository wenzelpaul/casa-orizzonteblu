import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

import Home from './pages/Home';
import About from './pages/About';
import Map from './pages/Map';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import NoMatch from './pages/NoMatch';
import LoginModal from './components/LoginModal';
import { AuthProvider } from './firebase/Auth';


function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/casa-orizzonteblu" exact component={Home} />
          <Route path="/casa-orizzonteblu/about" component={About} />
          <Route path="/casa-orizzonteblu/contact" component={Contact} />
          <Route path="/casa-orizzonteblu/pictures" component={Gallery} />
          <Route path="/login" component={LoginModal} />
          <Route path="/casa-orizzonteblu/map" component={Map} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
