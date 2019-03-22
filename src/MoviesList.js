import React, { Component } from 'react';
import MOVIES from './movies';
import { CardColumns } from 'reactstrap';

export default class MoviesList extends Component {
  render() {
    if(this.props.movies.length > 0){
      return (
        <CardColumns>
            {this.props.movies.map(movie => <MOVIES {...movie}/>)}
        </CardColumns>
      )
    }
    else{
      return <h1>No Movies!</h1>;
    }
    
  }
}
