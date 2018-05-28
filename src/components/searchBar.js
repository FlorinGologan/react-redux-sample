import React, { Component } from 'react'

class SearchBar extends Component {

  constructor (props) {
    super(props)

    this.state = { query: '' }
  }

  render () {
    return (
      <div className="form-group">
        <input className="form-control"
               value={ this.state.query }
               onChange={ event => this.onInputChange(event.target.value) }/>
      </div>
    )
  }

  onInputChange (query) {
    this.setState({ query })
  }
}

export default SearchBar