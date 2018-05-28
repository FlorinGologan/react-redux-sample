import React, { Component } from 'react'
import { connect } from 'react-redux'

class CourseDetails extends Component {
  render () {
    if (!this.props.course) {
      return <div>Loading...</div>
    }

    return <div className="col-md-8">
      <h1>{ this.props.course.name }</h1>
      <p>#{ this.props.course.id } | { this.props.course.description }</p>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    course: state.selectedCourse
  }
}

export default connect(mapStateToProps)(CourseDetails)