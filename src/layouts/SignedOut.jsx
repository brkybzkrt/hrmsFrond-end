import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut() {
    return (
        <div>
              <Menu.Item>
               <Button primary as={NavLink} to={"/login"} >Giriş yap</Button>
               <Button primary as={NavLink} to={"/register"} style={{marginLeft:'0.5em'}}>Kayıt Ol</Button> 
            </Menu.Item>
        </div>
    )
}
