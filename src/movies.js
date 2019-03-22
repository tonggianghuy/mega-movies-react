import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';

export default class MOVIES extends Component {
  render() {
    return (

      // <Col xl='4'>
          <Card>
            <CardImg top width="100%" src={'https://image.tmdb.org/t/p/w500/'  +this.props.poster_path} />
            <CardBody>
              <CardTitle><h3>{this.props.title}</h3></CardTitle>
              {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
              <CardText>{this.props.overview}</CardText>
              {/* <Button>Button</Button> */}
            </CardBody>
          </Card>
        // </Col>
    )
  }
}
