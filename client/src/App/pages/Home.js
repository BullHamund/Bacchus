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
import Cards from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import { RecipeList, RecipeListItem } from "../components/RecipeList";
// import styled from "styled-components";
import API from "../utils/API";
import wall from '../assets/images/wall7.jpg'
import paper from '../assets/images/paper.jpg'
import logo from "../assets/images/baccusLogo.jpg";



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

const style4 = {
  "padding": "25px"
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

 <div className="Jumbo" style={{backgroundImage:`url(${wall})`, backgroundPosition:'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height:'90vh', position:'unset'}}>

    
      <Col lg="6" style={{padding:'150px', color:'white'}}>
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
                <h1 className = "text-center" > </h1>
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



      <div style={{height:'90vh'}}>
        <Container>
          <Row>
            <Col>
            </Col>
            <Col lg="12" style={{padding:'150px'}}>
              <Card color="transparent" style={{ borderColor: '#333', }}>
                  <CardTitle style={{color:'white', "font-size": "50px", "font-family": "fantasy", textAlign:'center'}}>Bacchus must now his power resign!</CardTitle>
                  <CardText style={{color:'white', "font-size": "25px", "font-family": "fantasy", textAlign:'center'}}>...err, spirits? We know what you're thinking, if this is
            a cocktail app, why'd we name it after the Greek God of wine?
            Well in fact, he was Roman god of agriculture, wine and fertility.
            Honest mistake, more than half of us made it too, but the point is
            he was, to put it in lame man's terms, the God of revelry...like, partying man!
            Sophisticatedly.</CardText>
              </Card>
            </Col>
        
          </Row>
        </Container>
      </div>





      <Container>
      <Row>
      <Card body color="transparent" style={{height:'25vh', paddingTop:'30px'}}>
        <CardTitle style={style}>Overview</CardTitle>
      </Card>
      </Row>
      </Container>
  
  <Row>
  <Col sm="4" style={style4}>
  <Card body inverse style={{ backgroundImage:`url(${paper})`, borderColor: '#333' }}>
        <CardTitle style={style2}>WHAT?</CardTitle>
        <CardText style={style3}>The goal of this app is to become a source of knowledge for all who wish to exand their curiosity in the cocktail culture. Not only do we provide ways on how to make drinks, but we also inform you of local cocktail events near you. In addition, we give you the opportunit to scrape through articles related to the cocktail culture. Now what is the Cocktail Culture? We like to describe it as a community of fellow brothers and sisters who have one similarity, Mixology. </CardText>
      </Card>
  </Col>
  <Col sm="4" style={style4}>
  <Card body inverse style={{ backgroundImage:`url(${paper})`, borderColor: '#333' }}>
        <CardTitle style={style2}>WHY?</CardTitle>
        <CardText style={style3}>We do it because we like to show people that there is more to drinking alcohol. There is more to ordering the same drink at the bar on a friday night. There is more to holding up a line at a bar because you dont know what to order.  It's about the drinks, the people who make them, the places they make them and the people who drink them. It's about the history, it's about the fellowship of gathering and the hospitality of hosting. It's about sharing our worlds with one another. Physically and educationally. It's about all that and much more.</CardText>
      </Card>
  </Col>
  <Col sm="4" style={style4}>
  <Card body inverse style={{ backgroundImage:`url(${paper})`, borderColor: '#333' }}>
        <CardTitle style={style2}>WHO?</CardTitle>
        <CardText style={style3}>For obvious reasons, this app is perfect for users of legal drinking age within the drinking age limit of your country. For those who wish to learn more about the Cocktail Culture. For those who just want to have a good time. </CardText>
      </Card>
  </Col>
  </Row>



     
​</div>
  </div>);
  }
}
export default Home;
