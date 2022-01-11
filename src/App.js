import './App.css';
import { useState } from 'react';
import { getUser } from './services/users';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink, Route, Switch } from 'react-router-dom';
import Auth from './views/Auth';
import ToDo from './views/ToDo';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <h1>Welcome</h1>
      <BrowserRouter>
        <header>
          <NavLink to="/"></NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            {currentUser && <ToDo />}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
