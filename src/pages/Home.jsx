
import React from 'react'
import { Container ,Image} from 'semantic-ui-react'





export default function Home() {
    return (
        <div  className="jumbotron bg-dark col-sm-12  mt-0 " jumbotron-fluid>
       <Container>
      <h1 className="display-3 text-light align-start dene">Home Page</h1>
      

      <Image.Group size='small'>
      <Image className="abc" src={"https://images3.alphacoders.com/225/thumb-1920-225507.jpg"} />
      
      <Image src={"https://images5.alphacoders.com/944/thumb-1920-944367.jpg"} />
      
    </Image.Group >

    
    <Image.Group size='small'>
    <Image src={"https://images3.alphacoders.com/225/thumb-1920-225507.jpg"} />
    <Image src={"https://images5.alphacoders.com/944/thumb-1920-944367.jpg"} />
    </Image.Group>

  </Container>
        </div>
    )
}
