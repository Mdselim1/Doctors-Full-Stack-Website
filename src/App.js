import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage/Home/Home';
import Login from './components/UserRegister/Login/Login';

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
          <Route exact path="/login">
            <Login/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
