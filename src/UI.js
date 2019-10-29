import React, { Component } from 'react';
import MovieCard from "./MovieCard.js"

class MovieList extends Component {
	render() {
      const { profiles, users, movies, usersByMovie } = this.props;
      
      /*
      const profiles = this.props.profiles;
      const users = this.props.users;
      const movies = this.props.movies;
      const usersByMovie = this.props.usersByMovie;
      */
      
      const movieInfo = Object.keys(movies).map(id => (
        <MovieCard
       	 key={id}
       	 users={users}
       	 usersWhoLikedMovie={usersByMovie[id]}
       	 movieInfo={movies[id]}
      	/>
    ));            
		return(
			<ul>{movieInfo}</ul>
		)
	} 
} 

export default MovieList 