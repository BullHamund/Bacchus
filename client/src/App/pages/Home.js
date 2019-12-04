import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  Container,
  Row,
  Col,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import { RecipeList, RecipeListItem } from "../components/RecipeList";
import styled from "styled-components";
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
    return (
      <div>
        <Styles>
          <Jumbotron fluid className="Jumbo">
            <Container fluid>
              <h1>Search for a cocktail...</h1>

              <InputGroup>
                <Input
                  name="recipeSearch"
                  value={this.state.recipeSearch}
                  onChange={this.handleInputChange}
                  placeholder="...by name or ingredient!"
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

        <div>
          <Container>
            <Row>
              <Col size="xs-12">
                {!this.state.recipes.length ? (
                  <h1 className="text-center">Bacchus must now his power resign!</h1>
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
              <Col>I am the only God of wine...</Col>
            </Row>
            <br></br>
            ...err, spirits? We know what you're thinking, if this is
            a cocktail app, why'd we name it after the Greek God of wine?
            Well in fact, he was Roman god of agriculture, wine and fertility.
            Honest mistake, more than half of us made it too, but the point is
            he was, to put it in lame man's terms, the God of revelry...like, partying man!
            Sophisticatedly.
            <br></br>

            So go ahead and search the database of cocktaildb.com
            for nearly 600 cocktail recipes from the classic to not so...well...
            not so popular since the 1970's nearly killed over a hundred years of
            classic cocktail culture.
            <br></br>

            Then feel free to follow the links in the NavBAr ro search for articles
            from some of the days premier cocktail blogs and events at some of your
            local cocktail havens.
            <br></br>

            And remember, as a child, Bacchus was tutored by Thanos, who was a great lover of wine and often had to be carried on the back of a donkey.
          </Container>
        </div>

      </div>
    );
  }
}
export default Home;
