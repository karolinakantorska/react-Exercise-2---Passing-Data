import React, { Component } from 'react'

class MovieList extends Component {
	render() {
		return (
        
//		console.log('Props', this.props.moviesObject[1].name)
//		console.log('Props', this.props.profilesObject[0].id)
          
			<ul>
				{this.props.profilesObject.map(prof => (
                 	<li key ={prof.id}>       
          				<p>{prof.id}</p>
          				<p>{this.props.moviesObject[1].name}</p>
        			</li>
    			))}
			</ul>
		)
	}
}

export default MovieList 