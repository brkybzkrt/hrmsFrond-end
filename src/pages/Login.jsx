import React from 'react'
import { Button ,Form} from 'semantic-ui-react'

export default function Login(props) {
    return (
        <div  className="addJobDiv">
            <h3>Login Sayfası</h3>

                <form>

                <Form.Field >
              <label for="">Email</label>
                <input type="email" id="" name="email"   />
              </Form.Field>
             

              <Form.Field >
                <label>Parola</label>
                <input type="password" name="password"  />
                </Form.Field>
                


            <Button color='green' onClick={props.signIn}>Giriş Yap</Button>
            <Button color='yellow' >Parolamı Unuttum</Button>
                </form>
            
        </div>
    )
}
