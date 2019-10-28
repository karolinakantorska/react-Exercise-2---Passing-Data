import React, { Component } from 'react'

class MovieList extends Component {
	render() {
		return(
			<div>
          		{Object.keys(this.props.moviesObject).map(key => {
          			const title = this.props.moviesObject[key].name;
			 		return (
                 		<h3 key ={this.props.moviesObject[key].id}>{title}</h3>       
					)
				})} 
			</div>
		)
	} 
} 

export default MovieList 