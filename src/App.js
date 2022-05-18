import React from 'react';
import { Counter } from './features/counter/Counter';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';
import { BrowserRouter as Router, 
 Switch,
 Router,
 Link
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Switch>
    <Route path='/login'>
    <Login />
    </Route>
    <Route path="/detail">
    <Detail />
    </Route>
    <Route path="/">
    <Home />
    </Route>
    </Switch>
    </Router>
    </div>
    );
}

export default App;