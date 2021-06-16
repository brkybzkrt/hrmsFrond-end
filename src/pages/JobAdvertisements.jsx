import React,{useState,useEffect} from 'react'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Container, Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

export default function JobAdvertisements() {

    const [jobAdvertisements,setJobAdvertisements]= useState([])



useEffect(() => {
   let jobAdvertisementService = new JobAdvertisementService();

   jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data));

})

    return (
        <div>
            
            <Container>
            <Table className="ui grey inverted "fixed>
             <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>İş Açıklaması</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma Türü</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                        <Table.HeaderCell>Yayınlandığı Tarih</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarih</Table.HeaderCell>
                     </Table.Row>
             </Table.Header>
            
            {jobAdvertisements.map(ja=>(

                        <Table.Body key="">
                        <Table.Row>
                        <Table.Cell>{ja.employerCompanyName}</Table.Cell>
                        <Table.Cell>{ja.jobPositionName}</Table.Cell>
                        <Table.Cell>{ja.jobDescription}</Table.Cell>
                        <Table.Cell>{ja.countOfPosition}</Table.Cell>
                        <Table.Cell>{ja.cityName}</Table.Cell>
                        <Table.Cell>{ja.jobTypeName}</Table.Cell>
                        <Table.Cell>{ja.workingTimeName}</Table.Cell>
                        <Table.Cell>{ja.releaseDate}</Table.Cell>
                        <Table.Cell>{ja.deadlineDate}</Table.Cell>
                        </Table.Row>

                        </Table.Body>
            ))}
           
           

           </Table>
           </Container>
        </div>
    )
}
