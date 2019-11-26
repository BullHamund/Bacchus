import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container,  } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';


function Home() {
  return(<div>
    <Jumbotron fluid>
  <Container fluid>
    <h1 className="display-3">Fluid jumbotron</h1>
      <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </Container>
</Jumbotron>
​
<div>
  <Card>
    <Container>
        <Row>
            <Col>Our Story</Col>
        </Row>
    </Container>
    Content will go in here about our story
  </Card>
</div>
​
<Container>
      <Row>
        <Col>Articles</Col>
      </Row>
</Container>
​
<CardColumns>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">Button</Button>
      </Card>
    </CardColumns>
​
<Container>
  <Row>
    <Col>Events</Col>
  </Row>
</Container>
​
<Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
​
<Row>
  <Col sm="6">
    <Card body>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </Card>
  </Col>
  <Col sm="6">
    <Card body>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </Card>
  </Col>
</Row>
  </div>);
}
export default Home;