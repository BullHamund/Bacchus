import React,{ Component } from "react";
import API from "../utils/API";

import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  };

  componentDidMount() {
    API.getArticles().then(articlesList => {
      // console.log(articlesList)
      this.setState({ articles: articlesList.data, loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return "Articles loading...";
    } else {
      return (
        <div>
          <h1>Articles</h1>
          {this.state.articles.map(articleObj => (
            <Col sm="6">
              <Card body>
                <CardTitle>
                  {articleObj.title}
                  {/* Article 1 */}
                </CardTitle>
                <CardText>
                  {articleObj.subtext}
                  {/* Article Text */}
                </CardText>
                <Button href={articleObj.url} target="_blank" class="button">
                  View full article
                </Button>
              </Card>
            </Col>
          ))}
          {/* <Row>
        <Col sm="6">
          <Card body>
            <CardTitle>
              {articleObj.title}
              Article 1
            </CardTitle>
            <CardText>
              {articleObj.subtext}
              Article Text
            </CardText>
            <Button class="button">{articleObj.url}View full article</Button>
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
      </Row> */}
        </div>
      );
    }
  }
}

export default Articles;
