import React from 'react'
import axios from "axios"
export default function jobPositionService() {


    getJobAdvertisements()
    {

        return axios.get("http://localhost:8080/api/jobPositions/getAll");
    }
}
