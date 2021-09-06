import './App.css'
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUsers from './Components/AddUsers'
import EditUsers from './Components/EditUsers'
import NotFound from './Components/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/all" component={AllUsers}></Route>
          <Route exact path="/add" component={AddUsers}></Route>
          <Route exact path="/edit/:id" component={EditUsers}></Route>
          <Route component={NotFound} />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
