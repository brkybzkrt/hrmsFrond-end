  
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import JobAdvertisements from '../pages/JobAdvertisements'
import AddJobAdvertisement from '../pages/AddJobAdvertisement'


export default function Dashboard(props) {
  <Login signIn={props.signIn}></Login>
    return (
        <div >
         
         {props.isAuthenticated? <React.Fragment><Switch>
        <Route path="/" exact component={Home}></Route>
       <Route path="/jobAdvertisements" component={JobAdvertisements}></Route>
        <Route path="/addJobAdvertisement" component={AddJobAdvertisement}></Route>
      </Switch></React.Fragment>:
        <React.Fragment><Route path="/" exact component={Home}></Route>
        <Route path="/register" component={Register}></Route>
       <Route path="/login" component={Login} ></Route> 

        
        </React.Fragment>
       }
         
            
        </div>
    )
}
