import React from 'react'
import { Image, Menu,Dropdown} from 'semantic-ui-react'
export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://image.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg"/>
                <Dropdown pointing="top left" text="Berkay">
                    <Dropdown.Menu>
                        <Dropdown.Item  text="Bilgilerim" icon="info"/>
                        <Dropdown.Item  text="Çıkış Yap" icon="sign-out" onClick={props.signOut}/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
