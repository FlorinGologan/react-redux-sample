import { combineReducers } from 'redux'
import CoursesReducer from './reducerCourses'
import SelectedCourse from './reducerSelectedCourse'

const rootReducer = combineReducers({
  courses: CoursesReducer,
  selectedCourse: SelectedCourse
})

export default rootReducer