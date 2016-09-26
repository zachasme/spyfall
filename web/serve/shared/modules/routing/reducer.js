import {
  PUSH_LOCATION,
  REPLACE_LOCATION,
} from './constants'

const initialState = {
  location: null,
}

export default function reducer(state = initialState, { type, payload }) {
  if ([PUSH_LOCATION, REPLACE_LOCATION].includes(type)) {
    const { location } = payload
    return {
      ...state,
      location,
    }
  }
  return state
}
