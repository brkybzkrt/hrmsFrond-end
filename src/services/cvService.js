import axios from "axios"

export default class CvService  {
   

    getCvies(){

        return axios.get("http://localhost:8080/api/cvies/getAll");

    }


    addCv(data){

      return  axios.post("http://localhost:8080/api/cvies/add",data);
    }
}
