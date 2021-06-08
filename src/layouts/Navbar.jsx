import React from "react";
import { Input, Menu,Dropdown, Container } from 'semantic-ui-react'
import {Link} from "react-router-dom"
import {routes} from "../Routing" 


export default function Navbar() {
    return (
      
        <div>
          
     <Menu inverted className="">
       <Container>
     {routes.map(route=> (
            <Menu.Item key={route.title} name = {route.title} as="a"> <Link to = {route.path}>{route.title}</Link> </Menu.Item>
        ) ) }
        
        <Menu.Menu position='right'>
        <Dropdown item text="Tip">
            <Dropdown.Menu>
              <Dropdown.Item>İş İlanları</Dropdown.Item>
              <Dropdown.Item>Açık CV'ler</Dropdown.Item>
              <Dropdown.Item>Pozisyonlar</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='login'
           as="a"
          />
        </Menu.Menu>
        </Container>
      </Menu>
    
        </div>

        
    )
}
