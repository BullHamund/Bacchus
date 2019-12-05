import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardTitle,
  Container,
  Row,
  Col,
  CardText,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import styled from "styled-components";
import API from "../utils/API";
import wall from '../assets/images/wall7.jpg'
import paper from '../assets/images/paper.jpg'


const style = {
  "color": "white",
  "text-align": "center",
  "font-family": "Redressed",
  "font-size": "70px"
}

const style2 = {
  "color":"black",
  "font-size": "40px",
  "font-family": "fantasy",
  "text-align": "center",
}

const style3 = {
  "color": "black",
  "font-size": "19px",
  "font-family": "fantasy",
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

 <div className="Jumbo" style={{backgroundImage:`url(${wall})`, backgroundPosition:'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>

    
      <Col lg="6" style={{padding:'180px', color:'white'}}>
      <h1 style={style}>Cheers to the Good Times</h1>
        <InputGroup>
        <Input
                        name="recipeSearch"
                        value={this.state.recipeSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search for a cocktail"
                      />
        <InputGroupAddon addonType="append">
        <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                        outline color ="warning"
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
    <Row >
            <Col size="xs-12" >
              {!this.state.recipes.length ? (
                <h1 className = "text-center"> </h1>
              ) : (
                <RecipeList >
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
  <Card body inverse style={{ backgroundImage:`url(${paper})`, borderColor: '#333' }}>
        <CardTitle style={style2}>What?</CardTitle>
        <CardText style={style3}>är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</CardText>
      </Card>
  </Col>
  <Col sm="4">
  <Card body inverse style={{ backgroundImage:`url(${paper})`, borderColor: '#333' }}>
        <CardTitle style={style2}>Why?</CardTitle>
        <CardText style={style3}>är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</CardText>
      </Card>
  </Col>
  <Col sm="4">
  <Card body inverse style={{ backgroundImage:`url(${paper})`, borderColor: '#333' }}>
        <CardTitle style={style2}>Who?</CardTitle>
        <CardText style={style3}>är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker.</CardText>
      </Card>
  </Col>
  </Row>



     
​</div>
  </div>);
  }
}
export default Home;
