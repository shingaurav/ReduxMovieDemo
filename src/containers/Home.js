import React, { Component } from 'react';
import { View, Text , FlatList } from 'react-native';
import mockMovies from "../mockMovies"; 
import MovieRow from "../components/MovieRow";
import {connect} from 'react-redux';

 class Home extends Component {
  constructor(props) {
    super(props);
    
  }

 async  componentDidMount(){
     const {addMovies} =  this.props
     const response = await fetch("http://www.omdbapi.com/?apikey=8a00c4a5&s=Batman");
     const data = await response.json()
     addMovies(data.Search)
    


   }

  render() {
      console.log("kya aa rha hai bhai ",movies);
      const { movies } = this.props
    return (
      <View style ={{flex:1,backgroundColor:'pink'}}>
          <FlatList
          data ={movies}
          renderItem = {({item : movie})=>
              <MovieRow movie = {movie}/> }
          keyExtractor  = {(movie) => movie.imdbID}
          
          />
  </View>
    );
  }
}

function mapStateToProps(state){
    return {
        movies : state
    }
}

function mapDispatchToProps(dispatch){
    return {

        addMovies : (movies) => dispatch({
            type : 'ADD_MOVIES',
            payload : {movies}
        })

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)