import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Button, Container, Row, Col ,InputGroup, InputGroupAddon, Input, CardTitle,
  CardText, CardImg, CardImgOverlay
} from 'reactstrap';
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import styled from 'styled-components';
import API from "../utils/API";
import wall from '../assets/images/wall13.jpg'


const style = {
  "color": "white",
  "text-align": "center",
  "font-family": "lobster",
  "font-size": "50px"
}





class Home extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data.drinks }))
      .catch(err => console.log(err));
  };
  render() {
  return(<div>

 <div className="Jumbo" style={{backgroundImage:`url(${wall})`, backgroundPosition:'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '91vh'}}>

    
      <Col lg="6" style={{padding:'200px', color:'white'}}>
      <h1 style={style}>Cheers to the Good Times</h1>
        <InputGroup>
        <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For Drinks"
                      />
        <InputGroupAddon addonType="append">
        <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
        </InputGroupAddon>
      </InputGroup>
     </Col>
     <Col lg="5"></Col>
    
 </div>


​
<div>
  
    <Container>
    <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (

                <h1 className="text-center"></h1>

              ) : (
                <RecipeList>
                  {this.state.recipes.map(recipe => {
                    return (
                      <RecipeListItem
                        key={recipe.strDrink}
                        title={recipe.strDrink}
                        
                        ingredients={recipe.strInstructions}
                        thumbnail={recipe.strDrinkThumb}
                      />
                    );
                  })}
                </RecipeList>
              )}
            </Col>
          </Row>
      </Container>
      
      <Container>
      <Row>
      <Card body color="transparent" style={{height:'30vh', paddingTop:'30px'}}>
        <CardTitle style={style}>Overview</CardTitle>
      </Card>
      </Row>
      </Container>
  
  <Row>
  <Col sm="4">
  <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
        <CardTitle style={style}>What?</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
  </Col>
  <Col sm="4">
  <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
        <CardTitle style={style}>Why?</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
  </Col>
  <Col sm="4">
  <Card body inverse style={{ backgroundColor: 'transparent', borderColor: '#333' }}>
        <CardTitle style={style}>Who?</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      </Card>
  </Col>
  </Row>



     
​</div>
  </div>);
  }
}
export default Home;