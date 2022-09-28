import './App.css';
import Home from './components/home';
import {BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route export path='/home' component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
