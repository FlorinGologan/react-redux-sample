export function selectCourse (course) {
  return {
    type: 'COURSE_SELECTED',
    payload: course
  }
}