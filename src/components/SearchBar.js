import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
    state={term : ''}

    onInputChange=(event)=>{
        this.setState({ term: event.target.value })
    }
    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.onTermSubmit(this.state.term)
    }
    render() { 
        return(
            <div className="search-bar ui segment">
            <h1 ostyle={{cursor:'pointer'}}>  <FontAwesomeIcon className="fas fa-camera fa-2x" icon={faCoffee} /> youtube </h1>
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label> Video Search </label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                </div>
            </form>
            </div>
        )
    }
}

export default SearchBar