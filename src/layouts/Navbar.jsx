import React from "react";
import { Input, Menu, Container} from 'semantic-ui-react'
import { NavLink} from "react-router-dom";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navbar(props) {
  

    return (
      
        <div>
          
     <Menu inverted className="">
       <Container>
         {props.isAuthenticated? <React.Fragment><Menu.Item as={NavLink} to="/addJobAdvertisement" >Yeni İş İlanı ekle</Menu.Item>
       <Menu.Item as={NavLink} to="/jobAdvertisements">İş İlanları</Menu.Item></React.Fragment> : null}
      
       

        <Menu.Menu position='right'>
       

          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          
          <Menu.Item
            name='login'
          
          > {props.isAuthenticated? <SignedIn  signOut={props.signOut}/> :<SignedOut />}
          </Menu.Item>
         
        </Menu.Menu>
        </Container>
      </Menu>
    



       
        </div>

        
    )
}
