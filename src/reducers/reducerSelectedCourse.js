export default function (state = null, action) {
  switch (action.type) {
    case 'COURSE_SELECTED':

      console.log(action)

      return action.payload
  }

  return state
}