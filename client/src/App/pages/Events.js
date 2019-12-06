import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Button, Row, Container} from 'reactstrap';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import wall from '../assets/images/wall8.jpg'
import paper from '../assets/images/paper2.jpg'

const style = {
  "color": "white",
  "textAlign": "center",
  "fontFamily": "sans",
  "fontSize": "70px"
}

function Events() {
return(<div>
  <div className="Background" style={{backgroundImage:`url(${wall})`, backgroundPosition:'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height:'100vh'}}>
    <h1 style={style}>EVENTS</h1>
    <Container>
    <Row>
      <CardColumns>
      <Card style={{ backgroundImage:`url(${paper})`, borderColor: 'black' }}>
          <Card.Header>Event</Card.Header>
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                 </Card.Text>
                  <Button outline color="primary">Follow</Button>
            </Card.Body>
        </Card>

        <Card style={{ backgroundImage:`url(${paper})`, borderColor: 'black' }}>
          <Card.Header>Event</Card.Header>
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                 </Card.Text>
                  <Button outline color="primary">Follow</Button>
            </Card.Body>
        </Card>

        <Card style={{ backgroundImage:`url(${paper})`, borderColor: 'black' }}>
          <Card.Header>Event</Card.Header>
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                 </Card.Text>
                  <Button outline color="primary">Follow</Button>
            </Card.Body>
        </Card>

        <Card style={{ backgroundImage:`url(${paper})`, borderColor: 'black' }}>
          <Card.Header>Event</Card.Header>
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                 </Card.Text>
                  <Button outline color="primary">Follow</Button>
            </Card.Body>
        </Card>

        <Card style={{ backgroundImage:`url(${paper})`, borderColor: 'black' }}>
          <Card.Header>Event</Card.Header>
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                 </Card.Text>
                  <Button outline color="primary">Follow</Button>
            </Card.Body>
        </Card>

        <Card style={{ backgroundImage:`url(${paper})`, borderColor: 'black' }}>
          <Card.Header>Event</Card.Header>
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                 </Card.Text>
                  <Button outline color="primary">Follow</Button>
            </Card.Body>
        </Card>

</CardColumns>

  </Row>
  </Container>

    </div>
</div>);
}

export default Events;