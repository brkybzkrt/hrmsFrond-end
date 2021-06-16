import React from 'react'
import EmployerService from "../../services/employerService"
import {useState,useEffect} from 'react'
import { Container, Table } from 'semantic-ui-react'

export default function Employer() {
    const  [employers, setEmployers] = useState([])

    useEffect(()=>{
         let employerService=new EmployerService();
         employerService.getEmployers().then(result=>setEmployers(result.data.data));
    }
   

       )

    return (
        <div>
            <Container>
            <Table  fixed>
             <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Web Adresi</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        
                     </Table.Row>
             </Table.Header>



                {employers.map(e=>(

                        <Table.Body key={e.id}>
                        <Table.Row>
                        <Table.Cell>{e.companyName}</Table.Cell>
                        <Table.Cell>{e.webAddress}</Table.Cell>
                        <Table.Cell>{e.email}</Table.Cell>
                        <Table.Cell>{e.phoneNumber}</Table.Cell>
                        </Table.Row>

                        </Table.Body>



                ))}
            </Table>
            </Container>
        </div>
    )
}
