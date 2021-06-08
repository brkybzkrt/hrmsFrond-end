import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'

export default function Footer() {
    return (
        <div>
            <footer>
             <Segment inverted vertical style={{ padding: '4em 0em' }}>
             <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Banana Pre-Order</List.Item>
                <List.Item as='a'>DNA FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Contact
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>

              <span>
              <Icon loading name="linkedin" size="large"></Icon>
              <span>
               

              </span>
                <Icon loading name="twitter"  size='large'></Icon>
              </span>
             
             <span><Icon loading name="google" size='large'></Icon></span>

            </Grid.Column>

            <Grid.Column width={3}>


           
            <p style={{marginTop:"2rem",marginRight:"3rem"}}>
            Copyright 
             <span> <Icon name="copyright" ></Icon> -2021</span>

            </p>


            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      </Segment>
      </footer>
        </div>
    )
}
