import axios from 'axios'
import React, { Component } from 'react'

export default class workingTimeService extends Component {
    getWorkingTimes(){

        return axios.get("http://localhost:8080/api/workingTimes/getAll");
    }
}
