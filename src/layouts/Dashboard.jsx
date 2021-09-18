  
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

import Login from '../pages/Login'
import JobAdvertisements from '../pages/JobAdvertisements'
import AddJobAdvertisement from '../pages/AddJobAdvertisement'
import Employer from '../pages/users/Employer'
import UpdateEmployer from '../pages/UpdateEmployer'
import MainRegisterPage from '../pages/userRegisters/MainRegisterPage'
import UpdateJobAdvertisement from '../pages/UpdateJobAdvertisement'
import EmployerDetails from '../pages/EmployerDetails'
import Update from '../pages/Update'
import Cv from '../pages/cvPages/getCv/Cv'
import { ToastContainer } from 'react-toastify'
import Employee from '../pages/users/Employee'
import EmployeeDetails from "../pages/EmployeeDetails"
import LanguageUpdate from '../pages/cvPages/updateCv/LanguageUpdate'
import EducationUpdate from '../pages/cvPages/updateCv/EducationUpdate'
import JobExperienceUpdate from '../pages/cvPages/updateCv/JobExperienceUpdate'
import ProgrammingLanguageUpdate from '../pages/cvPages/updateCv/ProgrammingLanguageUpdate'
import CvUpdate from '../pages/cvPages/updateCv/CvUpdate'
import CvLayout from '../pages/cvPages/addCv/CvLayout'


export default function Dashboard(props) {
  


  <Login signIn={props.signIn}></Login>
    return (

        <div >
         <ToastContainer position="bottom-right"/>
         {props.isAuthenticated? <React.Fragment><Switch>
        <Route path="/" exact  ><Home ></Home></Route>
        <Route path="/employees" exact component={Employee}></Route>
        <Route path="/employeeDetails/:id" exact component={EmployeeDetails}></Route>
       <Route path="/jobAdvertisements" exact component={JobAdvertisements}></Route>
       <Route path="/updateJobAdvertisements/:id" exact component={UpdateJobAdvertisement}></Route>
        <Route path="/addJobAdvertisement" exact component={AddJobAdvertisement}></Route>
        <Route path="/employers" exact component={Employer}></Route>
        <Route path="/employerDetails/:id" exact component={EmployerDetails}></Route>
        <Route path="/update/:id" exact component={Update}></Route>
        <Route path="updateEmployer/:id" exact component={UpdateEmployer}></Route>

        <Route path="/cv/:id"  exact component={Cv}></Route>
        <Route path="/cv/update/:candidateId" component={CvUpdate}></Route>
        <Route  path="/cv/languageUpdate/:id" exact component={LanguageUpdate}></Route>
        <Route path="/cv/educationUpdate/:id" exact component={EducationUpdate}></Route>
        <Route path="/cv/jobExperienceUpdate/:id" exact  component={JobExperienceUpdate}></Route>
        <Route path="/cv/programmingLanguageUpdate/:id" exact component={ProgrammingLanguageUpdate}></Route>
       
        <Route path="/cvLayout" exact component={CvLayout}></Route>

      </Switch></React.Fragment>:
        <React.Fragment>
        <Route path="/register" component={MainRegisterPage}></Route>
       <Route path="/login" component={Login} ></Route> 

        
        </React.Fragment>
       }
         
            
        </div>
    )
}
