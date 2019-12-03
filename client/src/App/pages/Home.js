import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody, Jumbotron, Container, Row, Col,
  InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';


import styled from 'styled-components';

const Styles = styled.div``;



class Home extends Component { 
  constructor(props){
    super(props);
    this.state ={
      search:"",
      recipe:[],
      events:[]
    }
  }

  componentDidMount() {
    axios.get("/api/getEvents").then((res) => {
      console.log(res);
      this.setState({events:res.data.events})
    }) 
  }

  componentDidUpdate() {
    console.log(this.state.events);
  }

  handleChange = (event) => {
  console.log(event.target.value);
  this.setState({search:event.target.value})

  } 
  handleSearch = () => {
    console.log(this.state.search)
    axios.get("/api/getDrinks/"+this.state.search).then((res) => {
      console.log(res);
      this.setState({recipe:res.data.drinks})

    })

  }
  render(){
    return(<div>
      <Styles>
       <Jumbotron fluid className="Jumbo">
          <Container fluid>
            <h1>Cheers to the Good Times</h1>
              {/* <Button variant="outline-dark">Randomize</Button> */}
              <InputGroup>
              <Input onChange={this.handleChange}placeholder="Search Drinks" />
              <InputGroupAddon addonType="append">
                <Button onClick={this.handleSearch}>Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Container>
        </Jumbotron>
      </Styles>
      
      <div>
        {
          this.state.recipe.map((item) =>{
            return <p>{item.strDrink}</p>

          })
        }
      </div>​


      <div>
        <Card>
          <Container>
              <Row>
                  <Col>Bacchus?</Col>
              </Row>
              <br/>
              Bacchus was the Roman god of agriculture, wine and fertility, equivalent to the Greek god Dionysus. Dionysius was said to be the last god to join the twelve Olympians. Supposedly, Hestia gave up her seat for him. His plants were vines and twirling ivy.
          
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
  

}
export default Home;