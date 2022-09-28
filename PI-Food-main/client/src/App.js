import './App.css';
import Home from './components/home';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import Details from './components/details';
import Create from './components/create';
import LandingPage from './components/landingPage';
import PageFavorite from './components/fav/pageFavorite';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/detail/:id'component={Details}/>
        <Route exact path='/create_repice' component={Create}></Route>
        <Route exact path='/favorites' component={PageFavorite}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
