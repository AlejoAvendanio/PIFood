import './App.css';
import Home from './components/home';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/detail/:id'component={Detail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
