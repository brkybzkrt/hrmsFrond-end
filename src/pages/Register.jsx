import React from 'react'
import { Formik } from 'formik'
import { Form,Button } from 'semantic-ui-react'
import * as Yup from "yup"
import axios from 'axios'


const formShema=Yup.object().shape({

email:Yup.string().email().required(),
companyName:Yup.string().required(),
phoneNumber:Yup.string().required(),
password:Yup.string().min(8).max(8).required(),
webAddress:Yup.string().required()


})
export default function Register() {
    return (
        <div>
            
            <Formik initialValues={{
               
                companyName:"",
                phoneNumber:"",
                password:"",
                webAddress:"",
                email:""
            }} 
            onSubmit={(data)=>axios.post("http://localhost:8080/api/employers/add",data).then(response=>{console.log(response)})}
            validationSchema={formShema}
            
            >
{({
handleSubmit,
handleChange,
values,
errors,
touched,
handleReset

})=>{


    return(
     
            <form onSubmit={handleSubmit} onReset={handleReset} className="addJobDiv">
              <Form.Field >
                
              <label htmlFor="email">Email</label>
                <input type="email"  name="email" value={values.email}  onChange={handleChange} />
                
              </Form.Field>

              <Form.Field >
              <label htmlFor="companyName">Ad</label>
                <input type="text"  name="companyName" value={values.companyName}  onChange={handleChange} />
              </Form.Field>

              <Form.Field >
              <label htmlFor="phoneNumber" >Telefon</label>
                <input type="text"  name="phoneNumber" value={values.phoneNumber}  onChange={handleChange}  />
              </Form.Field>

              <Form.Field >
              <label htmlFor="password">Parola</label>
                <input type="password"  name="password" value={values.password}  onChange={handleChange} />
              </Form.Field>

              <Form.Field >
              <label htmlFor="webAddress">Web Site Adresi</label>
                <input type="text"  name="webAddress" value={values.webAddress}  onChange={handleChange} />
              </Form.Field>

              <Button color='green' type="submit">Gönder</Button>
            </form>

        
    )
}}




             </Formik>
        </div>
    )
}
