import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import axios from 'axios';
import API from "../utils/API";
class Events extends React.Component {
  state = {
    events: []
  }
  componentDidMount() {
    this.getEvents();
  }
  getEvents = () => {
    API.getEvents()
      .then(res => this.setState({events: res.data}))
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.state.events)
    const myEvents = this.state.events
    const listEvents = myEvents.map((event) => {
      return (
        <Col sm="6">
        <Card body>
          <CardTitle>{event.eventName}</CardTitle>
          <CardText>{event.eventDesc} <br />
          {event.eventDate} <br/> 
          {`${event.eventStart} - ${event.eventEnd}`}</CardText>
          <Button>Learn More</Button>
        </Card>
      </Col>
      )
    })
    return(
      <div>
        <h1>Events</h1>
        <Row>
          {listEvents}
        </Row>
    </div>);
  }
}
export default Events;