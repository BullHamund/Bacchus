import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


function Articles() {
    return(<div>
        <h1>Articles</h1>
        <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Article 1</CardTitle>
          <CardText>Article Text</CardText>
          <Button class="button">View full article</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Article 2</CardTitle>
          <CardText>Article Text</CardText>
          <Button class="button">View full article</Button>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Article 3</CardTitle>
          <CardText>Article Text</CardText>
          <Button class="button">View full article</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Article 4</CardTitle>
          <CardText>Article Text</CardText>
          <Button class="button">View full article</Button>
        </Card>
      </Col>
    </Row>
    </div>)
}

export default Articles;