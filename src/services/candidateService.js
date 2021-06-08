import axios from "axios"

export default class andidateService  {
   

    getCandidates(){

        return axios.get("http://localhost:8080/api/candidates/getall");

    }
}
