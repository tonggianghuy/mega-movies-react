import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import MoviesList from './MoviesList';
import SAMPLE_DATA from './sample_data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      Movieslist: []
    };
  }
  async componentDidMount(){
    //key api: d1e86b746352a8f497441e66df33f777
    let apikey = 'd1e86b746352a8f497441e66df33f777';
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
    let results = await fetch(url);
    let data = await results.json();
    this.setState({
      Movieslist: data.results
    })

  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <MoviesList movies={this.state.Movieslist}/>
      </div>
    );
  }
}

export default App;
