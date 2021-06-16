import axios from 'axios'
import React, { Component } from 'react'

export default class CityService extends Component {
    

    getCities(){

        return axios.get("http://localhost:8080/api/cities/getAll");
    }
}
