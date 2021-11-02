import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
