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

                <h1 className="text-center"></h1>

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
    
      <Container>
        <Row>
            <Col>Our Story</Col>
        </Row>
        <br></br>
        tas ir teksta salikums, kuru izmanto poligrāfijā un maketēšanas darbos. Lorem Ipsum ir kļuvis par vispārpieņemtu teksta aizvietotāju kopš 16. gadsimta sākuma. Tajā laikā kāds nezināms iespiedējs izveidoja teksta fragmentu, lai nodrukātu grāmatu ar burtu paraugiem. Tas ir ne tikai pārdzīvojis piecus gadsimtus, bet bez ievērojamām izmaiņām saglabājies arī mūsdienās, pārejot uz datorizētu teksta apstrādi. Tā popularizēšanai 60-tajos gados kalpoja Letraset burtu paraugu publicēšana ar Lorem Ipsum teksta fragmentiem un, nesenā pagātnē, tādas maketēšanas programmas kā Aldus PageMaker, kuras šablonu paraugos ir izmantots Lorem Ipsum teksts.
    </Container>
  
  
</div>
​
  </div>);
  }
}
export default Home;