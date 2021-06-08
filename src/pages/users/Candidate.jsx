import React from 'react'
import CandidateService from '../../services/candidateService';
import {useState,useEffect} from 'react'
import { Table } from 'semantic-ui-react'

export default function Candidate() {

    const  [candidates, setCandidates] = useState([])

    useEffect(()=>{
         let candidateService=new CandidateService();
         candidateService.getCandidates().then(result=>setCandidates(result.data.data));
    }
   

       )
    return (
        <div>
            <Table  fixed>
             <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ad-Soyad</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
                       
                     </Table.Row>
             </Table.Header>

                {candidates.map(c=>(

                        <Table.Body key={c.id}>
                        <Table.Row>
                        <Table.Cell>{c.firstName} {c.lastName}</Table.Cell>
                        <Table.Cell>{c.email}</Table.Cell>
                        <Table.Cell>{c.dateOfBirth}</Table.Cell>
                        
                        </Table.Row>

                        </Table.Body>



                ))}

             </Table>
        </div>
    )
}
