import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, Container, Row, Col ,CardText, CardColumns,
  CardSubtitle, CardBody, Jumbotron, 
  InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import styled from 'styled-components';
import API from "../utils/API";
 
const Styles = styled.div``;



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
<Styles>
 <Jumbotron fluid className="Jumbo">
    <Container fluid>
      <h1>Cheers to the Good Times</h1>

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
          {/* <InputGroupText>Search</InputGroupText> */}
        </InputGroupAddon>
      </InputGroup>
    </Container>
  </Jumbotron>
</Styles>
​
<div>
  
    <Container>
    <Row>
            <Col size="xs-12">
              {!this.state.recipes.length ? (
                  <h1 className="text-center">No Drinks to Display</h1>
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
  
  
</div>
​
  </div>);
  }
}
export default Home;