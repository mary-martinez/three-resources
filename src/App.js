import logo from './logo.svg';
import './App.css';
import Main from './view/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ToysView from './view/Toys/ToysView';

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
