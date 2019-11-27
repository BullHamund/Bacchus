import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Jumbotron, Container, Row, Col,
  InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';

import styled from 'styled-components';

const Styles = styled.div``;



function Home() {
  return(<div>
<Styles>
 <Jumbotron fluid className="Jumbo">
    <Container fluid>
      <h1>Cheers to the Good Times</h1>
        <Button variant="outline-dark">Randomize</Button>
        <InputGroup>
        <Input placeholder="Search Drinks" />
        <InputGroupAddon addonType="append">
          <InputGroupText>Search</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Container>
  </Jumbotron>
</Styles>
​
<div>
  <Card>
    <Container>
        <Row>
            <Col>Our Story</Col>
        </Row>
        <br></br>
        tas ir teksta salikums, kuru izmanto poligrāfijā un maketēšanas darbos. Lorem Ipsum ir kļuvis par vispārpieņemtu teksta aizvietotāju kopš 16. gadsimta sākuma. Tajā laikā kāds nezināms iespiedējs izveidoja teksta fragmentu, lai nodrukātu grāmatu ar burtu paraugiem. Tas ir ne tikai pārdzīvojis piecus gadsimtus, bet bez ievērojamām izmaiņām saglabājies arī mūsdienās, pārejot uz datorizētu teksta apstrādi. Tā popularizēšanai 60-tajos gados kalpoja Letraset burtu paraugu publicēšana ar Lorem Ipsum teksta fragmentiem un, nesenā pagātnē, tādas maketēšanas programmas kā Aldus PageMaker, kuras šablonu paraugos ir izmantots Lorem Ipsum teksts.
    </Container>
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
          <Button>View</Button>
        </CardBody>
      </Card>
  
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>View</Button>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>View</Button>
        </CardBody>
      </Card>

      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>View</Button>
      </Card>

      <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>View</Button>
        </CardBody>
      </Card>
      
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button color="secondary">View</Button>
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