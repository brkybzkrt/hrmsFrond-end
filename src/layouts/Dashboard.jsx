  
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import {routes} from "../Routing"



export default function Dashboard( {children} ) {
    return (
        <div >
         
         {children}
            
        </div>
    )
}
