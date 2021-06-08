import axios from "axios"

export default class CvService  {
   

    getCvies(){

        axios.get("http://localhost:8080/api/cvies/getAll");

    }
}
