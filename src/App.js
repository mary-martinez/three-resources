import './App.css';
import Main from './view/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ToysView from './view/Toys/ToysView';
import MoviesView from './view/Movies/MoviesView';
import DirectorsView from './view/Directors/DirectorsView';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/toys">
            <ToysView />
          </Route>
          <Route path="/movies">
            <MoviesView />
          </Route>
          <Route path="/directors">
            <DirectorsView />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
