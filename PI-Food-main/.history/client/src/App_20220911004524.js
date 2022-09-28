import './App.css';
import Home from './components/home';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Details from './components/details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/detail/:id'component={Details}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
