import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers/index'

import SearchBar from './components/searchBar'

import CourseList from './containers/courseList'
import CourseDetails from './containers/courseDetails'

const createStoreWithMiddleware = applyMiddleware()(createStore)

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <SearchBar
          onSearchChange={ query => courseSearch(query) }/>
        <div className="row">
          <CourseList/>
          <CourseDetails/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App/>
  </Provider>, document.querySelector('.container'))