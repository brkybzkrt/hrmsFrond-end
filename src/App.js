
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from './layouts/Footer';

import {  BrowserRouter as Router, useHistory} from "react-router-dom";
import Dashboard from "./layouts/Dashboard"
import { useState } from 'react';
import NavbarMenu from './layouts/NavbarMenu';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  const history =useHistory()

  function handleSignOut() {
    setIsAuthenticated(true)
  
  
  }
  function handleSignIn() {
    setIsAuthenticated(false)
    history.push("/home")
  }

  
  return (
    
    <Router>
    <div className="App">
      <NavbarMenu  isAuthenticated={isAuthenticated} signOut={handleSignIn}  />
      <div className="appPadding" ><Dashboard  isAuthenticated={isAuthenticated}   signIn={handleSignOut} /></div>
     
      <Footer/>
    
    </div>
    </Router>
  


  );
}

export default App;
