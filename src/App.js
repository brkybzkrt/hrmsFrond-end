
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import {  Container} from 'semantic-ui-react'
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Dashboard from "./layouts/Dashboard"
import {routes} from "./Routing"

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Container className="pad">
    <Switch>
        {routes.map((route) => (
         
          <Route exact={route.exact} path={route.path} key={route.title}> <Dashboard > {route.component} </Dashboard> </Route>
        ))}
      </Switch>
      </Container>
      
    
    <Footer/>


    </div>
    </Router>
  


  );
}

export default App;
