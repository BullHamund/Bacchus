import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';



function Events() {
return(<div>
    <h1>Events</h1>
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Event 1</CardTitle>
          <CardText>Event Information</CardText>
          <Button>Learn More</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Event 2</CardTitle>
          <CardText>Event Information</CardText>
          <Button>Learn More</Button>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Event 3</CardTitle>
          <CardText>Event Information</CardText>
          <Button>Learn More</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Event 4</CardTitle>
          <CardText>Event Information</CardText>
          <Button>Learn More</Button>
        </Card>
      </Col>
    </Row>
</div>);
}

export default Events;