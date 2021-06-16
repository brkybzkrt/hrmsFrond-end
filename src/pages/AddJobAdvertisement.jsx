import React, { useEffect ,useState} from 'react'
import {  useFormik } from 'formik'
import { Form,Button } from 'semantic-ui-react'
import * as Yup from "yup"
import CityService from '../services/cityService'
import JobPositionService from '../services/jobPositionService'
import JobTypeService from '../services/jobTypeService'
import WorkingTimeService from '../services/workingTimeService'

import JobAdvertisementService from '../services/jobAdvertisementService';
import axios from 'axios'



const formShema=Yup.object().shape({


cityId:Yup.string().required(),
employerId:Yup.string().required(),
countOfPosition:Yup.string().required(),
jobDescription:Yup.string().required(),
jobPositionId:Yup.string().required(),
deadlineDate:Yup.string().required()



})

export default function AddJobAdvertisement() {

    const [city, setCity] = useState([])
    const [jobType, setJobType] = useState([])
    const [workingTime, setWorkingTime] = useState([])
    const [jobPosition, setJobPosition] = useState([])
    useEffect(() => {
        let cityService = new  CityService()
        let jobTypeService= new JobTypeService()
        let workingTimeService = new WorkingTimeService()
        let jobPositionService = new JobPositionService()
       
       
       cityService.getCities().then(response=>{setCity(response.data.data)})
       jobTypeService.getJobTypes().then(response=>{setJobType(response.data.data)})
       workingTimeService.getWorkingTimes().then(response=>{setWorkingTime(response.data.data)})
       jobPositionService.getJobPositions().then(response=>{setJobPosition(response.data.data)})
       
       }, [])



    let jobAdvertisementService = new JobAdvertisementService();

       const formik=useFormik({
        initialValues:{"cityId": "", "countOfPosition": "","deadlineDate": "","employerId": "","jobDescription": "","jobPositionId": "","jobTypeId":"","maxSalary": "","minSalary": "","statusOfActive": true, "workingTimeId": ""},
        validationSchema:formShema,
        onSubmit:(values)=>{

          jobAdvertisementService.addJobAdvertisement(values).then(r=>console.log(r.data.status))
          alert("iş ilanınız eklenmiştir onay bekleniyor")
        } })






        console.log(formik.values)
        console.log(formik.errors)
    return (
        <div className="addJobDiv">
            
        


    <form className="align" onSubmit={formik.handleSubmit} onReset={formik.handleReset}>

            <Form.Field>
              <label>Şehir</label>
              <select name="cityId" value={formik.values.cityId} onChange={formik.handleChange} onBlur={formik.onBlur}>
                <option value="">Şehir Seçiniz</option>
                      {city.map(c=>(

                          <option  value={c.id} >{c.name}</option>
                      ))}
            </select>
            {formik.errors.cityId && formik.touched.cityId && (
                <div className={" red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
            </Form.Field>

            <Form.Field >
              <label for="quantity">Pozisyon Sayısı</label>
                <input type="number" id="quantity" name="countOfPosition" min="1" max="100" value={formik.values.countOfPosition} onChange={formik.handleChange} onBlur={formik.onBlur}/>
                
              </Form.Field>
              {formik.errors.countOfPosition &&  (
                <div className={" red basic label"}>
                {formik.errors.countOfPosition}
              </div>
              )}
             

              <Form.Field >
                <label>Şirket İsmi</label>
                <input type="text" name="employerId" value={formik.values.employerId} onChange={formik.handleChange} onBlur={formik.errors.employerId}/>
                </Form.Field>
                {formik.errors.employerId && formik.touched.employerId && (
                <div className={" red basic label"}>
                {formik.errors.employerId}
              </div>
              )}


                <Form.Field>
                    <label>Pozisyon Adı</label>
             
                    <select name="jobPositionId"   value={formik.values.jobPositionId} onChange={formik.handleChange} onTouch={formik.touched}>

                     <option value="" >Pozisyon Seçiniz </option>
                     {jobPosition.map(jP=>(
                         <option value={jP.id}>{jP.name}</option>


                     ))}

{formik.errors.jobPositionId && !formik.touched.jobPositionId && (
                <div className>
                {formik.errors.jobPositionId}
              </div>
              )}


             </select>
               </Form.Field>

               <Form.Field>
                <label>İş Açıklaması</label>
                <input type="text" name="jobDescription" value={formik.values.jobDescription} onChange={formik.handleChange} onBlur={formik.touched} />
                </Form.Field>
                
                {formik.errors.jobDescription && formik.touched.jobDescription && (
                <div className>
                {formik.errors.jobDescription}
              </div>
              )}
                
                  <Form.Field><label>Son Başvuru Tarihi</label>
                <input type="text" max="5" min="1" placeholder="YYYY-MM-DD" name="deadlineDate" value={formik.values.deadlineDate} onChange={formik.handleChange} />
                  </Form.Field>
                  {formik.errors.deadlineDate && !formik.touched.deadlineDate && (
                <div className>
                {formik.errors.deadlineDate}
              </div>
              )}


                  <Form.Field>
                  <label>Çalışma Tipi</label>
                <select name="jobTypeId" value={formik.values.jobTypeId} onChange={formik.handleChange}>
                  <option value="">Çalışma Tipini Seçiniz</option>
                 
                      {jobType.map(jT=>(
                        <option value={jT.id}>{jT.name}</option>
                      ))}
                </select>
                </Form.Field>
                {formik.errors.jobTypeId && !formik.touched.jobTypeId && (
                <div className>
                {formik.errors.jobTypeId}
              </div>
              )}



                <Form.Field>
                <label>Çalışma Zamanı</label>
                <select  name="workingTimeId" value={formik.values.workingTimeId} onChange={formik.handleChange} >
                    <option value="">Çalışma Zamanını Seçiniz</option>
                    {workingTime.map(wT=>(

                      <option  value={wT.id}>{wT.name}</option>


                    ))}
                </select>
                </Form.Field>

                {formik.errors.workingTimeId && !formik.touched.workingTimeId && (
                <div className>
                {formik.errors.workingTimeId}
              </div>
              )}


                <Form.Field> <label for="maxSalary">Maksimum Maaş</label>
                <input type="number"  name="maxSalary" min="0" max="100000" value={formik.values.maxSalary} onChange={formik.handleChange} onBlur={formik.touched}/></Form.Field>
                {formik.errors.maxSalary && !formik.touched.maxSalary && (
                <div className>
                {formik.errors.maxSalary}
              </div>
              )}

                <Form.Field> <label for="minSalary">Minimum Maaş</label>
                <input type="number"  name="minSalary" min="0" max="100000" value={formik.values.minSalary} onChange={formik.handleChange} onBlur={formik.touched} /></Form.Field>
                {formik.errors.minSalary && formik.touched.minSalary && (
                <div className>
                {formik.errors.minSalary}
              </div>
              )}


                <button class="ui green button" style={{marginTop:"5px"}} type="submit">Gönder</button>

</form>

</div>

)
}











       

      
    

