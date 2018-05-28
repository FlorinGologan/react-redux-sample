import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectCourse } from '../actions/index'

class CourseList extends Component {
  courseItems () {
    return this.props.courses.map((course) => {
        return <li
          key={ course.id }
          onClick={ () => this.props.selectCourse(course) }
          className="list-group-item btn btn-light">
          { course.name }
        </li>
      }
    )
  }

  render () {
    return (
      <ul className="col-md-4 list-group">
        { this.courseItems() }
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    courses: state.courses
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectCourse: selectCourse }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)