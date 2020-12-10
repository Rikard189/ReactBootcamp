import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  const [search, setSearch] = useState("");

  function handleSearch(searchValue) {
    setSearch(searchValue);
  }

  return (
    <Router>
      <div className="App">
        <Navbar handleSearch={handleSearch}/>
        <Switch>
          <Route path="/" exact render={(props) => (
            <HomePage {...props} search={search}></HomePage>
          )}/>
          <Route path="/login" exact component={LoginPage}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
