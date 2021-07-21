import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './login-forms/Home/Home';
import Navbar from './login-forms/Navbar/Navbar';
import Signin from './login-forms/Signin/Signin';
import Signup from './login-forms/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
        <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/signin'>
            <Signin></Signin>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
