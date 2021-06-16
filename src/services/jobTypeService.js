import axios from 'axios'
import React, { Component } from 'react'

export default class jobTypeService extends Component {

    getJobTypes(){

        return axios.get("http://localhost:8080/api/jobTypes/getAll");
    }
}
